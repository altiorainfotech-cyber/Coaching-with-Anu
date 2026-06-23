"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

type Stream = {
  name: string;
  desc: string;
  featured?: boolean;
  icon: React.ReactNode;
};

const STREAMS: Stream[] = [
  {
    name: "Affiliate Marketing",
    desc: "Earn commissions promoting products you genuinely believe in.",
    icon: (
      <>
        <path d="M8 12a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-1 1" />
        <path d="M12 8a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l1-1" />
      </>
    ),
  },
  {
    name: "UGC Content Creation",
    desc: "Get paid by brands to create authentic, scroll-stopping content.",
    icon: (
      <>
        <rect x="3" y="5" width="10" height="10" rx="2" />
        <path d="M13 9l4-2v6l-4-2" />
      </>
    ),
  },
  {
    name: "Paid Brand Collaborations",
    desc: "Land sponsorships and paid partnerships with real brands.",
    icon: (
      <>
        <path d="M10 2.5l1.8 1.5 2.3-.2.6 2.2 1.9 1.3-1 2.1 1 2.1-1.9 1.3-.6 2.2-2.3-.2L10 17.5l-1.8-1.5-2.3.2-.6-2.2L3.4 12.4l1-2.1-1-2.1 1.9-1.3.6-2.2 2.3.2L10 2.5Z" />
        <path d="M7.8 10l1.6 1.6L13 8" />
      </>
    ),
  },
  {
    name: "AI Assistants & Chatbots",
    desc: "Build and sell AI tools that work for clients around the clock.",
    icon: (
      <>
        <path d="M4 5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8l-4 3V6a1 1 0 0 1 1-1Z" />
        <path d="M8 9h6M8 11.5h3" />
      </>
    ),
  },
  {
    name: "Selling on TikTok Shop",
    desc: "Turn short videos into a product sales machine.",
    icon: (
      <>
        <path d="M5.5 7h9l-.8 8.2a1.5 1.5 0 0 1-1.5 1.3H7.8a1.5 1.5 0 0 1-1.5-1.3L5.5 7Z" />
        <path d="M7.5 7a2.5 2.5 0 0 1 5 0" />
      </>
    ),
  },
  {
    name: "Monetising Facebook",
    desc: "Tap into Facebook's reach to grow a real income.",
    icon: (
      <>
        <path d="M6 9v8H3.5V9H6Zm0 0 2.7-5.4A1.8 1.8 0 0 1 11 5.2V8h4a1.4 1.4 0 0 1 1.4 1.7l-1 5A1.5 1.5 0 0 1 14 16H6" />
      </>
    ),
  },
  {
    name: "Getting Clients on LinkedIn",
    desc: "Attract high-value clients with a profile that converts.",
    icon: (
      <>
        <rect x="3" y="6" width="14" height="10" rx="2" />
        <path d="M7 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M3 10.5h14" />
      </>
    ),
  },
  {
    name: "Copywriting for Brands",
    desc: "Write words that sell — and charge premium rates for it.",
    icon: (
      <>
        <path d="M13 3.5l3.5 3.5M4 16l1-3.2 8-8L16.3 8l-8 8L4 16Z" />
      </>
    ),
  },
  {
    name: "Digital Products",
    desc: "Create once, sell forever with your own digital products.",
    icon: (
      <>
        <path d="M10 2.5l6.5 3.5v8L10 17.5 3.5 14v-8L10 2.5Z" />
        <path d="M3.7 6L10 9.5 16.3 6M10 9.5v8" />
      </>
    ),
  },
  {
    name: "Email Marketing Funnels",
    desc: "Build funnels that turn subscribers into repeat buyers.",
    icon: (
      <>
        <rect x="3" y="5" width="14" height="10" rx="2" />
        <path d="M3.5 6l6.5 5 6.5-5" />
      </>
    ),
  },
  {
    name: "Faceless Content Strategy",
    desc: "Grow an audience and earn without ever showing your face.",
    icon: (
      <>
        <path d="M3 10s2.6-5 7-5c1.4 0 2.6.5 3.6 1.1M17 10s-2.6 5-7 5c-1.4 0-2.6-.5-3.6-1.1" />
        <path d="M8 8a2.8 2.8 0 0 0 4 4M3 3l14 14" />
      </>
    ),
  },
  {
    name: "Canva Design Services",
    desc: "Offer in-demand design services using simple, free tools.",
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
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(rgba(37,99,235,0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header — centered on top */}
        <Reveal direction="up" className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Multiple Income Streams
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            I won&apos;t leave you with{" "}
            <em className="text-brand-600">just one way</em> to earn
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Most coaches teach one method and leave you there. I teach you
            everything I personally use to build{" "}
            <span className="font-semibold text-black">4 income streams</span> —
            so you&apos;re never dependent on just one source.
          </p>
        </Reveal>

        {/* Masonry card grid */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3"
        >
          {STREAMS.map((s, i) => (
            <motion.div
              key={s.name}
              variants={item}
              custom={(i % 3) - 1}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-none rounded-tl-3xl rounded-br-3xl p-7 shadow-sm transition-shadow duration-300 ${
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
                  className={`text-lg font-bold leading-snug ${
                    s.featured
                      ? "text-white"
                      : "text-black group-hover:text-white"
                  }`}
                >
                  {s.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    s.featured
                      ? "text-brand-100"
                      : "text-zinc-500 group-hover:text-brand-100"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA — below the cards */}
        <Reveal direction="up" className="mt-14 flex justify-center">
          <motion.a
            href="#the-program"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/25 ring-1 ring-inset ring-white/15 transition-all hover:bg-zinc-800 hover:shadow-xl"
          >
            View All Skills
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
