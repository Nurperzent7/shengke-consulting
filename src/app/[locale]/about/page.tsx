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
  return pageMetadata(locale, "/about", dict.pageMeta.about);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);

  return (
    <div>
      <PageHero title={dict.aboutPage.title} eyebrow="About" />

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="surface-card rounded-[1.35rem] p-5 sm:rounded-[1.75rem] sm:p-8 md:p-10">
            <p className="text-[0.95rem] leading-relaxed text-muted sm:text-base md:text-lg">{dict.aboutPage.intro}</p>
          </div>
          <div className="relative overflow-hidden rounded-[1.35rem] surface-dark p-5 text-white sm:rounded-[1.75rem] sm:p-8 md:p-10">
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-gold/15 blur-2xl" />
            <div className="eyebrow text-champagne">Mission</div>
            <h2 className="display mt-3 text-[1.7rem] font-semibold sm:mt-4 sm:text-3xl">{dict.aboutPreview.missionTitle}</h2>
            <div className="gold-line mt-4 sm:mt-5" />
            <p className="mt-4 text-[0.95rem] text-white/75 sm:mt-5">{dict.aboutPreview.mission}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft/70">
        <div className="container-page">
          <SectionHeading title={dict.partnerNetwork.title} />
          <div className="surface-card max-w-4xl rounded-[1.75rem] p-8 md:p-10">
            <p className="text-base leading-relaxed text-muted">{dict.partnerNetwork.text}</p>
            <p className="mt-5 text-sm font-semibold text-navy">{dict.partnerNetwork.cities}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
