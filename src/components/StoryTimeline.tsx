"use client";

import Reveal from "./Reveal";

type Step = {
  n: string;
  title: string;
  desc: string;
  x: number; // % of viewBox width
  y: number; // % of viewBox height
  place: "above" | "below";
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Started with a Dream",
    desc: "Left home to build a better future in Canada.",
    x: 10,
    y: 72,
    place: "above",
  },
  {
    n: "02",
    title: "Faced the Reality",
    desc: "Balancing studies, work, expenses, and uncertainty wasn't easy.",
    x: 30,
    y: 33,
    place: "below",
  },
  {
    n: "03",
    title: "Discovered Digital Income",
    desc: "Found a business model that wasn't limited by hourly wages.",
    x: 50,
    y: 68,
    place: "above",
  },
  {
    n: "04",
    title: "Built an Online Brand",
    desc: "Started creating content, learning marketing, and helping others.",
    x: 70,
    y: 33,
    place: "below",
  },
  {
    n: "05",
    title: "Now I Teach Others",
    desc: "Helping everyday people build online income with confidence.",
    x: 90,
    y: 66,
    place: "above",
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
      <div className="mx-auto max-w-6xl px-6">
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

        {/* Desktop: winding road */}
        <Reveal
          direction="up"
          delay={0.1}
          className="relative mx-auto mt-16 hidden w-full max-w-5xl md:block"
        >
          <div className="relative" style={{ aspectRatio: "1000 / 460" }}>
            <svg
              viewBox="0 0 1000 460"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              {/* road shadow */}
              <path
                d={ROAD}
                stroke="rgba(15,23,42,0.12)"
                strokeWidth="40"
                strokeLinecap="round"
                transform="translate(0,8)"
              />
              {/* road */}
              <path
                d={ROAD}
                stroke="#1e293b"
                strokeWidth="34"
                strokeLinecap="round"
              />
              {/* dashed centre line */}
              <path
                d={ROAD}
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="2 24"
              />
            </svg>

            {STEPS.map((s) => (
              <div key={s.n}>
                {/* Pin */}
                <div
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-lg shadow-brand-600/40 ring-4 ring-white">
                    {s.n}
                  </span>
                </div>

                {/* Text */}
                <div
                  className="absolute w-44 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{
                    left: `${s.x}%`,
                    top: `${s.place === "above" ? s.y - 26 : s.y + 26}%`,
                  }}
                >
                  <h3 className="text-base font-bold leading-snug text-black">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-zinc-500">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile: vertical steps */}
        <div className="mt-12 space-y-4 md:hidden">
          {STEPS.map((s) => (
            <Reveal key={s.n} direction="up">
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 font-bold text-white shadow-md">
                  {s.n}
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
        <Reveal direction="up" className="mt-14 flex justify-center">
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
