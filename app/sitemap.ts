import type { MetadataRoute } from "next";
import { solutions } from "@/lib/content";

// Static export: generated once at build time into out/sitemap.xml
export const dynamic = "force-static";

const base = "https://modernharvest.in";
const pages = ["", "about-us", "products", "solutions", "gallery", "faq", "contact-us"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [...pages, ...solutions.map((s) => `solutions/${s.slug}`)];
  // trailingSlash: true in next.config.js, so canonical URLs end in "/"
  return urls.map((p) => ({
    url: p ? `${base}/${p}/` : `${base}/`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p.startsWith("solutions/") ? 0.6 : 0.8,
  }));
}
