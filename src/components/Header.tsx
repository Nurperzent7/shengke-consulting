"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import type { Messages } from "@/messages/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Messages }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-cream/90 shadow-[0_10px_40px_rgba(8,22,45,0.07)] backdrop-blur-xl"
          : "border-b border-transparent bg-cream/75 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-3 md:h-[78px] md:gap-4">
        <Link href={localizedPath(locale, "/")} className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.svg"
            alt="Shengke Consulting"
            width={206}
            height={42}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium tracking-wide text-ink/70 transition hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link href={localizedPath(locale, "/consultation")} className="btn-primary !min-h-0 !py-2.5 !px-4 text-[13px]">
            {dict.nav.consultation}
          </Link>
        </div>

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

      {open && (
        <div className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-line bg-cream/98 backdrop-blur-xl lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4 pb-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3.5 text-[15px] font-medium text-ink hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-1 pt-3">
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
