"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Reveal from "./Reveal";

type Step = {
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Niche & Target Audience",
    body: "Find the perfect niche that aligns with your interests and has real money potential. Understand exactly who your target audience is, what they want, and how to speak directly to them so they feel seen and want to buy from you.",
    icon: (
      <>
        <circle cx="10" cy="10" r="7" />
        <circle cx="10" cy="10" r="3" />
        <path d="M10 1v2.5M10 16.5V19M1 10h2.5M16.5 10H19" />
      </>
    ),
  },
  {
    num: "02",
    title: "Digital Products",
    body: "Create your own digital products from scratch — even with zero experience. Learn what sells, how to price it, and how to package it so people actually want to buy. This is where your passive income begins.",
    icon: (
      <>
        <path d="M10 2.5l6.5 3.5v8L10 17.5 3.5 14v-8L10 2.5Z" />
        <path d="M3.7 6L10 9.5 16.3 6M10 9.5v8" />
      </>
    ),
  },
  {
    num: "03",
    title: "Storefront Setup",
    body: "Set up your online storefront using the right platforms. Get your link-in-bio, product delivery, and payment systems all working together so sales happen automatically — even while you sleep.",
    icon: (
      <>
        <path d="M4 7V5.5A2.5 2.5 0 0 1 6.5 3h7A2.5 2.5 0 0 1 16 5.5V7" />
        <path d="M3 7h14l-1 9.5A2 2 0 0 1 14 18H6a2 2 0 0 1-2-1.5L3 7Z" />
      </>
    ),
  },
  {
    num: "04",
    title: "Automations",
    body: "Build email sequences, automated delivery, and content systems that work for you 24 hours a day. This is how you stop trading time for money and start building something that truly runs itself.",
    icon: <path d="M11 2L4 11h5l-1 7 7-9h-5l1-7Z" />,
  },
  {
    num: "05",
    title: "High Income Skills",
    body: "Learn the skills that actually make you money online — content creation, email marketing, affiliate marketing, UGC, faceless branding, AI tools, and building multiple income streams so you're never dependent on just one.",
    icon: (
      <>
        <path d="M3 14l4-4 3 3 6-7" />
        <path d="M13 6h4v4" />
      </>
    ),
  },
];

export default function TheProgram() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      id="the-program"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            The Program
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            My{" "}
            <em className="text-brand-600">5-step formula</em> to building your
            online business
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            Not a random collection of videos. A structured path — everything in
            the right order so you always know exactly what to do next.
          </p>
        </Reveal>

        {/* Timeline */}
        <div ref={trackRef} className="relative mt-20">
          {/* Track + scroll-linked progress fill */}
          <div className="absolute bottom-3 left-6 top-3 w-0.5 -translate-x-1/2 rounded-full bg-zinc-200 md:left-8" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-3 left-6 top-3 w-0.5 origin-top -translate-x-1/2 rounded-full bg-linear-to-b from-brand-400 via-brand-600 to-brand-700 md:left-8"
          />

          <div className="space-y-10 sm:space-y-12">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="relative pl-20 md:pl-28"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="absolute left-6 top-1 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-lg shadow-brand-600/40 ring-4 ring-white md:left-8 md:h-14 md:w-14 md:text-base"
                >
                  {step.num}
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/30" />
                </motion.div>

                {/* Card */}
                <Reveal direction="left" delay={i * 0.04}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-red-500 via-brand-500 to-yellow-400 text-white shadow-md shadow-brand-600/20 ring-1 ring-inset ring-white/25 transition-transform group-hover:scale-105">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {step.icon}
                        </svg>
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-black">
                          {step.title}
                        </h3>
                        <p className="mt-2 leading-7 text-zinc-600">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal direction="up" className="mt-16 flex justify-center">
          <motion.a
            href="#the-program"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/25 ring-1 ring-inset ring-white/15 transition-all hover:bg-zinc-800 hover:shadow-xl"
          >
            Start the 5-step formula
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
