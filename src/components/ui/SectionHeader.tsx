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
  const alignClasses =
    align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={alignClasses}>
      <p
        className={`font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${
          isDark ? "text-[#E3BC5A]" : "text-[#8A6510]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2.5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15] ${
          isDark ? "text-white" : "text-[#0B1324]"
        }`}
      >
        {title}
        {highlight ? ` ${highlight}` : null}
      </h2>
      {description ? (
        <p
          className={`mt-3.5 max-w-[62ch] text-base leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-slate-300" : "text-[#475569]"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
