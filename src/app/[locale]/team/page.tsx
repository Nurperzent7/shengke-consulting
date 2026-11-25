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
  return pageMetadata(locale, "/team", dict.pageMeta.team);
}

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
      <PageHero title={dict.team.title} subtitle={dict.team.subtitle} eyebrow="Team" />

      <section className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {dict.team.members.map((member, idx) => (
            <article
              key={member.name}
              className="card-lift overflow-hidden rounded-[1.75rem] surface-card"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-blue" aria-hidden>
                <div className="absolute inset-0 hero-grid opacity-40" />
                <div className="absolute right-5 top-5 text-[11px] font-semibold tracking-[0.16em] text-champagne/80">
                  0{idx + 1}
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-7">
                <div
                  className="-mt-14 mb-4 grid h-[4.25rem] w-[4.25rem] place-items-center rounded-2xl border border-line bg-cream text-xl font-semibold text-navy shadow-[0_12px_30px_rgba(8,22,45,0.12)]"
                  aria-label={member.photoAlt}
                  title={member.photoAlt}
                >
                  {member.name.slice(0, 1)}
                </div>
                {member.isPartner && (
                  <div className="mb-3 inline-flex rounded-full border border-gold/30 bg-champagne/30 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-navy uppercase">
                    {dict.team.partnerBadge}
                  </div>
                )}
                <h2 className="display text-2xl font-semibold text-navy">{member.name}</h2>
                <p className="mt-2 text-sm font-medium text-blue">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-soft/80 px-3 py-1 text-xs font-semibold text-navy"
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
