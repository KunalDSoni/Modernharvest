// Prints the built /catalogue/ page to out/modern-harvest-catalogue.pdf.
// Runs after `next build` (see build:docs in package.json), so the PDF ships with the site.
const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('playwright');

const out = path.join(__dirname, '..', 'out');
if (!fs.existsSync(out)) throw new Error('out/ not found - run `next build` first');

const types = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2',
};

// Minimal static server over out/ so root-relative /media and /_next paths resolve.
const server = http.createServer((req, res) => {
  let p = path.join(out, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(out)) return res.writeHead(403).end();
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) return res.writeHead(404).end();
  res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});

(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const { port } = server.address();
  const browser = await chromium.launch({ channel: 'chrome' });
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/catalogue/`, { waitUntil: 'networkidle' });
    // Site chrome (nav, footer, floating buttons) has no place in the PDF.
    await page.addStyleTag({
      content: `header, footer, [data-print-hide], a[href="#main"] { display: none !important; }
                body { background: #fff !important; }
                .catalogue { padding-top: 0 !important; max-width: none !important; }
                /* Full-bleed cover; breathing room at the top and bottom of every other page */
                @page { size: A4; margin: 14mm 0; }
                @page :first { margin: 0; }`,
    });
    await page.evaluate(() => document.fonts.ready);
    const file = path.join(out, 'modern-harvest-catalogue.pdf');
    await page.pdf({ path: file, printBackground: true, preferCSSPageSize: true });
    console.log(`Wrote ${path.relative(process.cwd(), file)} (${Math.round(fs.statSync(file).size / 1024)} KB)`);
  } finally {
    await browser.close();
    server.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
