import type { Metadata } from "next";
import { getLocale, t } from "@/lib/i18n";
import { ConsultationForm } from "@/components/ConsultationForm";
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
  return pageMetadata(locale, "/consultation", dict.pageMeta.consultation);
}

export default async function ConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);

  return (
    <div>
      <PageHero
        title={dict.consultation.title}
        subtitle={dict.consultation.subtitle}
        eyebrow="Consultation"
      />

      <section className="section-pad bg-soft/60">
        <div className="container-page max-w-5xl">
          <ConsultationForm locale={locale} dict={dict} />
        </div>
      </section>
    </div>
  );
}
