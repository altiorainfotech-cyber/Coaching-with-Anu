import { CalendarDays, Lightbulb, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import { INFO_CARDS, type IconName } from "./content";

const ICONS = {
  calendar: CalendarDays,
  lightbulb: Lightbulb,
  message: MessageCircle,
} satisfies Record<IconName, unknown>;

export default function WebinarInfo() {
  return (
    <section aria-labelledby="includes" className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          id="includes"
          title="Your Seat Includes"
          label="What you get"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {INFO_CARDS.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <Reveal key={c.title} as="li" delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-wb-primary/5 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(91,78,130,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(91,78,130,0.45)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-wb-soft text-wb-primary">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-6 font-(family-name:--font-wb-serif) text-2xl text-wb-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-wb-muted">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
