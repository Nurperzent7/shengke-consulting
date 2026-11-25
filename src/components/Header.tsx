"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import type { Messages } from "@/messages/types";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Messages }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: localizedPath(locale, "/"), label: dict.nav.home },
    { href: localizedPath(locale, "/about"), label: dict.nav.about },
    { href: localizedPath(locale, "/services"), label: dict.nav.services },
    { href: localizedPath(locale, "/cases"), label: dict.nav.cases },
    { href: localizedPath(locale, "/team"), label: dict.nav.team },
    { href: localizedPath(locale, "/contact"), label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    const home = localizedPath(locale, "/");
    if (href === home) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-cream/92 shadow-[0_10px_40px_rgba(8,22,45,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-cream/80 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-3 md:h-[78px] md:gap-4">
        <BrandLogo
          href={localizedPath(locale, "/")}
          className="shrink-0"
          onClick={() => setOpen(false)}
        />

        <nav className="hidden min-w-0 items-center gap-1 lg:flex xl:gap-1.5" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative whitespace-nowrap rounded-full px-2 py-2 text-[12px] font-medium tracking-wide transition xl:px-2.5 xl:text-[13px] ${
                isActive(link.href)
                  ? "text-navy"
                  : "text-ink/70 hover:text-navy"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute inset-x-2.5 -bottom-0.5 h-px bg-gold" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <Link
            href={localizedPath(locale, "/consultation")}
            className="btn-primary !min-h-0 !px-3.5 !py-2.5 text-[12px] sm:!px-4 sm:text-[13px]"
          >
            {dict.nav.consultation}
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line bg-white/80 text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-line bg-cream/98 backdrop-blur-xl lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4 pb-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3.5 text-[15px] font-medium transition ${
                  isActive(link.href)
                    ? "bg-white text-navy shadow-sm"
                    : "text-ink hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-1 pt-3 md:hidden">
              <LanguageSwitcher locale={locale} />
            </div>
            <Link
              href={localizedPath(locale, "/consultation")}
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 text-center"
            >
              {dict.nav.consultation}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
