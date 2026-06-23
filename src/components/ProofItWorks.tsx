"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import shot1 from "../../public/screenshort01.jpg";
import shot2 from "../../public/screenshort02jpg.jpg";

type Proof = {
  src: StaticImageData;
  alt: string;
  tab: string;
  label: string;
  stat: string;
  period: string;
};

const PROOFS: Proof[] = [
  {
    src: shot1,
    alt: "Income dashboard screenshot showing earnings",
    tab: "earnings · dashboard",
    label: "Gross earnings",
    stat: "CA$10.6K",
    period: "Jan 1 – Today",
  },
  {
    src: shot2,
    alt: "Payouts dashboard screenshot showing real income",
    tab: "payouts · dashboard",
    label: "Gross payouts",
    stat: "CA$9,108",
    period: "Dec 15 – Today",
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
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white via-brand-50/40 to-brand-100/60 py-28 text-black sm:py-36"
    >
      {/* Decorative glows */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-16 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-16 bottom-10 h-[26rem] w-[26rem] rounded-full bg-brand-300/40 blur-3xl"
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

        {/* Screenshots — equal-sized gradient cards */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid items-stretch gap-8 sm:grid-cols-2"
        >
          {PROOFS.map((proof) => (
            <motion.figure key={proof.tab} variants={item} className="group h-full">
              {/* Gradient border */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative h-full rounded-[1.75rem] bg-linear-to-br from-brand-300 via-brand-200 to-brand-400 p-[1.5px] shadow-[0_24px_60px_-24px_rgba(37,99,235,0.45)]"
              >
                {/* glow */}
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

                  {/* Screenshot — uniform aspect ratio = identical size */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={proof.src}
                      alt={proof.alt}
                      placeholder="blur"
                      fill
                      sizes="(max-width: 640px) 90vw, 30rem"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Stat footer */}
                  <figcaption className="flex items-center justify-between gap-4 border-t border-zinc-100 px-5 py-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        {proof.label}
                      </p>
                      <p className="font-serif text-2xl font-bold text-black">
                        {proof.stat}
                      </p>
                      <p className="text-xs text-zinc-400">{proof.period}</p>
                    </div>
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
          className="mx-auto mt-16 max-w-md text-center text-sm text-zinc-500"
        >
          Unedited and taken directly from my own accounts — this is what a
          structured path actually produces.
        </Reveal>
      </div>
    </section>
  );
}
