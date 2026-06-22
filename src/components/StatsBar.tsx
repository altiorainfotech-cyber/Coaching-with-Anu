"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";

type Stat = {
  prefix?: string;
  to?: number; // numeric target for count-up
  suffix?: string;
  display?: string; // non-numeric value (e.g. "1:1")
  label: string;
};

const STATS: Stat[] = [
  { prefix: "$", to: 200, suffix: "K+", label: "Made online" },
  { to: 300, suffix: "+", label: "Students coached" },
  { to: 4, label: "Income streams built" },
  { display: "1:1", label: "Personal mentorship" },
];

function StatValue({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView && stat.to != null) {
      const controls = animate(count, stat.to, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [inView, stat.to, count]);

  return (
    <span
      ref={ref}
      className="bg-linear-to-br from-brand-500 to-brand-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
    >
      {stat.display != null ? (
        stat.display
      ) : (
        <>
          {stat.prefix}
          <motion.span>{rounded}</motion.span>
          {stat.suffix}
        </>
      )}
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function StatsBar() {
  return (
    <section className="border-y border-zinc-100 bg-white py-14">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4"
      >
        {STATS.map((stat, i) => (
          <motion.li
            key={stat.label}
            variants={item}
            className={`flex flex-col items-center text-center ${
              i > 0 ? "md:border-l md:border-zinc-200" : ""
            }`}
          >
            <StatValue stat={stat} />
            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm">
              {stat.label}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
