"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/constants";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(ru|en|zh|kk)/, "") || "";

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-line/80 bg-white/70 p-1 text-[11px] font-semibold tracking-[0.12em]">
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}${rest}`}
            className={`rounded-full px-2.5 py-1.5 transition ${
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
