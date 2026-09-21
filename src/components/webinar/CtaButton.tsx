import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/** Every CTA on the page scrolls to the registration form. */
export default function CtaButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "gold" | "light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-wb-primary text-white shadow-[0_12px_30px_-10px_rgba(91,78,130,0.7)] hover:bg-wb-deep",
    gold: "bg-wb-accent text-wb-ink shadow-[0_12px_30px_-10px_rgba(214,181,109,0.8)] hover:bg-[#e2c583]",
    light: "bg-white text-wb-primary hover:bg-wb-soft",
  }[variant];
  return (
    <a
      href="#register"
      className={`group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-wb-accent sm:w-auto ${styles} ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}
