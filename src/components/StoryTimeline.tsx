"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

type Step = {
  n: string;
  title: string;
  desc: string;
  x: number; // % of viewBox width
  y: number; // % of viewBox height
  place: "above" | "below";
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Started with a Dream",
    desc: "Left home to build a better future in Canada.",
    x: 10,
    y: 72,
    place: "above",
    // sparkle / star
    icon: (
      <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />
    ),
  },
  {
    n: "02",
    title: "Faced the Reality",
    desc: "Balancing studies, work, expenses, and uncertainty wasn't easy.",
    x: 30,
    y: 33,
    place: "below",
    // briefcase
    icon: (
      <>
        <path d="M4 8h16v11H4z" />
        <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" />
      </>
    ),
  },
  {
    n: "03",
    title: "Discovered Digital Income",
    desc: "Found a business model that wasn't limited by hourly wages.",
    x: 50,
    y: 68,
    place: "above",
    // lightbulb
    icon: (
      <>
        <path d="M9.5 18h5M10.5 21h3" />
        <path d="M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.8h5c0-.7.4-1.4 1-1.8A6 6 0 0012 3z" />
      </>
    ),
  },
  {
    n: "04",
    title: "Built an Online Brand",
    desc: "Started creating content, learning marketing, and helping others.",
    x: 70,
    y: 33,
    place: "below",
    // rocket
    icon: (
      <>
        <path d="M12 2c2.8 2 4 4.8 4 7.5 0 1.5-.4 2.9-1 4.1l-3 2-3-2c-.6-1.2-1-2.6-1-4.1C8 6.8 9.2 4 12 2z" />
        <path d="M9 15l-2 2m8-2l2 2" />
      </>
    ),
  },
  {
    n: "05",
    title: "Now I Teach Others",
    desc: "Helping everyday people build online income with confidence.",
    x: 90,
    y: 66,
    place: "above",
    // heart
    icon: (
      <path d="M12 20s-6.5-4.2-9-8C1.5 9.3 3 6 6.3 6 8.4 6 12 8.5 12 8.5S15.6 6 17.7 6C21 6 22.5 9.3 21 12c-2.5 3.8-9 8-9 8z" />
    ),
  },
];

// Smooth road through the 5 waypoints (viewBox 1000 x 460).
const ROAD =
  "M100,331 C200,331 200,152 300,152 S400,313 500,313 S600,152 700,152 S800,304 900,304";

export default function StoryTimeline() {
  return (
    <section
      id="my-story-timeline"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            My Journey
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            My{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Story
            </em>{" "}
            Timeline
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            From a one-way ticket to Canada to teaching others online —
            here&apos;s how the journey unfolded, one decision at a time.
          </p>
        </Reveal>

        {/* Desktop: tilted 3D winding road */}
        <div
          className="relative mx-auto mt-8 hidden w-full md:block"
          style={{ perspective: "1700px" }}
        >
          {/* ground shadow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 bottom-0 h-24 rounded-[50%] bg-brand-900/10 blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, rotateX: 38 }}
            whileInView={{ opacity: 1, rotateX: 22 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
            style={{ aspectRatio: "1000 / 460", transformStyle: "preserve-3d" }}
          >
            <svg
              viewBox="0 0 1000 460"
              className="absolute inset-0 h-full w-full overflow-visible"
              fill="none"
            >
              <defs>
                <linearGradient id="asphalt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3d434f" />
                  <stop offset="0.5" stopColor="#2b303a" />
                  <stop offset="1" stopColor="#171a21" />
                </linearGradient>
              </defs>

              {/* light curb / road edge */}
              <path
                d={ROAD}
                stroke="#eef2f7"
                strokeWidth="50"
                strokeLinecap="round"
              />
              {/* asphalt surface */}
              <path
                d={ROAD}
                stroke="url(#asphalt)"
                strokeWidth="40"
                strokeLinecap="round"
              />
              {/* dashed lane line */}
              <path
                d={ROAD}
                stroke="rgba(255,255,255,0.92)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="18 26"
              />
              {/* travelling glow */}
              <circle r="17" fill="#60a5fa" opacity="0.3">
                <animateMotion dur="8s" repeatCount="indefinite" path={ROAD} />
              </circle>
              <circle r="6" fill="#dbeafe">
                <animateMotion dur="8s" repeatCount="indefinite" path={ROAD} />
              </circle>
            </svg>

            {/* Pins */}
            {STEPS.map((s, i) => (
              <motion.a
                key={s.n}
                href="#what-i-help"
                className="group absolute z-20"
                style={{
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  x: "-50%",
                  y: "-50%",
                  z: 55,
                  rotateX: -22,
                  transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: 0.7 + i * 0.18,
                  type: "spring",
                  stiffness: 240,
                  damping: 15,
                }}
                whileHover={{ scale: 1.2, z: 90 }}
              >
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 shadow-[0_12px_26px_-6px_rgba(37,99,235,0.75)] ring-[5px] ring-white transition-shadow duration-300 group-hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.8)]">
                  {/* glossy top highlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-2.5 top-2 h-3.5 rounded-full bg-white/45 blur-[3px]"
                  />
                  <svg
                    className="relative h-7 w-7 text-white drop-shadow-sm"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </span>
              </motion.a>
            ))}

            {/* Captions */}
            {STEPS.map((s, i) => (
              <motion.div
                key={`c-${s.n}`}
                className="absolute w-48 text-center"
                style={{
                  left: `${s.x}%`,
                  top: `${s.place === "above" ? s.y - 27 : s.y + 27}%`,
                  x: "-50%",
                  y: "-50%",
                  z: 25,
                  rotateX: -22,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.9 + i * 0.18, duration: 0.5 }}
              >
                <h3 className="text-base font-bold leading-snug text-black">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-zinc-500">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="mt-12 space-y-4 md:hidden">
          {STEPS.map((s) => (
            <Reveal key={s.n} direction="up">
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-md">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-black">{s.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal direction="up" className="mt-16 flex justify-center">
          <a
            href="#what-i-help"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/70 px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-all duration-300 hover:gap-3 hover:border-brand-300 hover:bg-brand-100/70 hover:shadow-md"
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
        </Reveal>
      </div>
    </section>
  );
}
