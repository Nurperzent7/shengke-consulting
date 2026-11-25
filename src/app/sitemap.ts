import type { MetadataRoute } from "next";
import { locales, serviceSlugs, siteUrl } from "@/lib/constants";

const pages = [
  "",
  "/about",
  "/services",
  "/cases",
  "/team",
  "/contact",
  "/consultation",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
      });
    }
    for (const slug of serviceSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
