import { getLocale, t } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";

export default async function CasesPage({
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
            {dict.cases.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{dict.cases.subtitle}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-4 md:grid-cols-2">
          {dict.cases.items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-soft px-3 py-1 text-navy">{item.year}</span>
                {item.amount && (
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-blue">{item.amount}</span>
                )}
              </div>
              <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container-page">
          <SectionHeading title={dict.results.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {dict.results.items.map((item) => (
              <div key={item} className="rounded-3xl border border-line bg-white p-5 text-sm text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
