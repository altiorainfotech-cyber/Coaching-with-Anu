"use client";

import { useEffect, useState } from "react";

type Step = {
  step: number;
  icon: string;
  title: string;
  description: string;
};

const PROCESS = {
  title: "What I Help You With",
  subtitle:
    "Tap through each step — the exact skills I teach you to build real online income, from zero to your first sale and beyond.",
  gradientColors: ["#93c5fd", "#3b82f6", "#1d4ed8"],
  steps: [
    {
      step: 1,
      icon: "💰",
      title: "Build digital income streams",
      description:
        "Set up online income streams from scratch — the foundation everything else builds on.",
    },
    {
      step: 2,
      icon: "📦",
      title: "Sell digital products",
      description:
        "Create and sell your own digital products that keep earning while you sleep.",
    },
    {
      step: 3,
      icon: "📈",
      title: "Grow on social media",
      description:
        "Grow a real, engaged audience on social media that turns into buyers.",
    },
    {
      step: 4,
      icon: "✨",
      title: "Build a personal brand",
      description: "Build a personal brand people know, like, and trust.",
    },
    {
      step: 5,
      icon: "🎯",
      title: "Learn digital marketing",
      description:
        "Learn the digital marketing skills that actually drive sales.",
    },
    {
      step: 6,
      icon: "🌊",
      title: "Create multiple streams of income",
      description:
        "Stack multiple income streams so you're never dependent on just one.",
    },
    {
      step: 7,
      icon: "🚀",
      title: "Earn online without needing a huge audience",
      description: "Start earning online — no huge following required.",
    },
  ] as Step[],
};

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const sections = { process: PROCESS };

  // Auto-advance through the steps every second, looping.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveStep((s) => (s >= PROCESS.steps.length ? 1 : s + 1));
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="what-i-help"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 px-4 py-16 text-black sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            {sections.process.title}
          </span>
          <h2 className="mt-6 font-serif text-4xl capitalize leading-[1.1] text-black sm:text-5xl">
            I help beginners learn how to build a{" "}
            <em className="text-brand-600">real online income</em> — from zero,
            step by step.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            {sections.process.subtitle}
          </p>
        </div>

        {/* Wavy Process Line */}
        <div className="relative">
          <div className="relative mb-12 sm:mb-16">
            <svg
              className="h-24 w-full sm:h-32"
              viewBox="0 0 800 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 Q100,20 200,60 T400,60 T600,60 T800,60"
                stroke="rgba(37,99,235,0.15)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,60 Q100,20 200,60 T400,60 T600,60 T800,60"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                pathLength="100"
                strokeDasharray={`${
                  ((activeStep - 1) / (sections.process.steps.length - 1)) * 100
                } 100`}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor={sections.process.gradientColors[0]}
                  />
                  <stop
                    offset="50%"
                    stopColor={sections.process.gradientColors[1]}
                  />
                  <stop
                    offset="100%"
                    stopColor={sections.process.gradientColors[2]}
                  />
                </linearGradient>
              </defs>
            </svg>

            {/* Number Circles */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 md:px-8 lg:px-12">
              {sections.process.steps.map((step) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(step.step)}
                  className={`z-10 h-8 w-8 transform rounded-full text-xs font-bold transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12 sm:text-sm md:h-14 md:w-14 md:text-base ${
                    step.step <= activeStep
                      ? "bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30"
                      : "bg-brand-50 text-zinc-500 ring-1 ring-inset ring-brand-100 hover:bg-brand-100"
                  } ${activeStep === step.step ? "scale-110" : ""}`}
                >
                  {step.step}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Card */}
          <div className="relative mx-auto max-w-4xl">
            {sections.process.steps.map((step) => (
              <div
                key={step.step}
                className={`transition-all duration-500 ${
                  activeStep === step.step
                    ? "translate-y-0 transform opacity-100"
                    : "absolute inset-0 translate-y-4 transform opacity-0"
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 shadow-lg shadow-brand-900/5 sm:p-8 md:p-12">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-brand-100/50 via-brand-50/40 to-brand-100/30" />
                  <div className="relative z-10">
                    <div className="mb-4 flex flex-col items-center gap-4 sm:mb-6 sm:flex-row sm:items-start sm:gap-6">
                      <div className="text-4xl sm:text-6xl">{step.icon}</div>
                      <div className="text-center sm:text-left">
                        <div className="mb-1 text-xs font-semibold text-brand-600 sm:mb-2 sm:text-sm">
                          STEP {step.step.toString().padStart(2, "0")}
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-black sm:mb-2 sm:text-2xl lg:text-3xl">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base text-zinc-600 sm:text-lg md:text-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
