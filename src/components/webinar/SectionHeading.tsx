import type { ReactNode } from "react";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  id,
}: {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  id?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      {label && (
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#a8873a] uppercase">
          <span
            aria-hidden
            className="mr-3 inline-block h-px w-8 bg-wb-accent align-middle"
          />
          {label}
        </p>
      )}
      <h2
        id={id}
        className={`font-(family-name:--font-wb-serif) text-4xl leading-[1.1] text-balance sm:text-5xl ${light ? "text-white" : "text-wb-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-wb-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
