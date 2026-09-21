import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FOR_YOU } from "./content";

export default function AudienceSection() {
  return (
    <section
      aria-labelledby="for-you"
      className="bg-wb-soft/70 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal direction="right">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#a8873a]">
            WHO IT&apos;S FOR
          </p>
          <h2
            id="for-you"
            className="font-(family-name:--font-wb-serif) text-4xl leading-[1.05] text-wb-primary sm:text-6xl"
          >
            THIS IS FOR YOU IF...
          </h2>
        </Reveal>
        <ul className="grid gap-3">
          {FOR_YOU.map((item, i) => (
            <Reveal key={item} as="li" delay={i * 0.06} direction="left">
              <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 shadow-sm">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-wb-success text-white">
                  <Check aria-hidden className="size-4" strokeWidth={3} />
                </span>
                <span className="text-lg leading-snug text-wb-ink">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
