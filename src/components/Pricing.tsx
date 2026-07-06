"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

type Plan = {
  option: string;
  name: string;
  desc: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    option: "Option A",
    name: "Regular Program",
    desc: "My full course with everything you need to build your online business — self-paced, structured, and complete.",
    price: "$497",
    note: "From ~$38 CAD/month via Klarna or Afterpay — payments begin month 2",
    features: [
      "Full access to my complete course — all modules",
      "My 5-step formula to building your online business",
      "Digital products, affiliate marketing, email marketing & more",
      "Faceless content strategy & brand building",
      "Lifelong DM support on Instagram",
      "All future updates included",
    ],
    cta: "Get Started — $497 USD",
  },
  {
    option: "Option B",
    name: "With Personal Mentorship",
    desc: "The full course PLUS my personal mentorship for life. For those who want to move faster with direct 1:1 support from me.",
    price: "$597",
    note: "From ~$45 CAD/month via Klarna or Afterpay — payments begin month 2",
    features: [
      "Full access to my complete course — all modules",
      "Personal mentorship from Anu — for life",
      "90-minute (or more) 1-on-1 intro coaching call",
      "Custom business plan built just for you",
      "Access to private WhatsApp community",
      "Access to private Telegram community",
      "Weekly live community calls every Saturday",
      "Lifelong DM support on Instagram",
      "All future updates included",
    ],
    cta: "Join With Mentorship — $597 USD",
    popular: true,
  },
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path
        d="M5 10.5l3.5 3.5L15 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const inner = (
    <div className="flex h-full flex-col rounded-[1.65rem] bg-white p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
        {plan.option}
      </p>
      <h3 className="mt-2 font-serif text-2xl text-black sm:text-3xl">
        {plan.name}
      </h3>
      <p className="mt-3 text-zinc-600">{plan.desc}</p>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="text-5xl font-bold tracking-tight text-black">
          {plan.price}
        </span>
        <span className="mb-1.5 text-sm font-medium text-zinc-500">
          USD · one-time
        </span>
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-xl bg-brand-50 px-3.5 py-2.5 text-sm text-brand-800 ring-1 ring-inset ring-brand-100">
        <span className="mt-0.5 text-brand-500">✦</span>
        {plan.note}
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] text-zinc-700">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-red-500 via-brand-500 to-yellow-400 text-white">
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <motion.a
        href="#pricing"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 inline-flex items-center justify-center rounded-none rounded-tl-3xl rounded-br-3xl bg-black px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/25 ring-1 ring-inset ring-white/15 transition-all hover:bg-zinc-800 hover:shadow-xl"
      >
        {plan.cta}
      </motion.a>

      <a
        href="#pricing"
        className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
      >
        🇨🇦 Canadian payment plan (Klarna/Afterpay) →
      </a>
    </div>
  );

  if (plan.popular) {
    return (
      <div className="relative h-full">
        {/* Most Popular badge */}
        <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-linear-to-br from-brand-600 to-brand-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/40">
          Most Popular
        </span>
        <div className="h-full rounded-[1.75rem] border-2 border-brand-500 bg-white shadow-[0_24px_70px_-24px_rgba(37,99,235,0.5)]">
          {inner}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-[1.75rem] border border-brand-100 bg-white shadow-sm">
      {inner}
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-white to-brand-50/60 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Choose Your Path
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-black sm:text-5xl">
            Two ways to start —{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              both are powerful
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Both options give you access to my full course. Payments start from
            month 2 — so you can begin with breathing room.
          </p>
        </Reveal>

        {/* Plans */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.option} direction="up" delay={i * 0.1} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        {/* Contact */}
        <Reveal
          direction="up"
          className="mt-14 flex items-center justify-center gap-2 text-center text-base text-zinc-600"
        >
          <span>💬 Questions? DM Anu on Instagram</span>
          <a
            href="https://instagram.com/anishaxsidhu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            @Anishaxsidhu
          </a>
        </Reveal>
      </div>
    </section>
  );
}
