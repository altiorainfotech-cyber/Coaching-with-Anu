"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  CalendarDays,
  Clock,
  Video,
  Mic,
  MessageCircle,
  ShoppingBag,
  Laptop,
} from "lucide-react";
import CtaButton from "./CtaButton";
import { CTA_PRIMARY, WEBINAR } from "./content";
import portrait from "../../../public/image.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;
const up = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const FLOATERS = [
  { label: "Live Training", Icon: Mic, pos: "left-0 top-10 sm:-left-8", dur: 6 },
  { label: "Q&A", Icon: MessageCircle, pos: "right-0 top-24 sm:-right-6", dur: 7 },
  {
    label: "Digital Products",
    Icon: ShoppingBag,
    pos: "left-2 bottom-28 sm:-left-10",
    dur: 8,
  },
  {
    label: "Online Business",
    Icon: Laptop,
    pos: "right-2 bottom-10 sm:-right-4",
    dur: 6.5,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[520px] rounded-full bg-wb-secondary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-32 size-[420px] rounded-full bg-wb-accent/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20 lg:pb-24">
        <div>
          <motion.p
            {...up(0.05)}
            className="mb-5 text-xs font-semibold tracking-[0.28em] text-[#a8873a]"
          >
            <span
              aria-hidden
              className="mr-3 inline-block h-px w-8 bg-wb-accent align-middle"
            />
            FREE LIVE WEBINAR
          </motion.p>
          <motion.h1
            {...up(0.15)}
            className="font-(family-name:--font-wb-serif) text-[2.5rem] leading-[1.08] text-balance text-wb-ink sm:text-6xl lg:text-[4.25rem]"
          >
            Build an{" "}
            <span className="relative text-wb-primary italic">
              Online Income Stream
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2 w-full text-wb-accent"
              >
                <path
                  d="M2 8 C 80 2, 200 2, 298 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Without Waiting for the Perfect Time
          </motion.h1>
          <motion.p
            {...up(0.3)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-wb-muted"
          >
            Learn the practical steps to turn your skills, knowledge, or ideas
            into a digital offer — and start building an online business around
            it.
          </motion.p>

          <motion.div
            {...up(0.42)}
            className="mt-8 flex max-w-xl flex-col divide-y divide-wb-primary/10 rounded-2xl border border-wb-primary/10 bg-white/80 shadow-[0_20px_50px_-30px_rgba(91,78,130,0.5)] backdrop-blur sm:flex-row sm:divide-x sm:divide-y-0"
          >
            <div className="px-5 py-4 sm:flex-1">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-[#a8873a]">
                NEXT LIVE SESSION
              </p>
              <p className="mt-1 flex items-center gap-2 font-(family-name:--font-wb-serif) text-xl text-wb-ink">
                <CalendarDays aria-hidden className="size-4 text-wb-primary" />
                {WEBINAR.dateLabel}
              </p>
            </div>
            <div className="flex items-center gap-6 px-5 py-4">
              <p className="flex items-center gap-2 text-sm font-medium text-wb-ink">
                <Clock aria-hidden className="size-4 text-wb-primary" />
                {WEBINAR.timeLabel}
              </p>
              <p className="flex items-center gap-2 text-sm font-medium text-wb-ink">
                <Video aria-hidden className="size-4 text-wb-primary" />
                {WEBINAR.format}
              </p>
            </div>
          </motion.div>

          <motion.div {...up(0.54)} className="mt-8">
            <CtaButton>{CTA_PRIMARY}</CtaButton>
            <p className="mt-4 text-sm text-wb-muted">
              100% Free • Live Training • Q&amp;A Included
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div
            aria-hidden
            className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2.5rem] border border-wb-accent/60"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-wb-soft shadow-[0_40px_80px_-40px_rgba(43,35,64,0.6)]">
            <Image
              src={portrait}
              alt="Anisha, your webinar host, standing outdoors in a cream blazer"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
          {FLOATERS.map(({ label, Icon, pos, dur }, i) => (
            <motion.div
              key={label}
              aria-hidden
              className={`absolute ${pos} flex items-center gap-2 rounded-2xl border border-white/60 bg-white/70 px-3.5 py-2.5 text-xs font-semibold text-wb-ink shadow-lg backdrop-blur-md sm:text-sm`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            >
              <span className="grid size-7 place-items-center rounded-full bg-wb-soft text-wb-primary">
                <Icon className="size-3.5" />
              </span>
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
