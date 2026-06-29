"use client";

import { Fragment, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import anuPhoto from "../../public/heroimage.jpeg";

/** Live canvas constellation — moving nodes connected by lines + cursor pull. */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: P[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(110, Math.max(40, Math.floor((w * h) / 13000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const LINK = 140;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // gentle cursor attraction
        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 160) {
          p.x += (dxm / dm) * 0.5;
          p.y += (dym / dm) * 0.5;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const o = (1 - dist / LINK) * 0.55;
            ctx.strokeStyle = `rgba(96,165,250,${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of nodes) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(191,219,254,0.95)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(96,165,250,0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    if (!reduce) draw();
    else {
      // single static frame for reduced-motion users
      raf = requestAnimationFrame(() => {
        draw();
        cancelAnimationFrame(raf);
      });
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Color orbs */}
      <motion.div
        animate={{ x: [0, 90, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 -top-28 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.55),transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -90, 0], y: [0, 60, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-6 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.45),transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 50, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-28 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.4),transparent_70%)] blur-3xl"
      />

      {/* Live constellation */}
      <ParticleField />

      {/* Sweeping light beams */}
      <motion.div
        animate={{ x: ["-40%", "140%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.5,
        }}
        className="absolute -top-1/2 left-0 h-[200%] w-40 rotate-12 bg-linear-to-r from-transparent via-brand-300/25 to-transparent blur-xl"
      />
      <motion.div
        animate={{ x: ["140%", "-40%"] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2.5,
        }}
        className="absolute -top-1/2 left-0 h-[200%] w-24 -rotate-12 bg-linear-to-r from-transparent via-fuchsia-300/20 to-transparent blur-xl"
      />

      {/* Rotating conic sheen */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.16),transparent_38%,transparent_60%,rgba(168,85,247,0.14),transparent_92%)] blur-2xl"
      />
    </div>
  );
}

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

const AVATARS = [12, 32, 45, 60, 5];

export default function HeroModern() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060a18] px-6 pt-32 pb-20 text-white">
      {/* High-class animated background */}
      <HeroBackground />

      {/* Spotlight + grid + bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/3 h-[80vh] w-[90vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.32),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(96,165,250,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />
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
            Online Business Education by Anu
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
              work&mdash;even if you&rsquo;re starting from zero.
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
              href="#the-program"
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

          {/* Social proof */}
          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {AVATARS.map((id) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={id}
                  src={`https://i.pravatar.cc/80?img=${id}`}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-[#060a18] object-cover shadow-sm ring-1 ring-white/20"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 text-brand-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-zinc-300">
                Loved by <span className="font-semibold text-white">2,000+</span>{" "}
                students
              </p>
            </div>
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
              <Image
                src={anuPhoto}
                alt="Anu, founder of Coaching with Anu"
                placeholder="blur"
                priority
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="h-auto w-full object-cover"
              />
              {/* photo bottom gradient */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-[1.9rem] bg-linear-to-t from-[#060a18]/70 to-transparent"
              />
            </div>
          </div>

          {/* Floating glass card — earnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.7 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -left-5 top-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-2xl shadow-brand-900/40 backdrop-blur-md sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 text-white shadow-lg">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 14l4-4 3 3 6-7" />
                <path d="M13 6h4v4" />
              </svg>
            </span>
            <div>
              <p className="bg-linear-to-r from-brand-200 to-white bg-clip-text text-xl font-bold text-transparent">
                $200K+
              </p>
              <p className="text-xs text-zinc-300">Earned online</p>
            </div>
          </motion.div>

          {/* Floating glass card — income streams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 14, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 0.9 },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -right-4 bottom-12 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-2xl shadow-brand-900/40 backdrop-blur-md sm:-right-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-400 to-brand-600 text-white shadow-lg">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2.5l6.5 3.5v8L10 17.5 3.5 14v-8L10 2.5Z" />
                <path d="M3.7 6L10 9.5 16.3 6M10 9.5v8" />
              </svg>
            </span>
            <div>
              <p className="text-xl font-bold text-white">4</p>
              <p className="text-xs text-zinc-300">Income streams</p>
            </div>
          </motion.div>
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
