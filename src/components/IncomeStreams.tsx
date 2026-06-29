"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

type Stream = {
  name: string;
  featured?: boolean;
  icon: React.ReactNode;
};

const STREAMS: Stream[] = [
  {
    name: "You're an international student looking for extra income.",
    // graduation cap
    icon: (
      <>
        <path d="M10 3L2 7l8 4 8-4-8-4z" />
        <path d="M5 9v4c0 1 2.2 2 5 2s5-1 5-2V9" />
      </>
    ),
  },
  {
    name: "You want financial freedom instead of relying on one paycheck.",
    // wallet
    icon: (
      <>
        <path d="M3 7a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v1" />
        <rect x="3" y="6" width="14" height="9" rx="2" />
        <circle cx="14" cy="10.5" r="1" />
      </>
    ),
  },
  {
    name: "You want to build an online business but don't know where to start.",
    // compass
    icon: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="M13 7l-2 4-4 2 2-4 4-2z" />
      </>
    ),
  },
  {
    name: "You've been thinking about starting but keep waiting for the “right time.”",
    // clock
    icon: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="M10 6v4l3 2" />
      </>
    ),
  },
  {
    name: "You're ready to invest in yourself.",
    // growth / sprout
    icon: (
      <>
        <path d="M10 17v-6" />
        <path d="M10 11c0-2.5-2-4.5-4.5-4.5C5.5 9 7.5 11 10 11z" />
        <path d="M10 11c0-3 2.2-5 5-5-.2 3-2.2 5-5 5z" />
      </>
    ),
  },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

// `dir` (custom) controls where the card enters from: -1 left, 0 center, 1 right.
const item = {
  hidden: (dir: number) => ({ opacity: 0, x: dir * 80, y: 30 }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function IncomeStreams() {
  return (
    <section
      id="multiple-income-streams"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 text-black sm:py-36"
    >
      {/* Animated background blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-100/60 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brand-100/50 blur-3xl"
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(rgba(37,99,235,0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header — centered on top */}
        <Reveal direction="up" className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Who This Is For
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            This is for <em className="text-brand-600">you</em> if&hellip;
          </h2>
        </Reveal>

        {/* Masonry card grid */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 flex flex-wrap justify-center gap-5"
        >
          {STREAMS.map((s, i) => (
            <motion.div
              key={s.name}
              variants={item}
              custom={(i % 3) - 1}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative flex w-full flex-col overflow-hidden rounded-none rounded-tl-3xl rounded-br-3xl p-7 shadow-sm transition-shadow duration-300 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] ${
                s.featured
                  ? "bg-linear-to-br from-brand-600 via-brand-700 to-brand-800 text-white shadow-xl shadow-brand-900/25 ring-1 ring-inset ring-white/10"
                  : "border border-brand-100 bg-white/90 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-900/15"
              }`}
            >
              {/* Blue wash that fades in on hover (non-featured cards) */}
              {!s.featured && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-600 via-brand-700 to-brand-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}

              <div className="relative z-10">
                {/* Icon */}
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-red-500 via-brand-500 to-yellow-400 text-white shadow-lg shadow-brand-900/20 ring-1 ring-inset ring-white/25">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </span>

                <h3
                  className={`text-lg font-semibold leading-snug ${
                    s.featured
                      ? "text-white"
                      : "text-black group-hover:text-white"
                  }`}
                >
                  {s.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA — below the cards */}
        <Reveal direction="up" className="mt-14 flex justify-center">
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/25 ring-1 ring-inset ring-white/15 transition-all hover:bg-zinc-800 hover:shadow-xl"
          >
            Yes, This Is Me
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
