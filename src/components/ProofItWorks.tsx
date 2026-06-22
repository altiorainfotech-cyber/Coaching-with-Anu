"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import shot1 from "../../public/screenshort01.jpg";
import shot2 from "../../public/screenshort02jpg.jpg";

type Proof = { src: StaticImageData; alt: string; label: string };

const PROOFS: Proof[] = [
  {
    src: shot1,
    alt: "Income dashboard screenshot showing earnings",
    label: "earnings · dashboard",
  },
  {
    src: shot2,
    alt: "Payouts dashboard screenshot showing real income",
    label: "payouts · dashboard",
  },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProofItWorks() {
  return (
    <section
      id="proof-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 text-black sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Proof It Works
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-6xl">
            Real income.{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Real results.
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            These are real income screenshots from my own dashboards.
          </p>
        </Reveal>

        {/* Screenshots */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2"
        >
          {PROOFS.map((proof) => (
            <motion.figure
              key={proof.label}
              variants={item}
              className="group relative"
            >
              {/* glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-tr from-brand-300/40 to-brand-200/40 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-xl shadow-brand-900/10 transition-transform duration-500 group-hover:-translate-y-1.5">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
                  <span className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </span>
                  <span className="flex flex-1 items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-500">
                    <svg
                      className="h-3 w-3 text-emerald-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="4" y="9" width="12" height="8" rx="2" />
                      <path d="M7 9V6.5a3 3 0 0 1 6 0V9" strokeLinecap="round" />
                    </svg>
                    {proof.label}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="bg-white">
                  <Image
                    src={proof.src}
                    alt={proof.alt}
                    placeholder="blur"
                    sizes="(max-width: 640px) 90vw, 32rem"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* Verified badge */}
              <figcaption className="absolute -bottom-3 right-4 flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-md">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 10.5l3.5 3.5L15 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Verified earnings
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Reassurance line */}
        <Reveal
          direction="up"
          className="mx-auto mt-16 max-w-md text-center text-sm text-zinc-500"
        >
          Unedited and taken directly from my own accounts — this is what a
          structured path actually produces.
        </Reveal>
      </div>
    </section>
  );
}
