import Image from "next/image";
import Link from "next/link";
import { contacts, type Locale } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import type { Messages } from "@/messages/types";

export function Footer({ locale, dict }: { locale: Locale; dict: Messages }) {
  const links = [
    { href: localizedPath(locale, "/about"), label: dict.nav.about },
    { href: localizedPath(locale, "/services"), label: dict.nav.services },
    { href: localizedPath(locale, "/cases"), label: dict.nav.cases },
    { href: localizedPath(locale, "/team"), label: dict.nav.team },
    { href: localizedPath(locale, "/contact"), label: dict.nav.contact },
    { href: localizedPath(locale, "/consultation"), label: dict.nav.consultation },
    { href: localizedPath(locale, "/privacy"), label: dict.nav.privacy },
  ];

  return (
    <footer className="surface-dark noise relative overflow-hidden text-white">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="container-page relative section-pad grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <Image src="/logo-white.svg" alt="Shengke Consulting" width={210} height={42} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{dict.footer.tagline}</p>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
          <ul className="mt-6 space-y-1.5 text-sm text-white/65">
            <li className="font-medium text-white/90">{dict.legalEntity.name}</li>
            <li>
              {dict.legalEntity.binLabel}: {dict.legalEntity.bin}
            </li>
            <li className="max-w-sm leading-relaxed">{dict.legalEntity.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
            {dict.footer.contacts}
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            <li>
              <a
                href={contacts.map2gis}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {contacts.address[locale]}
              </a>
            </li>
            <li>
              <a href={`tel:${contacts.alikhanTel}`} className="transition hover:text-white">
                {contacts.alikhan}
              </a>
            </li>
            <li>
              <a href={`tel:${contacts.taxTel}`} className="transition hover:text-white">
                {contacts.tax}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`} className="transition hover:text-white">
                {contacts.email}
              </a>
            </li>
            <li>WeChat: {contacts.wechatId}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs tracking-wide text-white/45">
        {dict.footer.year}. {dict.footer.rights}
      </div>
    </footer>
  );
}
