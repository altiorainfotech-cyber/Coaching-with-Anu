import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaButton from "./CtaButton";
import SectionHeading from "./SectionHeading";
import { CTA_PRIMARY, LEARNINGS } from "./content";

export default function LearningSection() {
  return (
    <section
      id="learn"
      aria-labelledby="learn-title"
      className="scroll-mt-20 px-4 pb-24 sm:px-6"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          id="learn-title"
          label="The agenda"
          title="Inside the Webinar, You'll Learn..."
          subtitle="A practical introduction to building and selling digital products online."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {LEARNINGS.map((l, i) => (
            <Reveal
              key={l.title}
              as="li"
              delay={(i % 3) * 0.1}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <article className="group relative h-full overflow-hidden rounded-3xl border border-wb-primary/8 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_-28px_rgba(91,78,130,0.5)]">
                <span
                  aria-hidden
                  className="font-(family-name:--font-wb-serif) text-7xl leading-none text-wb-primary/12 transition-colors duration-300 group-hover:text-wb-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="absolute top-8 right-8 size-6 -translate-x-2 translate-y-2 text-wb-primary opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                />
                <h3 className="mt-4 font-(family-name:--font-wb-serif) text-2xl text-wb-ink">
                  {l.title}
                </h3>
                <p className="mt-3 leading-relaxed text-wb-muted">
                  {l.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <CtaButton>{CTA_PRIMARY}</CtaButton>
        </div>
      </div>
    </section>
  );
}
