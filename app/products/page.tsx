import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABand, SplitHeader } from "@/components/sections";
import { Leaf } from "@/components/ui";
import { products, type Product } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Fresh fruits, vegetables, spices, oilseeds, grains and dehydrated products sourced from Indian farms for global buyers.",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      data-reveal
      className="group flex flex-col overflow-hidden rounded-card bg-white ring-1 ring-black/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-brand text-white">
            <Leaf className="!h-8 !w-8 text-white/80" />
            <span className="text-[22px] font-medium tracking-[-0.4px]">{product.name}</span>
            <span className="text-[13px] uppercase tracking-[0.12em] text-white/60">
              Photo coming soon
            </span>
          </div>
        )}
        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-pill bg-white/90 px-3 py-1 text-[13px] text-ink backdrop-blur-md">
          <Leaf className="text-brand" />
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-h3">{product.name}</h2>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{product.description}</p>
        <Link
          href="/contact-us"
          className="mt-6 inline-flex w-fit items-center gap-2 border-b border-black/20 pb-1 text-[15px] transition-colors hover:border-black"
        >
          Enquire now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <>
      <SplitHeader
        eyebrow="Our products"
        title="From Indian farms to your market."
        body="Fresh produce, spices, oilseeds, grains and dehydrated products, sourced from trusted growers, graded with care and packed for export."
        image="/media/products/mango.jpg"
        imageAlt="Basket of ripe Alphonso mangoes"
      />

      <section className="shell py-20 lg:py-28">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-8">
          <p className="text-[17px] text-muted">
            {products.length} products across fruits, vegetables, spices, oilseeds, grains and dehydrated lines.
          </p>
          {/* Generated at build time by scripts/catalogue-pdf.js */}
          <a
            href="/modern-harvest-catalogue.pdf"
            download
            className="inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-3 text-[15px] text-white transition-colors hover:bg-brand-dark"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
              <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download catalogue (PDF)
          </a>
        </div>

        <div data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
