import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaButton from "./CtaButton";
import { CTA_SECONDARY, STORY_PARAGRAPHS, STORY_QUOTE } from "./content";
import speaker from "../../../public/heroimage.jpeg";

export default function SpeakerStory() {
  return (
    <section
      id="about"
      aria-labelledby="host-title"
      className="scroll-mt-20 px-4 pb-24 sm:px-6"
    >
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal direction="right" className="relative mx-auto w-full max-w-[440px]">
          <div
            aria-hidden
            className="absolute -inset-3 -translate-x-4 translate-y-4 rounded-[2.5rem] bg-wb-soft"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-40px_rgba(43,35,64,0.6)]">
            <Image
              src={speaker}
              alt="Anisha hosting a live panel session on stage"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 440px, 90vw"
              className="object-cover object-[72%_42%]"
            />
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#a8873a]">
            <span
              aria-hidden
              className="mr-3 inline-block h-px w-8 bg-wb-accent align-middle"
            />
            MEET YOUR HOST
          </p>
          <h2
            id="host-title"
            className="font-(family-name:--font-wb-serif) text-4xl leading-[1.1] text-balance text-wb-ink sm:text-5xl"
          >
            From Learning the Hard Way to Building an Online Business
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-wb-muted">
            {STORY_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-4 border-wb-accent bg-wb-soft/60 py-4 pr-4 pl-6 font-(family-name:--font-wb-serif) text-xl text-wb-primary italic">
            {STORY_QUOTE}
          </blockquote>
          <div className="mt-8">
            <CtaButton>{CTA_SECONDARY}</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
