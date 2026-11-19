"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import type { Messages } from "@/messages/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Messages }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: localizedPath(locale, "/"), label: dict.nav.home },
    { href: localizedPath(locale, "/about"), label: dict.nav.about },
    { href: localizedPath(locale, "/services"), label: dict.nav.services },
    { href: localizedPath(locale, "/cases"), label: dict.nav.cases },
    { href: localizedPath(locale, "/team"), label: dict.nav.team },
    { href: localizedPath(locale, "/contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link href={localizedPath(locale, "/")} className="shrink-0">
          <Image src="/logo.svg" alt="Shengke Consulting" width={180} height={42} priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link
            href={localizedPath(locale, "/consultation")}
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue"
          >
            {dict.nav.consultation}
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-line p-2 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-page flex flex-col gap-3 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-soft"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
            <Link
              href={localizedPath(locale, "/consultation")}
              onClick={() => setOpen(false)}
              className="rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {dict.nav.consultation}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
