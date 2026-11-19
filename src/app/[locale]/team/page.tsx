import { getLocale, t } from "@/lib/i18n";

export default async function TeamPage({
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
            {dict.team.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{dict.team.subtitle}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {dict.team.members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm"
            >
              <div className="h-36 bg-gradient-to-br from-navy to-blue" />
              <div className="p-6">
                <div className="-mt-16 mb-4 grid h-16 w-16 place-items-center rounded-2xl border-4 border-white bg-soft text-lg font-bold text-navy shadow">
                  {member.name.slice(0, 1)}
                </div>
                <h2 className="text-xl font-semibold text-navy">{member.name}</h2>
                <p className="mt-1 text-sm font-medium text-blue">{member.role}</p>
                <p className="mt-4 text-sm text-muted">{member.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-navy"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
