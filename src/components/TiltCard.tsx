"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

/**
 * Interactive 3D tilt card. Tracks the pointer and rotates the surface in
 * perspective, with an optional light "glare" that follows the cursor.
 * Children placed with `translateZ(...)` float above the surface for real depth.
 */
export default function TiltCard({
  children,
  className,
  intensity = 9,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [intensity, -intensity]),
    spring,
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-intensity, intensity]),
    spring,
  );

  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 55%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative [perspective:1000px] ${className ?? ""}`}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [transform:translateZ(1px)] group-hover:opacity-100"
        />
      )}
    </motion.div>
  );
}
