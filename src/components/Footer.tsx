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
    <footer className="bg-navy text-white">
      <div className="container-page section-pad grid gap-10 md:grid-cols-3">
        <div>
          <Image src="/logo-white.svg" alt="Shengke Consulting" width={190} height={44} />
          <p className="mt-4 max-w-sm text-sm text-white/75">{dict.footer.tagline}</p>
          <div className="gold-line mt-5" />
          <ul className="mt-5 space-y-1 text-sm text-white/70">
            <li className="font-medium text-white/90">{dict.legalEntity.name}</li>
            <li>
              {dict.legalEntity.binLabel}: {dict.legalEntity.bin}
            </li>
            <li>{dict.legalEntity.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
            {dict.footer.contacts}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={contacts.map2gis} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {contacts.address[locale]}
              </a>
            </li>
            <li>
              <a href={`tel:${contacts.alikhanTel}`} className="hover:text-white">
                {contacts.alikhan}
              </a>
            </li>
            <li>
              <a href={`tel:${contacts.taxTel}`} className="hover:text-white">
                {contacts.tax}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`} className="hover:text-white">
                {contacts.email}
              </a>
            </li>
            <li>
              WeChat: {contacts.wechatId}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/55">
        {dict.footer.year}. {dict.footer.rights}
      </div>
    </footer>
  );
}
