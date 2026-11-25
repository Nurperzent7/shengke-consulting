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
      <section className="surface-dark noise relative overflow-hidden text-white">
        <div className="absolute inset-0 hero-grid opacity-45" />
        <div className="absolute -top-28 -right-20 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-navy-deep to-transparent" />
        <div className="container-page relative grid items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28 lg:py-32">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] tracking-[0.16em] text-champagne uppercase">
              <span className="ornament !h-2 !w-2 border-champagne" />
              {dict.hero.badge}
            </div>
            <h1 className="display mt-7 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-[3.55rem]">
              {dict.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
              {dict.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={localizedPath(locale, "/consultation")} className="btn-primary">
                {dict.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link href={localizedPath(locale, "/services")} className="btn-ghost">
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="fade-up-delay relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/20" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-md">
              <div className="grid gap-2.5">
                {stats.map((item, idx) => (
                  <div
                    key={item.label}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition hover:border-gold/30 hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
                        0{idx + 1}
                      </div>
                      <div className="mt-1 text-sm text-white/70">{item.label}</div>
                    </div>
                    <div className="stat-value">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="surface-card rounded-[1.75rem] p-8 md:p-10">
            <SectionHeading title={dict.aboutPreview.title} eyebrow="Shengke" />
            <p className="text-[15px] leading-relaxed text-muted md:text-base">{dict.aboutPreview.text}</p>
            <Link
              href={localizedPath(locale, "/about")}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-blue"
            >
              {dict.common.learnMore}
              <ArrowRight size={16} className="text-gold" />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] surface-dark p-8 text-white md:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-2xl" />
            <div className="eyebrow text-champagne">Mission</div>
            <h3 className="display mt-4 text-3xl font-semibold">{dict.aboutPreview.missionTitle}</h3>
            <div className="gold-line mt-5" />
            <p className="mt-5 text-white/75">{dict.aboutPreview.mission}</p>
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
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title={dict.services.title} subtitle={dict.services.subtitle} />
            <Link href={localizedPath(locale, "/services")} className="btn-outline mb-10">
              {dict.common.allServices}
            </Link>
          </div>
          <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-gold/25 bg-gradient-to-r from-white via-white to-champagne/20 px-6 py-5">
            <div className="text-[11px] font-semibold tracking-[0.18em] text-gold-deep uppercase">
              Core practice
            </div>
            <strong className="mt-2 block text-lg text-navy">{dict.services.mainService}</strong>
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
          <div className="relative grid gap-4 md:grid-cols-5">
            <div className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />
            {dict.process.steps.map((step, i) => (
              <div key={step.title} className="relative rounded-[1.5rem] surface-card p-5">
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
          <div className="relative overflow-hidden rounded-[1.75rem] surface-card p-8 md:p-10">
            <div className="absolute -right-8 top-0 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
            <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
              <div className="inline-flex rounded-2xl border border-line bg-soft p-4 text-navy">
                <Handshake size={24} />
              </div>
              <div>
                <p className="text-[15px] leading-relaxed text-muted md:text-base">
                  {dict.partnerNetwork.text}
                </p>
                <p className="mt-5 text-sm font-semibold tracking-wide text-navy">
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
        <div className="relative overflow-hidden rounded-[2rem] surface-dark px-8 py-14 text-white md:px-14">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="eyebrow text-champagne">Consultation</div>
            <h2 className="display mt-4 text-3xl font-semibold md:text-5xl">
              {dict.common.bookConsultation}
            </h2>
            <p className="mt-4 text-white/70">{dict.contact.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
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
