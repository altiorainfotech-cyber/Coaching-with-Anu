import { ArrowRight, ArrowDown, Check, Minus } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import { AFTER, BEFORE } from "./content";

export default function Transformation() {
  return (
    <section
      aria-labelledby="clarity"
      className="bg-wb-soft/70 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-[1000px]">
        <SectionHeading
          id="clarity"
          label="Key takeaways"
          title="Leave With More Clarity"
          subtitle="Not a promise of results — a clearer picture of where to start."
        />
        <div className="mt-14 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <Reveal direction="right">
            <div className="rounded-3xl border border-wb-primary/10 bg-white/60 p-8">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-wb-muted">
                BEFORE
              </h3>
              <ul className="mt-5 space-y-4">
                {BEFORE.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-wb-muted">
                    <Minus aria-hidden className="mt-1 size-4 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div
            aria-hidden
            className="mx-auto grid size-12 place-items-center rounded-full bg-wb-accent text-wb-ink shadow-lg"
          >
            <ArrowRight className="hidden size-5 md:block" />
            <ArrowDown className="size-5 md:hidden" />
          </div>

          <Reveal direction="left">
            <div className="rounded-3xl bg-white p-8 shadow-[0_24px_60px_-30px_rgba(91,78,130,0.5)] ring-2 ring-wb-primary/15">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-wb-primary">
                AFTER
              </h3>
              <ul className="mt-5 space-y-4">
                {AFTER.map((a) => (
                  <li key={a} className="flex items-start gap-3 font-medium text-wb-ink">
                    <Check
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-wb-success"
                      strokeWidth={3}
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
