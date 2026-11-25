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
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl md:h-72 md:w-72" />
      <div className="absolute -bottom-20 left-6 h-48 w-48 rounded-full bg-blue/20 blur-3xl" />
      <div className="container-page relative py-12 md:py-20 lg:py-24">
        {eyebrow ? (
          <div className="eyebrow mb-4 text-champagne md:mb-5">{eyebrow}</div>
        ) : (
          <div className="gold-line mb-4 md:mb-5" />
        )}
        <h1 className="display max-w-4xl text-[1.9rem] font-semibold sm:text-4xl md:text-5xl lg:text-[3.35rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-white/72 sm:text-base md:mt-5 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
