import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceSlugs } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);
  return pageMetadata(locale, "/services", dict.pageMeta.services);
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);

  return (
    <div>
      <PageHero title={dict.services.title} subtitle={dict.services.subtitle} eyebrow="Services" />

      <section className="section-pad">
        <div className="container-page">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] border border-gold/25 bg-gradient-to-br from-white via-cream to-champagne/20 p-7 md:p-9">
            <div className="text-[11px] font-semibold tracking-[0.18em] text-gold-deep uppercase">
              Core practice
            </div>
            <h2 className="display mt-3 text-2xl font-semibold text-navy md:text-3xl">
              {dict.services.mainService}
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted md:text-base">{dict.services.audience}</p>
            <p className="mt-3 max-w-3xl text-sm text-muted">{dict.services.pricingNote}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {serviceSlugs.map((slug, idx) => {
              const item = dict.services.items[slug];
              return (
                <Link
                  key={slug}
                  href={localizedPath(locale, `/services/${slug}`)}
                  className="card-lift group rounded-[1.5rem] surface-card p-6 md:p-7"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-gold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-muted transition group-hover:translate-x-1 group-hover:text-navy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy group-hover:text-blue">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
