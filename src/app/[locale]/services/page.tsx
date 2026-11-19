import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceSlugs } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";

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
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <div className="gold-line mb-4" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
            {dict.services.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{dict.services.subtitle}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="mb-8 rounded-3xl border border-gold/40 bg-soft p-6">
            <h2 className="text-xl font-semibold text-navy">{dict.services.mainService}</h2>
            <p className="mt-2 text-sm text-muted">{dict.services.audience}</p>
            <p className="mt-3 text-sm text-muted">{dict.services.pricingNote}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {serviceSlugs.map((slug) => {
              const item = dict.services.items[slug];
              return (
                <Link
                  key={slug}
                  href={localizedPath(locale, `/services/${slug}`)}
                  className="card-lift group rounded-3xl border border-line bg-white p-6"
                >
                  <h3 className="text-xl font-semibold text-navy group-hover:text-blue">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                    {dict.common.learnMore} <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
