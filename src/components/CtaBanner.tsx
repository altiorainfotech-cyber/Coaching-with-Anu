"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section
      id="get-started"
      className="relative scroll-mt-24 bg-white px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#060a18] px-6 py-16 text-center text-white shadow-2xl shadow-brand-900/40 sm:px-16 sm:py-20">
          {/* Decorative animated glows */}
          <motion.div
            aria-hidden
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand-400/35 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-brand-300/35 blur-3xl"
          />
          {/* Subtle grid */}
          <div
            aria-hidden
            className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />

          <Reveal direction="up" className="relative">
            <h2 className="mx-auto max-w-3xl font-serif text-4xl capitalize leading-[1.15] sm:text-5xl">
              You don&apos;t need a big following.
              <br />
              You just need the{" "}
              <em className="text-brand-200">right education.</em>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-100">
              Stop watching random videos. Stop downloading free guides that lead
              nowhere. Get structured education with a real mentor, and actually
              start building the life you want.
            </p>

            <motion.a
              href="https://instagram.com/anishaxsidhu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-10 inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-8 py-4 text-base font-semibold text-white shadow-xl shadow-black/30 ring-1 ring-inset ring-white/15 transition-all hover:bg-zinc-900 hover:shadow-2xl"
            >
              Join the Program
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
      </div>
    </section>
  );
}
