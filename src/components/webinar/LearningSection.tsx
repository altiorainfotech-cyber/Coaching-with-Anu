import { Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import { LEARNINGS } from "./content";

export default function LearningSection() {
  return (
    <section
      id="learn"
      aria-labelledby="learn-title"
      className="scroll-mt-20 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          id="learn-title"
          label="The agenda"
          title="You're going to learn all this..."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {LEARNINGS.map((text, i) => (
            <Reveal
              key={text}
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
                <Heart
                  aria-hidden
                  className="absolute top-8 right-8 size-6 fill-wb-success/20 text-wb-success"
                />
                <p className="mt-4 text-lg leading-relaxed text-wb-ink">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
