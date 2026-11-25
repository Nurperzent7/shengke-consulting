import type { Metadata } from "next";
import { getLocale, t } from "@/lib/i18n";
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
  return pageMetadata(locale, "/privacy", dict.pageMeta.privacy);
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dict = t(locale);

  return (
    <div>
      <PageHero title={dict.privacy.title} subtitle={dict.privacy.updated} eyebrow="Legal" />

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <div className="surface-card space-y-5 rounded-[1.75rem] p-8 md:p-10">
            {dict.privacy.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
