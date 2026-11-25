import type { Metadata } from "next";
import { getLocale, t } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
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
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <div className="gold-line mb-4 bg-gradient-to-r from-gold to-transparent" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
            {dict.aboutPage.title}
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-base leading-relaxed text-muted md:text-lg">{dict.aboutPage.intro}</p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">{dict.aboutPreview.missionTitle}</h2>
            <div className="gold-line mt-3" />
            <p className="mt-4 text-muted">{dict.aboutPreview.mission}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container-page">
          <SectionHeading title={dict.partnerNetwork.title} />
          <p className="max-w-4xl text-muted">{dict.partnerNetwork.text}</p>
          <p className="mt-4 text-sm font-medium text-navy">{dict.partnerNetwork.cities}</p>
        </div>
      </section>
    </div>
  );
}
