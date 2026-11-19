import { getLocale, t } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";

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
          <p className="mt-4 max-w-3xl text-white/75">{dict.aboutPage.intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[dict.aboutPage.founded, dict.aboutPage.geography, dict.aboutPage.advantage].map(
            (text, i) => (
              <article key={i} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
                <div className="mb-3 text-sm font-bold text-gold">0{i + 1}</div>
                <p className="text-sm text-muted">{text}</p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container-page">
          <SectionHeading title={dict.aboutPage.certificatesTitle} />
          <ul className="space-y-3">
            {dict.aboutPage.certificates.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-line bg-white px-5 py-4 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading title={dict.partner.title} subtitle={dict.partner.subtitle} />
          <p className="max-w-3xl text-muted">{dict.partner.text}</p>
          <p className="mt-4 text-sm font-medium text-navy">{dict.partner.cities}</p>
        </div>
      </section>
    </div>
  );
}
