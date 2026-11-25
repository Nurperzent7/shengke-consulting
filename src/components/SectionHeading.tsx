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
    <div className={`mb-8 max-w-3xl md:mb-10 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div
          className={`eyebrow mb-3 md:mb-4 ${light ? "text-champagne" : ""} ${
            align === "center" ? "justify-center before:hidden" : ""
          }`}
        >
          {eyebrow}
        </div>
      ) : (
        <div className={`gold-line mb-3 md:mb-4 ${align === "center" ? "mx-auto" : ""}`} />
      )}
      <h2
        className={`display text-[1.7rem] font-semibold sm:text-3xl md:text-4xl lg:text-[2.55rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 text-[0.95rem] leading-relaxed md:mt-4 md:text-base lg:text-lg ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
