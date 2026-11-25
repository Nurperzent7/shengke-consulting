import type { Metadata } from "next";
import { getLocale, t } from "@/lib/i18n";
import { ConsultationForm } from "@/components/ConsultationForm";
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
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <div className="gold-line mb-4" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
            {dict.consultation.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{dict.consultation.subtitle}</p>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container-page max-w-5xl">
          <ConsultationForm locale={locale} dict={dict} />
        </div>
      </section>
    </div>
  );
}
