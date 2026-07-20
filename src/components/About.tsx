"use client";

import Image from "next/image";
import { motion } from "motion/react";
import anuPhoto from "../../public/image.jpeg";
import Reveal from "./Reveal";
import CubeGrid from "./CubeGrid";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Replace this URL with a real second photo later.
const SECONDARY_PHOTO =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80";

export default function About() {
  return (
    <section
      id="my-story"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-24 sm:py-32"
    >
      {/* Animated 3D cube-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <CubeGrid className="scale-[1.5] opacity-40 sm:scale-[1.8]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* ---------- Image collage ---------- */}
        <Reveal
          direction="right"
          className="relative mx-auto w-full max-w-lg pb-16 pl-6 sm:pb-10"
        >
          {/* Dashed swirl */}
          <svg
            aria-hidden
            viewBox="0 0 160 200"
            fill="none"
            className="pointer-events-none absolute -left-2 bottom-0 h-44 w-36 text-rose-300"
          >
            <path
              d="M150 10C90 30 20 50 30 110c8 48 70 40 80 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="3 11"
            />
          </svg>

          {/* Paper plane */}
          <svg
            aria-hidden
            viewBox="0 0 48 48"
            fill="none"
            className="pointer-events-none absolute -bottom-2 left-6 h-12 w-12 text-rose-400"
          >
            <path
              d="M44 4L4 22l16 6 6 16L44 4Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M44 4L20 28"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>

          {/* Primary photo */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[70%] overflow-hidden rounded-[1.75rem] ring-4 ring-white shadow-2xl shadow-brand-900/15"
          >
            <Image
              src={anuPhoto}
              alt="Anisha, founder of Coaching with Anisha, at her workspace"
              placeholder="blur"
              sizes="(max-width: 1024px) 60vw, 18rem"
              className="h-auto w-full object-cover"
            />
          </motion.div>

          {/* Secondary photo */}
          <motion.div
            initial={{ opacity: 0, y: -24, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-6 right-0 z-20 w-[55%] overflow-hidden rounded-[1.75rem] ring-4 ring-white shadow-2xl shadow-brand-900/15"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SECONDARY_PHOTO}
              alt="Learning online from anywhere"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Stat badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="absolute -bottom-2 left-1/4 z-30 flex items-center gap-3 rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 px-5 py-3 text-white shadow-xl shadow-brand-900/30"
          >
            <span className="font-serif text-3xl font-bold leading-none">
              $200K+
            </span>
            <span className="text-sm font-semibold leading-tight">
              Earned
              <br />
              online
            </span>
          </motion.div>
        </Reveal>

        {/* ---------- Text ---------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-4 font-serif text-4xl capitalize leading-tight text-black sm:text-5xl"
          >
            Hi, I&rsquo;m <em className="text-brand-600">Anisha</em> 👋
          </motion.h2>

          <motion.div
            variants={item}
            className="mt-6 space-y-4 text-lg leading-8 text-zinc-600"
          >
            <p>
              A few years ago, I landed in Canada as an international student.
              Like many students, I was juggling studies, work, bills, and trying
              to figure out how to build a better future. I knew I wanted more
              than just surviving from paycheck to paycheck.
            </p>
            <p>
              I tried different ways to make money online, but most of them
              either didn&rsquo;t work or weren&rsquo;t sustainable. Then I found{" "}
              <strong className="font-semibold text-black">
                digital products and online business.
              </strong>{" "}
              It completely changed how I looked at earning money. Instead of
              trading time for income, I learned how to build{" "}
              <strong className="font-semibold text-black">
                digital assets that could continue generating revenue
              </strong>{" "}
              while I studied, worked, travelled, or spent time with family.
            </p>
            <p>
              Now my mission is simple: to help ambitious people&mdash;especially
              students, immigrants, and beginners&mdash;learn the same skills so
              they can create financial freedom on their own terms.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={item}
            href="#what-i-help"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-10 inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-black/25 transition-all hover:bg-zinc-800 hover:shadow-2xl"
          >
            Discover More
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
        </motion.div>
      </div>
    </section>
  );
}
