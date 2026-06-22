"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
};

/**
 * Scroll-triggered reveal. Animates once when ~20% enters the viewport.
 * Honors prefers-reduced-motion automatically via Motion's reducedMotion
 * handling (transform/opacity are skipped when the user opts out).
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
  amount = 0.2,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  amount?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...OFFSET[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}
