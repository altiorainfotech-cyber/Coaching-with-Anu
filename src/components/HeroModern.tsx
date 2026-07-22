"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import GLSLHills from "./ui/glsl-hills";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const LINE_ONE = ["Turn", "Your", "Story"];
const LINE_TWO: { t: string; h?: boolean }[] = [
  { t: "Into" },
  { t: "Your", h: true },
  { t: "Income.", h: true },
];


export default function HeroModern() {
  const [videoControls, setVideoControls] = useState(false);
  const [showUnmute, setShowUnmute] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Turn sound on from a real click (always allowed by the browser).
  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {});
    setShowUnmute(false);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Start 2s after load, with sound. Browsers block unmuted autoplay until
    // the user has interacted, so fall back to muted and unmute on the first
    // interaction.
    const start = async () => {
      v.muted = false;
      v.volume = 1;
      try {
        await v.play();
        setShowUnmute(false);
        return;
      } catch {
        /* blocked — fall back below */
      }

      v.muted = true;
      try {
        await v.play();
        setShowUnmute(true);
      } catch {
        /* ignore */
      }

      const unmute = () => {
        v.muted = false;
        v.play().catch(() => {});
        setShowUnmute(false);
        window.removeEventListener("pointerdown", unmute);
        window.removeEventListener("keydown", unmute);
        window.removeEventListener("touchstart", unmute);
      };
      window.addEventListener("pointerdown", unmute, { once: true });
      window.addEventListener("keydown", unmute, { once: true });
      window.addEventListener("touchstart", unmute, { once: true });
    };

    const timer = window.setTimeout(start, 2000);

    // Stop the video once the hero scrolls out of view. It deliberately does
    // NOT auto-resume on scroll back — the visitor restarts it if they want.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);

    return () => {
      window.clearTimeout(timer);
      io.disconnect();
      v.pause();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060a18] px-6 pt-32 pb-20 text-white">
      {/* Animated GLSL hills background */}
      <GLSLHills className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Bottom fade into the section base color */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#060a18]"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-13rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* ---------- Left: content ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          {/* Announcement pill */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            Online Business Education by Anisha
          </motion.span>

          <motion.h1
            variants={headline}
            className="mt-6 font-sora text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl"
          >
            {LINE_ONE.map((w, i) => (
              <Fragment key={`l1-${i}`}>
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>{" "}
              </Fragment>
            ))}
            <br className="hidden sm:block" />
            {LINE_TWO.map((w, i) => (
              <Fragment key={`l2-${i}`}>
                <motion.span
                  variants={word}
                  className={`inline-block ${
                    w.h
                      ? "bg-linear-to-r from-brand-400 via-brand-300 to-brand-200 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(96,165,250,0.5)]"
                      : ""
                  }`}
                >
                  {w.t}
                </motion.span>{" "}
              </Fragment>
            ))}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-6 max-w-lg space-y-4 text-lg leading-8 text-zinc-300"
          >
            <p>
              I came to Canada as an international student with big dreams,
              limited resources, and no roadmap. I tried different jobs, explored
              different opportunities, and kept searching for a way to build
              financial freedom without trading every hour for money.
            </p>
            <p>
              That&rsquo;s when I discovered digital income. Today, I&rsquo;m
              helping people create an online income stream using digital
              products, personal branding, and simple systems that actually
              work, even if you&rsquo;re starting from zero.
            </p>
            <p className="font-medium text-white">
              Your background doesn&rsquo;t determine your future. Your next
              decision does.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#what-i-help"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/25 transition-all hover:bg-zinc-900 hover:shadow-[0_8px_45px_rgba(0,0,0,0.7)]"
            >
              Start Your Digital Journey
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

            <motion.a
              href="#my-story"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-none rounded-tl-3xl rounded-br-3xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5 3.5v9l7-4.5-7-4.5Z" />
              </svg>
              My Story
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ---------- Right: visual ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          {/* gradient glow */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-brand-600/40 via-brand-400/30 to-transparent blur-2xl"
          />

          {/* Framed photo */}
          <div className="relative rounded-[2rem] bg-linear-to-br from-white/20 to-white/5 p-[1.5px] shadow-2xl shadow-brand-900/40 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.9rem] ring-1 ring-white/10">
              <video
                ref={videoRef}
                src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Altiora-wallet/hero-video.mp4"
                loop
                playsInline
                preload="auto"
                controls={videoControls}
                onMouseEnter={() => setVideoControls(true)}
                onMouseLeave={() => setVideoControls(false)}
                onTouchStart={() => setVideoControls(true)}
                aria-label="Anisha marketing video"
                className="h-[80vh] w-full object-cover"
              />
              {/* Tap-for-sound (browsers block audio until the first click) */}
              {showUnmute && (
                <button
                  type="button"
                  onClick={enableSound}
                  className="absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/60 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/80"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                    <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" />
                  </svg>
                  Tap for sound
                </button>
              )}

              {/* photo bottom gradient */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-[1.9rem] bg-linear-to-t from-[#060a18]/70 to-transparent"
              />
            </div>
          </div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#my-story"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand-300"
          />
        </span>
      </motion.a>
    </section>
  );
}
