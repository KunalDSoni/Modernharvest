import type { Metadata } from "next";
import { products } from "@/lib/products";
import { Leaf } from "@/components/ui";

/*
 * Print layout for the downloadable product catalogue.
 * scripts/catalogue-pdf.js prints this page to modern-harvest-catalogue.pdf
 * at build time, so the PDF always matches lib/products.ts.
 */
export const metadata: Metadata = {
  title: "Product catalogue",
  robots: { index: false }, // the PDF is the public artefact; keep this layout out of search
};

const CONTACT = [
  ["Email", "meet.dhaduk@modernsmilk.com"],
  ["Phone / WhatsApp", "+91 92130 22464"],
  ["Web", "modernharvest.in"],
] as const;

export default function Catalogue() {
  return (
    <div className="catalogue mx-auto max-w-[210mm] bg-white pt-28 text-ink print:pt-0">
      {/* Cover */}
      <section className="flex min-h-[297mm] flex-col justify-between bg-brand p-[18mm] text-white [break-after:page]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo-white.svg" alt="Modern Harvest" className="w-[62mm]" />
        <div>
          <p className="text-[14px] uppercase tracking-[0.14em] text-white/70">Product catalogue</p>
          <h1 className="mt-4 text-[48px] font-medium leading-[1.08] tracking-[-1px]">
            From Indian farms to your market.
          </h1>
          <p className="mt-6 max-w-[130mm] text-[17px] leading-relaxed text-white/85">
            Fresh produce, spices, oilseeds, grains and dehydrated products, sourced from trusted
            growers in Gujarat, graded with care and packed for export.
          </p>
        </div>
        <dl className="grid grid-cols-[1.5fr_1fr_1fr] gap-6 border-t border-white/25 pt-6 text-[13px]">
          {CONTACT.map(([k, v]) => (
            <div key={k}>
              <dt className="text-white/60">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Products, two per row */}
      <section className="grid grid-cols-2 gap-x-[10mm] gap-y-[7mm] px-[16mm] py-[2mm]">
        {products.map((p) => (
          <article key={p.slug} className="[break-inside:avoid]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-brand">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element -- plain img prints reliably
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center gap-2 text-white">
                  <Leaf className="!h-6 !w-6 text-white/80" />
                  <span className="text-[18px] font-medium">{p.name}</span>
                </div>
              )}
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-brand">{p.category}</p>
            <h2 className="mt-1 text-[20px] font-medium tracking-[-0.3px]">{p.name}</h2>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{p.description}</p>
          </article>
        ))}
      </section>

      {/* Back page */}
      <section className="mx-[16mm] mt-[4mm] rounded-card bg-paper px-[10mm] py-[8mm] [break-inside:avoid]">
        <h2 className="text-[26px] font-medium tracking-[-0.5px]">Request a quote</h2>
        <p className="mt-3 max-w-[140mm] text-[14px] leading-relaxed text-muted">
          Tell us the product, quantity, destination port and packaging you need, and we will come
          back with pricing and availability.
        </p>
        <dl className="mt-6 grid grid-cols-[1.5fr_1fr_1fr] gap-6 text-[13px]">
          {CONTACT.map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted">{k}</dt>
              <dd className="mt-1 font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
