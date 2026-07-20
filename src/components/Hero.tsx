"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";
import WebGLBackground from "./WebGLBackground";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Headline orchestrates its words; each word reveals one after another.
const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.15 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Two lines; `h` marks the glowing highlighted words.
const LINE_ONE = ["Stop", "learning", "from", "random", "videos."];
const LINE_TWO: { t: string; h?: boolean }[] = [
  { t: "Start" },
  { t: "with" },
  { t: "proper", h: true },
  { t: "education", h: true },
  { t: "that" },
  { t: "actually" },
  { t: "works." },
];

const AVATARS = [12, 32, 45, 60, 5];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070f] px-6 pt-28 pb-20 text-white">
      {/* Animated WebGL gradient mesh (dark nebula) */}
      <WebGLBackground />

      {/* Spotlight beam from the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[80vh] w-[120vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.35),transparent_60%)] blur-2xl"
      />

      {/* Fine grid, masked to the center */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      {/* Bottom fade so the section blends into the page below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#05070f]"
      />

      {/* Floating glass stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -14, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-[7%] top-[30%] hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-2xl shadow-brand-900/40 backdrop-blur-md lg:block"
      >
        <p className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-2xl font-bold text-transparent">
          2,000+
        </p>
        <p className="text-xs font-medium text-zinc-300">Students enrolled</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, 16, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-[7%] top-[36%] hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-2xl shadow-brand-900/40 backdrop-blur-md lg:block"
      >
        <p className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-2xl font-bold text-transparent">
          Step-by-step
        </p>
        <p className="text-xs font-medium text-zinc-300">Proven roadmap</p>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
          </span>
          Online Business Education by Anisha
        </motion.span>

        <motion.h1
          variants={headline}
          className="mt-6 font-sora text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl"
        >
          {LINE_ONE.map((w, i) => (
            <Fragment key={`l1-${i}`}>
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>{" "}
            </Fragment>
          ))}
          <br className="hidden sm:block" />
          {LINE_TWO.map((w, i) => (
            <Fragment key={`l2-${i}`}>
              <motion.span
                variants={word}
                className={`inline-block ${
                  w.h
                    ? "bg-linear-to-r from-brand-400 via-brand-300 to-brand-200 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(96,165,250,0.5)]"
                    : ""
                }`}
              >
                {w.t}
              </motion.span>{" "}
            </Fragment>
          ))}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-8 text-zinc-300"
        >
          Most people waste months watching free YouTube tutorials and Canva
          guides going nowhere. Structured education gives you the exact steps,
          in the right order, so you start seeing real results.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.a
            href="#what-i-help"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/25 transition-all hover:bg-zinc-900 hover:shadow-[0_8px_45px_rgba(0,0,0,0.7)]"
          >
            Start Your Journey
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

          <motion.a
            href="#my-story"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.5v9l7-4.5-7-4.5Z" />
            </svg>
            My Story
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={item} className="mt-10 flex items-center gap-3">
          <div className="flex -space-x-3">
            {AVATARS.map((id) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={id}
                src={`https://i.pravatar.cc/80?img=${id}`}
                alt=""
                loading="lazy"
                className="h-9 w-9 rounded-full border-2 border-[#05070f] object-cover shadow-sm ring-1 ring-white/20"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-0.5 text-brand-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-zinc-300">
              Loved by <span className="font-semibold text-white">2,000+</span>{" "}
              students
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#my-story"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand-300"
          />
        </span>
      </motion.a>
    </section>
  );
}
