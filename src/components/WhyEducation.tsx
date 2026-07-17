"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import VantaBirds from "./VantaBirds";

type TimelineStep = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const TIMELINE: TimelineStep[] = [
  {
    title: "Started with a Dream",
    body: "Left home to build a better future in Canada.",
    // sparkle / star
    icon: (
      <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />
    ),
  },
  {
    title: "Faced the Reality",
    body: "Balancing studies, work, expenses, and uncertainty wasn't easy.",
    // briefcase
    icon: (
      <>
        <path d="M4 8h16v11H4z" />
        <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" />
      </>
    ),
  },
  {
    title: "Discovered Digital Income",
    body: "Found a business model that wasn't limited by hourly wages.",
    // lightbulb
    icon: (
      <>
        <path d="M9.5 18h5M10.5 21h3" />
        <path d="M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.8h5c0-.7.4-1.4 1-1.8A6 6 0 0012 3z" />
      </>
    ),
  },
  {
    title: "Built an Online Brand",
    body: "Started creating content, learning marketing, and helping others.",
    // rocket
    icon: (
      <>
        <path d="M12 2c2.8 2 4 4.8 4 7.5 0 1.5-.4 2.9-1 4.1l-3 2-3-2c-.6-1.2-1-2.6-1-4.1C8 6.8 9.2 4 12 2z" />
        <path d="M9 15l-2 2m8-2l2 2" />
      </>
    ),
  },
  {
    title: "Now I Teach Others",
    body: "Helping everyday people build online income with confidence.",
    // heart
    icon: (
      <path d="M12 20s-6.5-4.2-9-8C1.5 9.3 3 6 6.3 6 8.4 6 12 8.5 12 8.5S15.6 6 17.7 6C21 6 22.5 9.3 21 12c-2.5 3.8-9 8-9 8z" />
    ),
  },
];

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
      className="relative scroll-mt-24 overflow-hidden bg-[#060a18] py-28 text-white sm:py-36"
    >
      {/* Vanta birds — live flocking background (demo-accurate, full strength) */}
      <VantaBirds className="absolute inset-0 h-full w-full" />

      {/* Soft scrim to keep copy readable over the flock */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,8,26,0.6),transparent_72%)]"
      />

      {/* Light-blue corner glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-400/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Why Education Matters
          </span>
          <h2 className="mt-6 font-serif text-4xl capitalize leading-[1.1] text-white sm:text-6xl">
            Feeling Overwhelmed by All the{" "}
            <em className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
              Information Online?
            </em>
          </h2>
          <div className="mt-8 space-y-5 text-left text-lg leading-8 text-white">
            <p>
              We live in a world where information is everywhere. Every day,
              there&apos;s a new course, a new strategy, a new &ldquo;secret&rdquo;
              to making money online. One person tells you to start Amazon,
              another says dropshipping, someone else says crypto, trading,
              affiliate marketing, or digital products.
            </p>
            <p>
              With unlimited resources comes unlimited confusion. I know exactly
              how that feels because I&apos;ve been there. When I first came to
              Canada, I spent countless hours watching videos, reading posts, and
              trying to figure out what was actually real and what was just
              another internet trend. The hardest part wasn&apos;t finding
              information&mdash;
              <span className="font-semibold text-white">
                it was knowing who to trust.
              </span>
            </p>
            <p>
              That&apos;s why I created this platform. I&apos;m here to simplify
              the process, cut through the noise, and guide you step by step. No
              overwhelming jargon. No unrealistic promises. Just a clear roadmap
              that helps you understand digital income, build the right skills,
              and take action with confidence.
            </p>
            <p>
              You don&apos;t need to learn everything. You just need to learn{" "}
              <span className="font-semibold text-white">
                the right things&mdash;from someone who&apos;s already walked the
                path.
              </span>
            </p>
          </div>
        </Reveal>

        {/* Transition line */}
        <Reveal
          direction="up"
          className="mx-auto mt-10 max-w-4xl text-center text-base text-zinc-400"
        >
          No structure. No sequence. No accountability. Every creator teaches
          something different — and you end up{" "}
          <span className="font-medium text-white">
            more confused than when you started.
          </span>
        </Reveal>

        {/* Solution panel — animated gradient border */}
        <Reveal direction="up" delay={0.1} className="mt-10">
          <div className="relative overflow-hidden rounded-[1.75rem] p-[1.5px] shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)]">
            <span
              aria-hidden
              className="absolute inset-[-150%] animate-[border-spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#ef4444_12%,#f97316_20%,#facc15_28%,transparent_42%,transparent_100%)]"
            />
            <div className="relative grid gap-10 overflow-hidden rounded-[1.65rem] bg-linear-to-br from-white via-white to-brand-50/60 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
              {/* inner glows */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-200">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-linear-to-br from-red-500 via-brand-500 to-yellow-400 text-white">
                    <Check />
                  </span>
                  My Journey
                </span>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-black sm:text-4xl">
                  My{" "}
                  <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                    Story
                  </em>{" "}
                  Timeline
                </h3>
                <p className="mt-4 max-w-md leading-8 text-zinc-600">
                  From a one-way ticket to Canada to teaching others online —
                  here&apos;s how the journey unfolded, one decision at a time.
                </p>
                <a
                  href="#the-program"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/70 px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm transition-all duration-300 hover:gap-3 hover:border-brand-300 hover:bg-brand-100/70 hover:shadow-md"
                >
                  Start your own journey
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

              {/* Animated story timeline */}
              <motion.ul
                variants={checkList}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative space-y-3 before:absolute before:left-[1.45rem] before:top-4 before:bottom-4 before:w-px before:bg-linear-to-b before:from-brand-200 before:via-brand-300 before:to-transparent"
              >
                {TIMELINE.map((t) => (
                  <motion.li
                    key={t.title}
                    variants={checkItem}
                    className="group/li relative flex items-start gap-4 rounded-2xl border border-brand-100 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-red-500 via-brand-500 to-yellow-400 text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover/li:scale-110 group-hover/li:rotate-3">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {t.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-900 transition-colors group-hover/li:text-brand-800">
                        {t.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-6 text-zinc-600">
                        {t.body}
                      </p>
                    </div>
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
