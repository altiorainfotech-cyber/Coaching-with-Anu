"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Problem = {
  index: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const PROBLEMS: Problem[] = [
  {
    index: "01",
    title: "The YouTube Trap",
    body: "You watch video after video, but every creator teaches something different. You get confused, overwhelmed, and end up doing nothing — because you don't know which advice to follow.",
    icon: (
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h7A2.5 2.5 0 0 1 15 6.5v.6l4-2.3v10.4l-4-2.3v.6A2.5 2.5 0 0 1 12.5 16h-7A2.5 2.5 0 0 1 3 13.5v-7Z" />
    ),
  },
  {
    index: "02",
    title: "The Canva Tutorial Spiral",
    body: "You spend hours learning design tools, but nobody teaches you how to actually sell anything. Beautiful content means nothing if there's no strategy behind it.",
    icon: (
      <path d="M10 2a8 8 0 1 0 0 16c1 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.5-1.1-.3-.3-.5-.7-.5-1.1 0-.9.8-1.6 1.7-1.6H14a4 4 0 0 0 4-4c0-3.6-3.6-6.5-8-6.5Zm-4 8a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm2.5-3.3A1.3 1.3 0 1 1 8.5 4a1.3 1.3 0 0 1 0 2.7Zm4 0A1.3 1.3 0 1 1 12.5 4a1.3 1.3 0 0 1 0 2.7Z" />
    ),
  },
];

const BENEFITS = [
  "A proven path to follow",
  "The steps in the right order",
  "A real mentor who's done it",
  "A community around you",
  "Accountability to follow through",
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 60, rotateX: -22 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const checkList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const checkItem = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Check() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 10.5l3.5 3.5L15 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyEducation() {
  return (
    <section
      id="why-education-matters"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-brand-50 via-white to-brand-100/60 py-28 text-black sm:py-36"
    >
      {/* Animated background blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-200/55 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brand-300/40 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl"
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(rgba(37,99,235,0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Why Education Matters
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-6xl">
            Everyone is watching tutorials.{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Nobody is making money.
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Free content isn&apos;t education — it&apos;s entertainment. You can
            watch hundreds of YouTube videos, follow 50 accounts, and download
            every free Canva template, and still have{" "}
            <span className="font-semibold text-black">
              no idea what your actual next step is.
            </span>
          </p>
        </Reveal>

        {/* Problem cards */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-5 [perspective:1400px] md:grid-cols-2"
        >
          {PROBLEMS.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              className="[transform-style:preserve-3d]"
            >
              <TiltCard
                intensity={7}
                glare={false}
                className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-sm"
              >
                {/* Big faint number watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[8rem] font-bold leading-none text-brand-600/[0.06]"
                >
                  {p.index}
                </span>

                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="relative"
                >
                  <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-500">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 6l8 8M14 6l-8 8"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                    The trap
                  </span>

                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {p.icon}
                    </svg>
                  </span>

                  <h3 className="text-xl font-semibold text-black">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 leading-7 text-zinc-600">{p.body}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition line */}
        <Reveal
          direction="up"
          className="mx-auto mt-10 max-w-2xl text-center text-base text-zinc-500"
        >
          No structure. No sequence. No accountability. Every creator teaches
          something different — and you end up{" "}
          <span className="font-medium text-zinc-800">
            more confused than when you started.
          </span>
        </Reveal>

        {/* Solution panel — animated gradient border */}
        <Reveal direction="up" delay={0.1} className="mt-10">
          <div className="relative overflow-hidden rounded-[1.75rem] p-[1.5px] shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)]">
            <span
              aria-hidden
              className="absolute inset-[-150%] animate-[border-spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#1d4ed8_12%,#60a5fa_22%,#93c5fd_28%,transparent_42%,transparent_100%)]"
            />
            <div className="relative grid gap-10 overflow-hidden rounded-[1.65rem] bg-white p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
              {/* inner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-200">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check />
                  </span>
                  The path
                </span>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-black sm:text-4xl">
                  What proper education{" "}
                  <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                    actually
                  </em>{" "}
                  gives you
                </h3>
                <p className="mt-4 max-w-md leading-8 text-zinc-600">
                  Proper education changes everything. It gives you a clear
                  starting point, a step-by-step path, and someone who&apos;s
                  already done it guiding you the whole way.
                </p>
                <a
                  href="#the-program"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  See exactly what you get inside the program
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
                </a>
              </div>

              {/* Animated checklist */}
              <motion.ul
                variants={checkList}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="relative space-y-3"
              >
                {BENEFITS.map((b) => (
                  <motion.li
                    key={b}
                    variants={checkItem}
                    className="flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3.5 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30">
                      <Check />
                    </span>
                    <span className="font-medium text-zinc-800">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
