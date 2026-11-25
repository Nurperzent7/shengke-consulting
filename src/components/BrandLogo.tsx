import Link from "next/link";

type BrandLogoProps = {
  href: string;
  variant?: "color" | "white";
  className?: string;
  onClick?: () => void;
};

export function BrandLogo({
  href,
  variant = "color",
  className = "",
  onClick,
}: BrandLogoProps) {
  const word = variant === "white" ? "#FFFFFF" : "#0A1C38";
  const sub = variant === "white" ? "#C9D4EA" : "#5F6F84";
  const markTop = variant === "white" ? "#3A6BE0" : "#1A3F8F";
  const markBot = variant === "white" ? "#2F5BD3" : "#133269";
  const gradId = `sk-mark-${variant}`;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Shengke Consulting"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      >
        <defs>
          <linearGradient id={gradId} x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor={markTop} />
            <stop offset="1" stopColor={markBot} />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="15" fill={`url(#${gradId})`} />
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="13.5"
          stroke="#C9A227"
          strokeWidth="1.4"
          strokeOpacity="0.9"
        />
        <path
          d="M44.5 23.2c-1.4-4.2-5.3-6.8-11.1-6.8-6.4 0-10.8 3.2-10.8 8.1 0 3.7 2.1 5.8 7.6 7.4"
          stroke="#FFFFFF"
          strokeWidth="5.2"
          strokeLinecap="round"
        />
        <path
          d="M19.8 40.8c1.5 4.5 5.7 7.4 12.1 7.4 6.8 0 11.4-3.4 11.4-8.5 0-3.9-2.3-6.2-8.1-7.8"
          stroke="#FFFFFF"
          strokeWidth="5.2"
          strokeLinecap="round"
        />
        <path
          d="M21.5 36.8c6.2-3.2 12.8-5.2 21.5-6.4"
          stroke="#C9A227"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      <span className="hidden min-[380px]:flex flex-col leading-none">
        <span
          className="font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-[0.04em] sm:text-[17px]"
          style={{ color: word }}
        >
          SHENGKE
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className="h-px w-3 bg-[#C9A227]" />
          <span
            className="text-[8px] font-semibold tracking-[0.22em] sm:text-[9px]"
            style={{ color: sub }}
          >
            CONSULTING
          </span>
          <span className="h-px w-3 bg-[#C9A227]" />
        </span>
      </span>
    </Link>
  );
}
