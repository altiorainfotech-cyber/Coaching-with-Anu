"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Reveal from "./Reveal";

type Stream = { name: string; icon: React.ReactNode };

const STREAMS: Stream[] = [
  {
    name: "Affiliate Marketing",
    icon: (
      <>
        <path d="M8 12a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-1 1" />
        <path d="M12 8a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l1-1" />
      </>
    ),
  },
  {
    name: "UGC Content Creation",
    icon: (
      <>
        <rect x="3" y="5" width="10" height="10" rx="2" />
        <path d="M13 9l4-2v6l-4-2" />
      </>
    ),
  },
  {
    name: "Paid Brand Collaborations",
    icon: (
      <>
        <path d="M10 2.5l1.8 1.5 2.3-.2.6 2.2 1.9 1.3-1 2.1 1 2.1-1.9 1.3-.6 2.2-2.3-.2L10 17.5l-1.8-1.5-2.3.2-.6-2.2L3.4 12.4l1-2.1-1-2.1 1.9-1.3.6-2.2 2.3.2L10 2.5Z" />
        <path d="M7.8 10l1.6 1.6L13 8" />
      </>
    ),
  },
  {
    name: "AI Assistants & Chatbots",
    icon: (
      <>
        <path d="M4 5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8l-4 3V6a1 1 0 0 1 1-1Z" />
        <path d="M8 9h6M8 11.5h3" />
      </>
    ),
  },
  {
    name: "Selling on TikTok Shop",
    icon: (
      <>
        <path d="M5.5 7h9l-.8 8.2a1.5 1.5 0 0 1-1.5 1.3H7.8a1.5 1.5 0 0 1-1.5-1.3L5.5 7Z" />
        <path d="M7.5 7a2.5 2.5 0 0 1 5 0" />
      </>
    ),
  },
  {
    name: "Monetising Facebook",
    icon: (
      <>
        <path d="M6 9v8H3.5V9H6Zm0 0 2.7-5.4A1.8 1.8 0 0 1 11 5.2V8h4a1.4 1.4 0 0 1 1.4 1.7l-1 5A1.5 1.5 0 0 1 14 16H6" />
      </>
    ),
  },
  {
    name: "Getting Clients on LinkedIn",
    icon: (
      <>
        <rect x="3" y="6" width="14" height="10" rx="2" />
        <path d="M7 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M3 10.5h14" />
      </>
    ),
  },
  {
    name: "Copywriting for Brands",
    icon: (
      <>
        <path d="M13 3.5l3.5 3.5M4 16l1-3.2 8-8L16.3 8l-8 8L4 16Z" />
      </>
    ),
  },
  {
    name: "Digital Products",
    icon: (
      <>
        <path d="M10 2.5l6.5 3.5v8L10 17.5 3.5 14v-8L10 2.5Z" />
        <path d="M3.7 6L10 9.5 16.3 6M10 9.5v8" />
      </>
    ),
  },
  {
    name: "Email Marketing Funnels",
    icon: (
      <>
        <rect x="3" y="5" width="14" height="10" rx="2" />
        <path d="M3.5 6l6.5 5 6.5-5" />
      </>
    ),
  },
  {
    name: "Faceless Content Strategy",
    icon: (
      <>
        <path d="M3 10s2.6-5 7-5c1.4 0 2.6.5 3.6 1.1M17 10s-2.6 5-7 5c-1.4 0-2.6-.5-3.6-1.1" />
        <path d="M8 8a2.8 2.8 0 0 0 4 4M3 3l14 14" />
      </>
    ),
  },
  {
    name: "Canva Design Services",
    icon: (
      <>
        <path d="M10 2.5a7.5 7.5 0 1 0 0 15c.9 0 1.4-.7 1.4-1.4 0-.7-.5-1.1-.5-1.7 0-.6.5-1 1.1-1H14a3.5 3.5 0 0 0 3.5-3.5c0-4-3.4-7.4-7.5-7.4Z" />
        <circle cx="6.5" cy="9" r="0.6" />
        <circle cx="9" cy="6.3" r="0.6" />
        <circle cx="12.5" cy="6.6" r="0.6" />
      </>
    ),
  },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function IncomeStreams() {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    gridRef.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    gridRef.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="multiple-income-streams"
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

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.82fr_1.3fr] lg:gap-16">
        {/* Left — editorial copy (sticky) */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
              Multiple Income Streams
            </span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
              I won&apos;t leave you with{" "}
              <em className="text-brand-600">just one way</em> to earn
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600">
              Most coaches teach one method and leave you there. I teach you
              everything I personally use to build{" "}
              <span className="font-semibold text-black">4 income streams</span>{" "}
              — so you&apos;re never dependent on just one source.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-sm">
              <span className="bg-linear-to-br from-brand-500 to-brand-700 bg-clip-text font-serif text-3xl font-bold text-transparent">
                12+
              </span>
              <span className="text-sm leading-tight text-zinc-600">
                monetisation skills
                <br />
                you&apos;ll learn inside
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right — spotlight grid */}
        <motion.div
          ref={gridRef}
          onPointerMove={handleMove}
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ "--mx": "50%", "--my": "0%" } as React.CSSProperties}
          className="group relative grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {/* cursor spotlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 [background:radial-gradient(260px_circle_at_var(--mx)_var(--my),rgba(37,99,235,0.12),transparent_65%)] group-hover:opacity-100"
          />

          {STREAMS.map((s) => (
            <motion.div
              key={s.name}
              variants={item}
              className="group/card relative flex items-center gap-3.5 rounded-xl border border-brand-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors duration-300 group-hover/card:bg-linear-to-br group-hover/card:from-brand-500 group-hover/card:to-brand-700 group-hover/card:text-white group-hover/card:ring-brand-400/40">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </span>
              <span className="text-sm font-medium text-zinc-800">
                {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
