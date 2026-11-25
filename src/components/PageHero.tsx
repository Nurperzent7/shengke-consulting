export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="surface-dark noise relative overflow-hidden text-white">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />
      <div className="container-page relative py-16 md:py-20 lg:py-24">
        {eyebrow ? <div className="eyebrow mb-5 text-champagne">{eyebrow}</div> : <div className="gold-line mb-5" />}
        <h1 className="display max-w-4xl text-4xl font-semibold md:text-5xl lg:text-[3.4rem]">{title}</h1>
        {subtitle ? <p className="mt-5 max-w-3xl text-base text-white/72 md:text-lg">{subtitle}</p> : null}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
