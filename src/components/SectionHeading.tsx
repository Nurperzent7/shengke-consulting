export function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="gold-line mb-4" />
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg ${light ? "text-white/75" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
