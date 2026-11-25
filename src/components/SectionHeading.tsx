export function SectionHeading({
  title,
  subtitle,
  light = false,
  eyebrow,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  eyebrow?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div className={`eyebrow mb-4 ${light ? "text-champagne" : ""} ${align === "center" ? "justify-center before:hidden" : ""}`}>
          {eyebrow}
        </div>
      ) : (
        <div className={`gold-line mb-4 ${align === "center" ? "mx-auto" : ""}`} />
      )}
      <h2 className={`display text-3xl font-semibold md:text-4xl lg:text-[2.65rem] ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/70" : "text-muted"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
