"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import s1 from "../../public/images/Community/student-1-CxxwZOtN.jpg";
import s2 from "../../public/images/Community/student-2-B9_1JLFk.jpg";
import s3 from "../../public/images/Community/student-3-KxZ6jXV2.jpg";

const SLIDES: StaticImageData[] = [s1, s2, s3];

// Triple the set so the loop is seamless in both directions (swipe + auto).
const LOOP = [...SLIDES, ...SLIDES, ...SLIDES];

export default function Community() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const SPEED = 0.6; // px per frame (slow continuous drift)
    let raf = 0;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;

    // Drag-to-scroll (mouse). Touch uses native scrolling.
    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const third = () => el.scrollWidth / 3;

    const normalize = () => {
      const t = third();
      if (t === 0) return;
      if (el.scrollLeft < t * 0.5) el.scrollLeft += t;
      else if (el.scrollLeft >= t * 1.5) el.scrollLeft -= t;
    };

    const step = () => {
      if (!paused) {
        el.scrollLeft += SPEED;
        normalize();
      }
      raf = requestAnimationFrame(step);
    };

    const pause = () => {
      paused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    };
    const resume = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, 1500);
    };

    const onPointerDown = (e: PointerEvent) => {
      pause();
      if (e.pointerType === "mouse") {
        dragging = true;
        startX = e.clientX;
        startScroll = el.scrollLeft;
        el.classList.add("cursor-grabbing");
      }
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onPointerUp = () => {
      if (dragging) {
        dragging = false;
        el.classList.remove("cursor-grabbing");
      }
      resume();
    };
    const onScroll = () => normalize();
    const onWheel = () => {
      pause();
      resume();
    };

    // Start in the middle third so both directions have room.
    raf = requestAnimationFrame(() => {
      el.scrollLeft = third();
      if (!reduce) raf = requestAnimationFrame(step);
    });

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", pause, { passive: true });
    window.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", pause);
      window.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section
      id="community"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"
      />

      {/* Hide scrollbar */}
      <style>{`
        .community-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .community-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="relative mx-auto max-w-2xl px-6">
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
      </div>

      {/* Swipeable looping carousel — 3 up on desktop, 2 tablet, 1 mobile */}
      <Reveal direction="up" className="mt-16">
        <div className="group relative overflow-hidden">
          {/* edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-24"
          />

          <div
            ref={trackRef}
            className="community-scroll flex cursor-grab touch-pan-x overflow-x-auto overscroll-x-contain"
          >
            {LOOP.map((src, i) => (
              <div
                key={i}
                className="w-[64vw] shrink-0 px-2.5 sm:w-[38vw] lg:w-[25vw]"
              >
                <figure className="group/card relative overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/10">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={src}
                      alt={`Community student ${(i % SLIDES.length) + 1}`}
                      placeholder="blur"
                      fill
                      sizes="(max-width: 640px) 64vw, (max-width: 1024px) 38vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover/card:scale-[1.05]"
                      draggable={false}
                    />
                    {/* bottom gradient */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/35 to-transparent"
                    />
                  </div>
                  {/* Quote glyph */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/90 font-serif text-lg leading-none text-white shadow-lg opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                  >
                    &rdquo;
                  </span>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
