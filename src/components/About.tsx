"use client";

import Image from "next/image";
import { motion } from "motion/react";
import anuPhoto from "../../public/anu-BTUDadeL.jpg";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const paragraph = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function About() {
  return (
    <section
      id="my-story"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Soft brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal direction="right" className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-tr from-brand-500/30 to-brand-200/40 blur-2xl"
          />
          <TiltCard
            intensity={7}
            className="group overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-2xl shadow-brand-900/10"
          >
            <Image
              src={anuPhoto}
              alt="Anu, founder of Coaching with Anu, at her workspace"
              placeholder="blur"
              sizes="(max-width: 1024px) 90vw, 28rem"
              className="h-auto w-full object-cover"
              priority={false}
            />
          </TiltCard>

          {/* Floating accent chip */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-black/5 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:-right-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-lg">
              🇨🇦
            </span>
            <div className="text-left">
              <p className="text-sm font-bold text-black">Built from zero</p>
              <p className="text-xs text-zinc-500">in Canada</p>
            </div>
          </motion.div>
        </Reveal>

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={paragraph}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600"
          >
            My Story
          </motion.p>

          <motion.h2
            variants={paragraph}
            className="mt-4 font-serif text-4xl leading-tight text-black sm:text-5xl"
          >
            From{" "}
            <em className="text-brand-600">immigrant worker</em> to building a
            life online
          </motion.h2>

          <motion.div
            variants={paragraph}
            className="mt-7 space-y-5 text-lg leading-8 text-zinc-600"
          >
            <p>
              I came to Canada as an immigrant and did what most people do — I
              worked. I worked at Tim Hortons. I worked at Walmart. I took every
              opportunity I could find and slowly climbed the corporate ladder.
              From the outside, it looked like progress.
            </p>
            <p>
              But then a{" "}
              <strong className="font-semibold text-black">
                family emergency changed everything.
              </strong>{" "}
              I had to leave my job. And in that moment — when my one source of
              income disappeared overnight — I realised something that shook me:{" "}
              <strong className="font-semibold text-black">
                having just one income stream is never enough.
              </strong>{" "}
              Because life does not warn you before it flips everything upside
              down.
            </p>
            <p>
              That moment pushed me to figure out how to make money online — not
              just one way, but multiple ways. I started from zero, learned
              everything from scratch, made mistakes, and kept going. Eventually
              I built{" "}
              <strong className="font-semibold text-black">
                4 income streams online
              </strong>{" "}
              and crossed over $200K in total earnings.
            </p>
            <p>
              Now I teach others how to do the same — with a proper structured
              path, not random videos and guesswork.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
