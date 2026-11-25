import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { contacts } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { WeChatPanel } from "@/components/WeChatPanel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);
  return pageMetadata(locale, "/contact", dict.pageMeta.contact);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);

  return (
    <div>
      <PageHero title={dict.contact.title} subtitle={dict.contact.subtitle} eyebrow="Contacts" />

      <section className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="surface-card rounded-[1.35rem] p-5 sm:rounded-[1.5rem] sm:p-6 md:p-7">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-navy">
                <MapPin size={18} className="text-gold-deep" />
                {dict.contact.office}
              </h2>
              <p className="text-sm leading-relaxed text-muted">{contacts.address[locale]}</p>
              <a
                href={contacts.map2gis}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-navy transition hover:text-blue"
              >
                {dict.contact.map}
              </a>
            </div>

            <div className="surface-card rounded-[1.5rem] p-6 md:p-7">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-navy">
                <Phone size={18} className="text-gold-deep" />
                {dict.contact.phones}
              </h2>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <span className="block text-[11px] tracking-[0.12em] text-navy/50 uppercase">
                    {dict.contact.legal}
                  </span>
                  <a href={`tel:${contacts.alikhanTel}`} className="font-medium text-navy">
                    {contacts.alikhan}
                  </a>
                </li>
                <li>
                  <span className="block text-[11px] tracking-[0.12em] text-navy/50 uppercase">
                    {dict.contact.tax}
                  </span>
                  <a href={`tel:${contacts.taxTel}`} className="font-medium text-navy">
                    {contacts.tax}
                  </a>
                </li>
                <li>
                  <span className="block text-[11px] tracking-[0.12em] text-navy/50 uppercase">
                    {dict.contact.china}
                  </span>
                  <a href={`tel:${contacts.luoChinaTel}`} className="font-medium text-navy">
                    {contacts.luoChina}
                  </a>
                  <span className="mx-2 text-line">/</span>
                  <a href={`tel:${contacts.luoKzTel}`} className="font-medium text-navy">
                    {contacts.luoKz}
                  </a>
                </li>
              </ul>
            </div>

            <div className="surface-card rounded-[1.5rem] p-6 md:p-7">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-navy">
                <Mail size={18} className="text-gold-deep" />
                Email
              </h2>
              <a href={`mailto:${contacts.email}`} className="text-sm font-medium text-navy">
                {contacts.email}
              </a>
              <div className="mt-5">
                <a
                  href={contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm"
                >
                  {dict.common.openWhatsApp}
                </a>
              </div>
            </div>

            <div className="surface-card rounded-[1.5rem] p-6 md:p-7">
              <h2 className="mb-3 text-lg font-semibold text-navy">{dict.contact.requisites}</h2>
              <ul className="space-y-2 text-sm text-muted">
                <li className="font-medium text-navy">{dict.legalEntity.name}</li>
                <li>
                  {dict.legalEntity.binLabel}: {dict.legalEntity.bin}
                </li>
                <li>{dict.legalEntity.address}</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[1.5rem] surface-dark p-7 text-white md:p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
              <h2 className="display relative text-3xl font-semibold">{dict.common.bookConsultation}</h2>
              <p className="relative mt-3 text-sm text-white/70">{dict.contact.goConsultation}</p>
              <Link href={localizedPath(locale, "/consultation")} className="btn-primary relative mt-6">
                {dict.nav.consultation}
              </Link>
            </div>

            <div className="surface-card rounded-[1.5rem] p-6 md:p-7">
              <h2 className="mb-4 text-lg font-semibold text-navy">{dict.common.wechat}</h2>
              <WeChatPanel dict={dict} embedded />
            </div>

            <div className="overflow-hidden rounded-[1.5rem] surface-card">
              <iframe
                title={dict.contact.map}
                src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22firmId%22%3A%2270000001119344388%22%7D"
                className="h-72 w-full border-0"
                loading="lazy"
              />
              <div className="border-t border-line px-4 py-3 text-center">
                <a
                  href={contacts.map2gis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-navy"
                >
                  {dict.contact.map}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
