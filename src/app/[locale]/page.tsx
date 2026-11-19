import Link from "next/link";
import {
  Building2,
  Scale,
  Languages,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { serviceSlugs, type Locale } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Scale, Building2, Languages, Handshake];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);
  const previewServices = serviceSlugs.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-navy to-transparent" />
        <div className="container-page relative grid items-center gap-10 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {dict.hero.badge}
            </div>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold md:text-5xl lg:text-[3.4rem]">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{dict.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={localizedPath(locale, "/consultation")}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:brightness-110"
              >
                {dict.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={localizedPath(locale, "/services")}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="fade-up grid gap-3 rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
            {[
              { value: "50", label: dict.stats.clientsLocal },
              { value: "100k+", label: dict.stats.clientsPartner },
              { value: "300k+", label: dict.stats.cases },
              { value: "¥9B+", label: dict.stats.recovered },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-white/70">{item.label}</span>
                <span className="text-xl font-semibold text-gold">{item.value}</span>
              </div>
            ))}
            <p className="px-1 text-[11px] text-white/45">{dict.common.partnerNote}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading title={dict.aboutPreview.title} />
            <p className="text-muted">{dict.aboutPreview.text}</p>
            <Link
              href={localizedPath(locale, "/about")}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue"
            >
              {dict.common.learnMore} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-navy">{dict.aboutPreview.missionTitle}</h3>
            <div className="gold-line mt-3" />
            <p className="mt-4 text-muted">{dict.aboutPreview.mission}</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading title={dict.advantages.title} subtitle={dict.advantages.subtitle} />
          <div className="grid gap-5 md:grid-cols-2">
            {dict.advantages.items.map((item, idx) => {
              const Icon = icons[idx] ?? Scale;
              return (
                <article
                  key={item.title}
                  className="card-lift rounded-3xl border border-line bg-white p-6"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-soft p-3 text-blue">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title={dict.services.title} subtitle={dict.services.subtitle} />
            <Link
              href={localizedPath(locale, "/services")}
              className="rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:bg-white"
            >
              {dict.common.allServices}
            </Link>
          </div>
          <div className="mb-6 rounded-2xl border border-gold/30 bg-white px-5 py-4 text-sm text-navy">
            <strong>{dict.services.mainService}</strong>
            <p className="mt-1 text-muted">{dict.services.audience}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((slug) => {
              const item = dict.services.items[slug];
              return (
                <Link
                  key={slug}
                  href={localizedPath(locale, `/services/${slug}`)}
                  className="card-lift group rounded-3xl border border-line bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-navy group-hover:text-blue">
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

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading title={dict.process.title} subtitle={dict.process.subtitle} />
          <div className="grid gap-4 md:grid-cols-5">
            {dict.process.steps.map((step, i) => (
              <div key={step.title} className="rounded-3xl border border-line bg-white p-5">
                <div className="mb-3 text-sm font-bold text-gold">0{i + 1}</div>
                <h3 className="font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-page">
          <SectionHeading title={dict.results.title} light />
          <div className="grid gap-4 md:grid-cols-3">
            {dict.results.items.map((item) => (
              <div key={item} className="rounded-3xl border border-white/15 bg-white/5 p-5">
                <CheckCircle2 className="mb-3 text-gold" size={22} />
                <p className="text-sm text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <SectionHeading title={dict.partner.title} subtitle={dict.partner.subtitle} />
            <p className="text-muted">{dict.partner.text}</p>
            <p className="mt-4 text-sm font-medium text-navy">{dict.partner.cities}</p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8">
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                ["200+", dict.stats.staff],
                ["2012", dict.stats.years],
                ["3,000+", "cases / month"],
                ["1,500+ m²", "Chengdu HQ"],
              ].map(([value, label]) => (
                <div key={String(value)} className="rounded-2xl bg-soft p-4">
                  <div className="text-2xl font-semibold text-navy">{value}</div>
                  <div className="mt-1 text-xs text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta locale={locale} dict={dict} />
    </>
  );
}

function Cta({
  locale,
  dict,
}: {
  locale: Locale;
  dict: ReturnType<typeof t>;
}) {
  return (
    <section className="section-pad">
      <div className="container-page overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#1a437f] to-blue px-8 py-12 text-white md:px-12">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
            {dict.common.bookConsultation}
          </h2>
          <p className="mt-3 text-white/75">{dict.contact.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, "/consultation")}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy"
            >
              {dict.nav.consultation}
            </Link>
            <Link
              href={localizedPath(locale, "/contact")}
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
