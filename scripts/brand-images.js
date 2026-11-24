// Renders the raster brand images Next.js serves from app/:
//   app/apple-icon.png       180x180 home-screen icon (solid background - iOS fills transparency with black)
//   app/opengraph-image.png  1200x630 link-preview card for WhatsApp, LinkedIn, X, etc.
// Source of truth is brand-logo/*.svg. Run: node scripts/brand-images.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const svg = (name) => fs.readFileSync(path.join(root, 'brand-logo', name), 'utf8');
const GREEN = '#035925';

const pages = [
  {
    out: 'app/apple-icon.png',
    width: 180,
    height: 180,
    html: `<body style="margin:0;width:180px;height:180px;background:${GREEN};display:grid;place-items:center">
      <div style="width:118px;height:118px">${svg('modern-harvest-icon.svg')
        .replace(/fill="#035925"/, 'fill="#ffffff"')
        .replace(/width="\d+" height="\d+"/, 'width="100%" height="100%"')}</div></body>`,
  },
  {
    out: 'app/opengraph-image.png',
    width: 1200,
    height: 630,
    html: `<body style="margin:0;width:1200px;height:630px;background:${GREEN};color:#fff;
      font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;display:flex;flex-direction:column;
      justify-content:space-between;padding:72px 80px;box-sizing:border-box">
      <div style="width:330px">${svg('modern-harvest-logo-white.svg')
        .replace(/width="[\d.]+" height="[\d.]+"/, 'width="100%" height="auto"')}</div>
      <div>
        <div style="font-size:64px;font-weight:500;letter-spacing:-1.5px;line-height:1.08;max-width:900px">
          Redefining agriculture at a global scale.</div>
        <div style="margin-top:28px;font-size:26px;opacity:.8">Agricultural exports from Gujarat, India · modernharvest.in</div>
      </div></body>`,
  },
];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const p of pages) {
    const page = await browser.newPage({ viewport: { width: p.width, height: p.height } });
    await page.setContent(p.html);
    await page.screenshot({ path: path.join(root, p.out) });
    await page.close();
    console.log('wrote', p.out);
  }
  await browser.close();
})();
