import Link from "next/link";
import {
  Building2,
  Scale,
  Languages,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  UserCheck,
  Route,
  BadgeDollarSign,
  Globe2,
} from "lucide-react";
import { serviceSlugs, type Locale } from "@/lib/constants";
import { getLocale, localizedPath, t } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [
  Scale,
  Building2,
  Zap,
  UserCheck,
  Languages,
  Route,
  BadgeDollarSign,
  Globe2,
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);
  const previewServices = serviceSlugs.slice(0, 6);
  const stats = [
    dict.stats.clients,
    dict.stats.languages,
    dict.stats.since,
    dict.stats.cities,
  ];

  return (
    <>
      <section className="surface-dark noise relative overflow-x-clip pb-24 text-white sm:pb-0">
        <div className="absolute inset-0 hero-grid opacity-35" />
        {/* Glow stays on the LEFT so it never washes the stats panel */}
        <div className="pointer-events-none absolute -top-24 left-[-6rem] h-72 w-72 rounded-full bg-gold/12 blur-3xl md:h-96 md:w-96" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-deep/80 to-transparent" />
        <div className="container-page relative grid items-start gap-8 py-12 sm:gap-10 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10 md:py-20 lg:gap-12 lg:py-24">
          <div className="fade-up relative z-10 min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] tracking-[0.1em] text-champagne uppercase sm:px-3.5 sm:text-[11px] sm:tracking-[0.14em]">
              <span className="ornament !h-2 !w-2 border-champagne" />
              <span className="truncate">{dict.hero.badge}</span>
            </div>
            <h1 className="display mt-5 max-w-3xl text-[1.75rem] leading-[1.22] font-semibold text-white sm:mt-6 sm:text-4xl md:text-[2.55rem] lg:text-[3.15rem]">
              {dict.hero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/72 sm:mt-5 sm:text-base md:text-lg">
              {dict.hero.subtitle}
            </p>
            <div className="relative z-20 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link
                href={localizedPath(locale, "/consultation")}
                className="btn-primary w-full justify-center sm:w-auto"
              >
                {dict.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={localizedPath(locale, "/services")}
                className="btn-ghost w-full justify-center sm:w-auto"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="fade-up-delay relative z-20 min-w-0">
            <div className="rounded-[1.25rem] border border-gold/35 bg-[#07111F]/92 p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[1.6rem] sm:p-2">
              <div className="rounded-[1.1rem] border border-white/12 bg-[#0A1C38] p-2.5 sm:rounded-[1.35rem] sm:p-3">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-2.5">
                  {stats.map((item, idx) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#0D2448] px-3.5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-4"
                    >
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                          0{idx + 1}
                        </div>
                        <div className="mt-1 text-[12px] leading-snug text-white/80 sm:text-sm">
                          {item.label}
                        </div>
                      </div>
                      <div className="stat-value relative z-10 shrink-0">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="surface-card rounded-[1.35rem] p-5 sm:rounded-[1.75rem] sm:p-8 md:p-10">
            <SectionHeading title={dict.aboutPreview.title} eyebrow="Shengke" />
            <p className="text-[0.95rem] leading-relaxed text-muted md:text-base">{dict.aboutPreview.text}</p>
            <Link
              href={localizedPath(locale, "/about")}
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy transition hover:text-blue sm:mt-8"
            >
              {dict.common.learnMore}
              <ArrowRight size={16} className="text-gold" />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[1.35rem] surface-dark p-5 text-white sm:rounded-[1.75rem] sm:p-8 md:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-2xl" />
            <div className="eyebrow text-champagne">Mission</div>
            <h3 className="display mt-3 text-[1.7rem] font-semibold sm:mt-4 sm:text-3xl">
              {dict.aboutPreview.missionTitle}
            </h3>
            <div className="gold-line mt-4 sm:mt-5" />
            <p className="mt-4 text-[0.95rem] text-white/75 sm:mt-5">{dict.aboutPreview.mission}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft/70">
        <div className="container-page">
          <SectionHeading title={dict.advantages.title} subtitle={dict.advantages.subtitle} />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {dict.advantages.items.map((item, idx) => {
              const Icon = icons[idx] ?? Users;
              return (
                <article
                  key={item.title}
                  className="card-lift group relative overflow-hidden rounded-[1.5rem] surface-card p-6"
                >
                  <div className="absolute right-4 top-4 text-[11px] font-semibold tracking-[0.16em] text-gold/70">
                    0{idx + 1}
                  </div>
                  <div className="mb-5 inline-flex rounded-2xl border border-line bg-soft/80 p-3 text-navy transition group-hover:border-gold/40 group-hover:text-blue">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <SectionHeading title={dict.services.title} subtitle={dict.services.subtitle} />
            <Link
              href={localizedPath(locale, "/services")}
              className="btn-outline sm:mb-10 sm:!w-auto"
            >
              {dict.common.allServices}
            </Link>
          </div>
          <div className="mb-6 overflow-hidden rounded-[1.25rem] border border-gold/25 bg-gradient-to-r from-white via-white to-champagne/20 px-4 py-4 sm:rounded-[1.5rem] sm:px-6 sm:py-5">
            <div className="text-[11px] font-semibold tracking-[0.14em] text-gold-deep uppercase">
              Core practice
            </div>
            <strong className="mt-2 block text-base text-navy sm:text-lg">{dict.services.mainService}</strong>
            <p className="mt-1 text-sm text-muted">{dict.services.audience}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((slug, idx) => {
              const item = dict.services.items[slug];
              return (
                <Link
                  key={slug}
                  href={localizedPath(locale, `/services/${slug}`)}
                  className="card-lift group rounded-[1.5rem] surface-card p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-gold">
                      0{idx + 1}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-muted transition group-hover:translate-x-1 group-hover:text-navy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-blue">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft/70">
        <div className="container-page">
          <SectionHeading title={dict.process.title} subtitle={dict.process.subtitle} />
          <div className="-mx-3 flex gap-3 overflow-x-auto px-3 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
            {dict.process.steps.map((step, i) => (
              <div
                key={step.title}
                className="relative w-[78%] shrink-0 snap-start rounded-[1.35rem] surface-card p-5 sm:w-[60%] md:w-auto"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-white text-xs font-bold text-gold-deep">
                  0{i + 1}
                </div>
                <h3 className="font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-dark noise relative overflow-hidden text-white">
        <div className="absolute inset-0 hero-grid opacity-35" />
        <div className="container-page relative">
          <SectionHeading title={dict.results.title} light />
          <div className="grid gap-4 md:grid-cols-2">
            {dict.results.items.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <CheckCircle2 className="mb-4 text-gold" size={22} />
                <p className="text-[15px] leading-relaxed text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading title={dict.partnerNetwork.title} />
          <div className="relative overflow-hidden rounded-[1.35rem] surface-card p-5 sm:rounded-[1.75rem] sm:p-8 md:p-10">
            <div className="absolute -right-8 top-0 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
            <div className="relative grid gap-5 md:grid-cols-[auto_1fr] md:items-start md:gap-6">
              <div className="inline-flex rounded-2xl border border-line bg-soft p-3.5 text-navy sm:p-4">
                <Handshake size={22} />
              </div>
              <div>
                <p className="text-[0.95rem] leading-relaxed text-muted md:text-base">
                  {dict.partnerNetwork.text}
                </p>
                <p className="mt-4 text-sm font-semibold tracking-wide text-navy sm:mt-5">
                  {dict.partnerNetwork.cities}
                </p>
              </div>
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
    <section className="pb-[clamp(4rem,7vw,6rem)]">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[1.5rem] surface-dark px-5 py-10 text-white sm:rounded-[2rem] sm:px-8 sm:py-14 md:px-14">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="eyebrow text-champagne">Consultation</div>
            <h2 className="display mt-3 text-[1.75rem] font-semibold sm:mt-4 sm:text-3xl md:text-5xl">
              {dict.common.bookConsultation}
            </h2>
            <p className="mt-3 text-[0.95rem] text-white/70 sm:mt-4">{dict.contact.subtitle}</p>
            <div className="btn-row mt-6 sm:mt-8 sm:flex sm:flex-wrap sm:[&>.btn-primary]:w-auto sm:[&>.btn-ghost]:w-auto">
              <Link href={localizedPath(locale, "/consultation")} className="btn-primary">
                {dict.nav.consultation}
              </Link>
              <Link href={localizedPath(locale, "/contact")} className="btn-ghost">
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
