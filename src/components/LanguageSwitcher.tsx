"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/constants";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(ru|en|zh|kk)/, "") || "";

  return (
    <div className="inline-flex max-w-full flex-wrap items-center gap-0.5 rounded-full border border-line/80 bg-white/80 p-1 text-[11px] font-semibold tracking-[0.08em]">
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}${rest}`}
            className={`rounded-full px-2.5 py-2 transition sm:px-2.5 sm:py-1.5 ${
              active
                ? "bg-navy text-white shadow-sm"
                : "text-muted hover:bg-soft hover:text-navy"
            }`}
            hrefLang={item}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
