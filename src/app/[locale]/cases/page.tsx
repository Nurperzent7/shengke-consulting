import type { Metadata } from "next";
import { getLocale, t } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);
  return pageMetadata(locale, "/cases", dict.pageMeta.cases);
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);

  return (
    <div>
      <PageHero title={dict.cases.title} subtitle={dict.cases.subtitle} eyebrow="Cases" />

      <section className="section-pad">
        <div className="container-page grid gap-4 md:grid-cols-2">
          {dict.cases.items.map((item, idx) => (
            <article key={item.title} className="card-lift rounded-[1.5rem] surface-card p-6 md:p-7">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="rounded-full border border-line bg-soft/80 px-3 py-1 text-navy">
                  {dict.cases.year}: {item.year}
                </span>
                {item.amount ? (
                  <span className="rounded-full border border-gold/30 bg-champagne/25 px-3 py-1 text-gold-deep">
                    {dict.cases.amount}: {item.amount}
                  </span>
                ) : null}
                <span className="ml-auto text-[11px] tracking-[0.14em] text-gold">0{(idx % 9) + 1}</span>
              </div>
              <h2 className="text-lg font-semibold leading-snug text-navy">{item.title}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-soft/70">
        <div className="container-page">
          <SectionHeading title={dict.results.title} />
          <div className="grid gap-4 md:grid-cols-2">
            {dict.results.items.map((item) => (
              <div key={item} className="rounded-[1.5rem] surface-card p-6 text-sm leading-relaxed text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
