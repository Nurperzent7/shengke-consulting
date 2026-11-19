import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { serviceSlugs, type ServiceSlug } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";

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
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <Link
            href={localizedPath(locale, "/services")}
            className="text-sm text-white/70 hover:text-white"
          >
            ← {dict.common.backToServices}
          </Link>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{item.short}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-line bg-white p-8">
            <h2 className="text-2xl font-semibold text-navy">{dict.common.learnMore}</h2>
            <ul className="mt-6 space-y-3">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue" size={18} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-3xl border border-line bg-soft p-6">
            <h3 className="text-lg font-semibold text-navy">{dict.services.mainService}</h3>
            <p className="mt-3 text-sm text-muted">{dict.services.pricingNote}</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={localizedPath(locale, "/consultation")}
                className="rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {dict.common.bookConsultation}
              </Link>
              <Link
                href={localizedPath(locale, "/contact")}
                className="rounded-full border border-navy/20 px-4 py-3 text-center text-sm font-semibold text-navy"
              >
                {dict.common.contactUs}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
