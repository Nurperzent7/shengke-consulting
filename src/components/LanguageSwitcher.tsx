"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/constants";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(ru|en|zh|kk)/, "") || "";

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-white/80 p-1 text-xs font-semibold tracking-wide">
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}${rest}`}
            className={`rounded-full px-2.5 py-1 transition ${
              active
                ? "bg-navy text-white"
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
