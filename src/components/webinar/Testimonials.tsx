import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "./content";

export default function Testimonials() {
  return (
    <section aria-labelledby="proof" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          id="proof"
          label="Social proof"
          title="What Attendees Are Saying"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} as="li" delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-wb-primary/8 bg-white p-8 shadow-[0_10px_40px_-24px_rgba(91,78,130,0.4)]">
                <Quote aria-hidden className="size-8 text-wb-accent" />
                <blockquote className="mt-4 flex-1 font-(family-name:--font-wb-serif) text-xl leading-snug text-wb-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-wb-primary">
                  — {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
