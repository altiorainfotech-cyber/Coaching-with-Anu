"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import s1 from "../../public/images/Community/student-1-CxxwZOtN.jpg";
import s2 from "../../public/images/Community/student-2-B9_1JLFk.jpg";
import s3 from "../../public/images/Community/student-3-KxZ6jXV2.jpg";

const SLIDES: StaticImageData[] = [s1, s2, s3];
const AUTOPLAY_MS = 4500;

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function Community() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const len = SLIDES.length;

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + len) % len);
    },
    [len],
  );

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  // Autoplay loop — pauses on hover/focus, restarts after manual navigation.
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, index, paginate]);

  return (
    <section
      id="community"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Community
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            Real students.{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Real journeys.
            </em>
          </h2>
        </Reveal>

        {/* Slider */}
        <Reveal direction="up" className="mt-16">
          <div
            className="group relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-linear-to-tr from-brand-300/40 to-brand-200/40 blur-2xl"
            />

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-2xl shadow-brand-900/10">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 260, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) paginate(1);
                    else if (info.offset.x > 80) paginate(-1);
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src={SLIDES[index]}
                    alt={`Community student ${index + 1}`}
                    placeholder="blur"
                    fill
                    sizes="(max-width: 768px) 90vw, 56rem"
                    className="object-cover object-center"
                    draggable={false}
                    priority={index === 0}
                  />
                  {/* bottom gradient for counter legibility */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Counter */}
              <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")} / {String(len).padStart(2, "0")}
              </span>

              {/* Arrows */}
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow-lg backdrop-blur-sm transition hover:bg-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12 5l-5 5 5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow-lg backdrop-blur-sm transition hover:bg-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M8 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center justify-center gap-2.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-brand-600"
                      : "w-2.5 bg-brand-200 hover:bg-brand-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
