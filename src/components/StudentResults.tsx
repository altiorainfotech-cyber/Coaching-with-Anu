"use client";

import { useCallback, useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import heera from "../../public/images/Student Results/testi-heera-v13kmUis.jpg";
import jeleesha from "../../public/images/Student Results/testi-jeleesha-Cm5XXcYM.jpg";
import riya from "../../public/images/Student Results/testi-riya-C2-OI_Kc.jpg";
import student from "../../public/images/Student Results/testi-student-CCsZxebU.png";

type Slide = { src: StaticImageData; alt: string };

const SLIDES: Slide[] = [
  { src: heera, alt: "Student result: made $3.6K in one month" },
  { src: jeleesha, alt: "Student result from Jeleesha" },
  { src: riya, alt: "Student result from Riya" },
  { src: student, alt: "Student result screenshot" },
];

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }}
    >
      <path
        d="M6 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StudentResults() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((dir: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.clientWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  // Continuous auto-play — a gentle, seamless scroll that pauses on hover.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = scroller.current;
    if (!el) return;

    let raf = 0;
    let paused = false;
    const speed = 0.6; // px per frame

    const step = () => {
      if (!paused) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const pause = () => (paused = true);
    const resume = () => (paused = false);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section
      id="student-results"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Student Results
          </span>
          <h2 className="mt-6 font-serif text-4xl capitalize leading-[1.1] text-black sm:text-5xl">
            People are already{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              changing their lives
            </em>
          </h2>
        </Reveal>

        {/* Slider */}
        <div className="relative mt-14">
          {/* Arrows */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous"
            className="absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-lg transition-colors hover:border-brand-300 hover:text-brand-800 sm:flex"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next"
            className="absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-lg transition-colors hover:border-brand-300 hover:text-brand-800 sm:flex"
          >
            <Chevron dir="right" />
          </button>

          {/* Track */}
          <div
            ref={scroller}
            className="flex overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...SLIDES, ...SLIDES].map((slide, i) => (
              <figure
                key={i}
                data-card
                className="mr-6 w-[82%] shrink-0 sm:w-[360px]"
              >
                <div className="relative h-[440px] overflow-hidden rounded-2xl bg-[#0f0f0f] shadow-xl shadow-brand-900/10 ring-1 ring-black/5">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    placeholder="blur"
                    fill
                    sizes="(max-width: 640px) 82vw, 360px"
                    className="object-contain"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
