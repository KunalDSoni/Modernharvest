# Modern Harvest

Website for Modern Harvest, an agricultural export business in Gujarat, India.

Live site: [modernharvest.in](https://modernharvest.in)

Built with Next.js 14 (App Router), React, Tailwind CSS and Framer Motion. It is exported as a fully
static site and served by GitHub Pages from the `docs/` folder.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploying

GitHub Pages serves the `docs/` folder on the `main` branch, so a deploy is a rebuild plus a commit:

```bash
npm run build:docs
```

This runs `next build` (static export to `out/`), prints the product catalogue PDF with
`scripts/catalogue-pdf.js`, then `scripts/export-to-docs.js` copies `out/` to
`docs/` and writes `CNAME` (modernharvest.in) and `.nojekyll`. Commit the updated `docs/` and push.

## Project layout

```
app/                    Pages (App Router). One folder per route.
  layout.tsx            Shared nav, footer, site metadata and schema.org data
  solutions/[slug]/     One generated page per solution in lib/content.ts
  sitemap.ts, robots.ts Built to /sitemap.xml and /robots.txt
  icon.svg, apple-icon.png, opengraph-image.png
                        Favicon, home-screen icon and link-preview image
components/             Navigation, Footer, hero video, section blocks, contact form
lib/
  content.ts            Solutions copy
  products.ts           Product catalogue shown on /products
  media.ts              Paths to shared images and the hero video
public/media/           Web-sized images and video served by the site
brand-logo/             Master logo files (SVG and PNG, green / white / black)
scripts/
  export-to-docs.js     Copies the build into docs/ for GitHub Pages
  catalogue-pdf.js      Prints /catalogue/ to modern-harvest-catalogue.pdf during build:docs
  brand-images.js       Re-renders apple-icon.png and opengraph-image.png from brand-logo/
docs/                   Built site (generated, do not edit by hand)
```

`Photos/` and `Mango/` hold full-resolution source photos and are git-ignored. Export a web-sized
copy (about 2000 px wide, under ~500 KB) into `public/media/` before using a photo on the site.

## Common edits

- **Products:** edit `lib/products.ts` and add the photo to `public/media/products/`.
- **Solutions:** edit `lib/content.ts`. New entries get a page and a sitemap entry automatically.
- **Contact details:** update `app/contact-us/page.tsx`, the schema.org block in `app/layout.tsx` and
  the WhatsApp number in `components/WhatsAppButton.tsx` together.
- **Logo changes:** update `brand-logo/`, `components/Logo.tsx` and `app/icon.svg`, then run
  `npm run brand-images`.

The contact form sends enquiries through [Web3Forms](https://web3forms.com).
