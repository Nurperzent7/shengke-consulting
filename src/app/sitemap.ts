import type { MetadataRoute } from "next";
import { locales, serviceSlugs } from "@/lib/constants";

const base = "https://shengke.kz";
const pages = ["", "/about", "/services", "/cases", "/team", "/contact", "/consultation"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${base}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
      });
    }
    for (const slug of serviceSlugs) {
      entries.push({
        url: `${base}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
