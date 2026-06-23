"use client";

import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import s1 from "../../public/images/Community/student-1-CxxwZOtN.jpg";
import s2 from "../../public/images/Community/student-2-B9_1JLFk.jpg";
import s3 from "../../public/images/Community/student-3-KxZ6jXV2.jpg";

const SLIDES: StaticImageData[] = [s1, s2, s3];

// Duplicate the set so the marquee can loop seamlessly (translate -50% = one set).
const LOOP = [...SLIDES, ...SLIDES];

export default function Community() {
  return (
    <section
      id="community"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
      />

      {/* Marquee keyframes + reduced-motion guard */}
      <style>{`
        @keyframes community-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .community-track { animation: none !important; }
        }
      `}</style>

      <div className="relative mx-auto max-w-2xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Community
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            Real students.{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Real journeys.
            </em>
          </h2>
        </Reveal>
      </div>

      {/* Looping carousel — 3 up on desktop, 2 on tablet, 1 on mobile */}
      <Reveal direction="up" className="mt-16">
        <div className="group relative overflow-hidden">
          {/* edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-24"
          />

          <div className="community-track flex w-max animate-[community-marquee_55s_linear_infinite]">
            {LOOP.map((src, i) => (
              <div
                key={i}
                className="w-[64vw] shrink-0 px-2.5 sm:w-[38vw] lg:w-[25vw]"
              >
                <figure className="group/card relative overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/10">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={src}
                      alt={`Community student ${(i % SLIDES.length) + 1}`}
                      placeholder="blur"
                      fill
                      sizes="(max-width: 640px) 64vw, (max-width: 1024px) 38vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover/card:scale-[1.05]"
                      draggable={false}
                    />
                    {/* bottom gradient */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/35 to-transparent"
                    />
                  </div>
                  {/* Quote glyph */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/90 font-serif text-lg leading-none text-white shadow-lg opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                  >
                    &rdquo;
                  </span>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
