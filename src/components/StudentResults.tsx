"use client";

import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import heera from "../../public/images/Student Results/testi-heera-v13kmUis.jpg";
import jeleesha from "../../public/images/Student Results/testi-jeleesha-Cm5XXcYM.jpg";
import riya from "../../public/images/Student Results/testi-riya-C2-OI_Kc.jpg";
import student from "../../public/images/Student Results/testi-student-CCsZxebU.png";

type Testimonial = { src: StaticImageData; name: string };

// Ordered to balance the masonry columns (tall / square / portrait / wide).
const TESTIMONIALS: Testimonial[] = [
  { src: jeleesha, name: "Jeleesha" },
  { src: heera, name: "Heera" },
  { src: riya, name: "Riya" },
  { src: student, name: "a student" },
];

export default function StudentResults() {
  return (
    <section
      id="student-results"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-24 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Student Results
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            People are already{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              changing their lives
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            Real messages and wins from students inside the program.
          </p>
        </Reveal>

        {/* Masonry testimonial wall */}
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              direction="up"
              delay={(i % 3) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              <figure className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5">
                <Image
                  src={t.src}
                  alt={`Testimonial from ${t.name}`}
                  placeholder="blur"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="h-auto w-full object-cover"
                />
                {/* Quote glyph */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/90 font-serif text-lg leading-none text-white shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  &rdquo;
                </span>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Trust line */}
        <Reveal
          direction="up"
          className="mt-12 flex items-center justify-center gap-2 text-sm font-medium text-zinc-500"
        >
          <span className="flex items-center gap-0.5 text-brand-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
              </svg>
            ))}
          </span>
          Join 300+ students already getting results
        </Reveal>
      </div>
    </section>
  );
}
