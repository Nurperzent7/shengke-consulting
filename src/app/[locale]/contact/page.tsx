import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { contacts } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
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
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <div className="gold-line mb-4" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
            {dict.contact.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{dict.contact.subtitle}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-line bg-white p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-navy">
                <MapPin size={18} className="text-blue" />
                {dict.contact.office}
              </h2>
              <p className="text-sm text-muted">{contacts.address[locale]}</p>
              <a
                href={contacts.map2gis}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-blue"
              >
                {dict.contact.map}
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-navy">
                <Phone size={18} className="text-blue" />
                {dict.contact.phones}
              </h2>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <span className="block text-xs text-navy/60">{dict.contact.legal}</span>
                  <a href={`tel:${contacts.alikhanTel}`} className="font-medium text-navy">
                    {contacts.alikhan}
                  </a>
                </li>
                <li>
                  <span className="block text-xs text-navy/60">{dict.contact.tax}</span>
                  <a href={`tel:${contacts.taxTel}`} className="font-medium text-navy">
                    {contacts.tax}
                  </a>
                </li>
                <li>
                  <span className="block text-xs text-navy/60">{dict.contact.china}</span>
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

            <div className="rounded-3xl border border-line bg-white p-6">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-navy">
                <Mail size={18} className="text-blue" />
                Email
              </h2>
              <a href={`mailto:${contacts.email}`} className="text-sm font-medium text-navy">
                {contacts.email}
              </a>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
                >
                  {dict.common.openWhatsApp}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6">
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
            <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-navy">{dict.common.bookConsultation}</h2>
              <p className="mt-2 text-sm text-muted">{dict.contact.goConsultation}</p>
              <Link
                href={localizedPath(locale, "/consultation")}
                className="mt-5 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue"
              >
                {dict.nav.consultation}
              </Link>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-navy">{dict.common.wechat}</h2>
              <WeChatPanel dict={dict} embedded />
            </div>

            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
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
                  className="text-sm font-semibold text-blue"
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
