"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import shot1 from "../../public/images/WhatsApp Image 2026-07-19 at 12.32.39 AM.jpeg";

type Proof = {
  src: StaticImageData;
  alt: string;
  tab: string;
};

const PROOFS: Proof[] = [
  {
    src: shot1,
    alt: "Analytics dashboard screenshot showing real revenue",
    tab: "analytics · dashboard",
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

export default function ProofResults() {
  return (
    <section
      id="proof-results"
      className="relative scroll-mt-24 overflow-hidden bg-[#060a18] py-28 text-white sm:py-36"
    >
      {/* Light-blue corner glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-400/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300 shadow-sm backdrop-blur-sm">
            Proof It Works
          </span>
          <h2 className="mt-6 font-serif text-4xl capitalize leading-[1.1] text-white sm:text-6xl">
            Real income.
            <br />
            <em className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
              Real results.
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-zinc-300">
            These are real income screenshots from my own dashboards.
          </p>
        </Reveal>

        {/* Screenshots — equal-sized framed cards */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 grid max-w-sm items-stretch gap-8"
        >
          {PROOFS.map((proof) => (
            <motion.figure
              key={proof.tab}
              variants={item}
              className="group h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative h-full rounded-[1.75rem] bg-linear-to-br from-brand-300 via-brand-200 to-brand-400 p-[1.5px] shadow-[0_24px_60px_-24px_rgba(37,99,235,0.45)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-linear-to-tr from-brand-300/40 to-brand-200/40 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex h-full flex-col overflow-hidden rounded-[1.65rem] bg-white">
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
                      {proof.tab}
                    </span>
                  </div>

                  {/* Screenshot */}
                  <div className="relative w-full overflow-hidden bg-white">
                    <Image
                      src={proof.src}
                      alt={proof.alt}
                      placeholder="blur"
                      sizes="(max-width: 640px) 90vw, 24rem"
                      className="h-[400px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Verified footer */}
                  <figcaption className="flex items-center justify-between gap-4 border-t border-zinc-100 px-5 py-4">
                    <p className="text-sm font-medium text-zinc-500">
                      Real income screenshot
                    </p>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M5 10.5l3.5 3.5L15 7"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Verified
                    </span>
                  </figcaption>
                </div>
              </motion.div>
            </motion.figure>
          ))}
        </motion.div>

        {/* Reassurance line */}
        <Reveal
          direction="up"
          className="mx-auto mt-16 max-w-md text-center text-sm text-zinc-400"
        >
          Unedited and taken directly from my own accounts. This is what a
          structured path actually produces.
        </Reveal>
      </div>
    </section>
  );
}
