interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const isDark = tone === "dark";
  const alignClasses = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={alignClasses}>
      <div
        className={`inline-flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.22em] ${
          isDark ? "text-[#F5D576]" : "text-[#1B1654]"
        }`}
      >
        <span
          className={`h-[1.5px] w-7 ${
            isDark ? "bg-[#E5B63B]" : "bg-[#C6921E]"
          }`}
        />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] ${
          isDark ? "text-white" : "text-[#11102B]"
        }`}
      >
        {title}{" "}
        {highlight ? (
          <span className={isDark ? "text-gold-gradient" : "text-[#1B1654] underline decoration-[#E5B63B] decoration-[3px] underline-offset-4"}>
            {highlight}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-slate-300" : "text-[#4A4968]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
