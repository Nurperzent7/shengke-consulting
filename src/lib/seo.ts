import type { Metadata } from "next";
import { locales, siteUrl, type Locale } from "@/lib/constants";

const ogLocale: Record<Locale, string> = {
  kk: "kk_KZ",
  ru: "ru_RU",
  en: "en_US",
  zh: "zh_CN",
};

export function pageMetadata(
  locale: Locale,
  path: string,
  meta: { title: string; description: string },
): Metadata {
  const normalized = path === "/" ? "" : path;
  const url = `${siteUrl}/${locale}${normalized}`;
  const languages = Object.fromEntries(
    locales.map((item) => [item, `${siteUrl}/${item}${normalized}`]),
  ) as Record<string, string>;
  languages["x-default"] = `${siteUrl}/kk${normalized}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Shengke Consulting",
      locale: ogLocale[locale],
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Shengke Consulting",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}
