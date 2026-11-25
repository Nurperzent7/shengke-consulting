import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { serviceSlugs, type ServiceSlug } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";

export function generateStaticParams() {
  return serviceSlugs.flatMap((slug) =>
    ["ru", "en", "zh", "kk"].map((locale) => ({ locale, slug })),
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);

  if (!serviceSlugs.includes(slug as ServiceSlug)) notFound();
  const item = dict.services.items[slug as ServiceSlug];

  return (
    <div>
      <PageHero title={item.title} subtitle={item.short} eyebrow={dict.services.title} />
      <div className="container-page -mt-2 pt-4">
        <Link
          href={localizedPath(locale, "/services")}
          className="text-sm font-medium text-muted transition hover:text-navy"
        >
          ← {dict.common.backToServices}
        </Link>
      </div>

      <section className="section-pad pt-8">
        <div className="container-page grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface-card rounded-[1.75rem] p-8 md:p-10">
            <h2 className="display text-3xl font-semibold text-navy">{dict.common.learnMore}</h2>
            <ul className="mt-7 space-y-3.5">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold-deep" size={18} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit overflow-hidden rounded-[1.75rem] surface-dark p-7 text-white">
            <div className="eyebrow text-champagne">Core</div>
            <h3 className="display mt-3 text-2xl font-semibold">{dict.services.mainService}</h3>
            <p className="mt-4 text-sm text-white/70">{dict.services.pricingNote}</p>
            <div className="mt-7 flex flex-col gap-3">
              <Link href={localizedPath(locale, "/consultation")} className="btn-primary text-center">
                {dict.common.bookConsultation}
              </Link>
              <Link href={localizedPath(locale, "/contact")} className="btn-ghost text-center">
                {dict.common.contactUs}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
