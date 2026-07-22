"use client";

import Reveal from "./Reveal";
import SplineScene from "./SplineScene";

export default function ProofItWorks() {
  return (
    <section
      id="proof-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-[#060a18] py-28 text-white sm:py-36"
    >
      {/* Animated Spline 3D background */}
      <SplineScene />
      {/* Readability scrim — darkens the scene behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#060a18]/40"
      />

      {/* Light-blue corner glow (top-left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-400/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Header */}
        <Reveal direction="up" className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300 shadow-sm backdrop-blur-sm">
            My Promise
          </span>
          <h2 className="mt-6 font-serif text-4xl capitalize leading-[1.1] text-white sm:text-6xl">
            My{" "}
            <em className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
              Promise
            </em>{" "}
            to you
          </h2>
        </Reveal>

        {/* Promise */}
        <Reveal
          direction="up"
          delay={0.1}
          className="mx-auto mt-10 max-w-2xl space-y-5 text-center"
        >
          <p className="text-xl text-white">
            I won&apos;t promise overnight success.
          </p>
          <p className="text-xl text-white">
            I won&apos;t tell you it&apos;s easy.
          </p>
          <p className="text-xl font-medium leading-9 text-white sm:text-2xl">
            But I{" "}
            <em className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text not-italic text-transparent">
              will
            </em>{" "}
            show you the same strategies, systems, and mindset that helped me go
            from searching for opportunities to creating them.
          </p>
          <p className="text-xl leading-8 text-white">
            Because I truly believe that learning digital skills is one of the
            best investments you can make.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
