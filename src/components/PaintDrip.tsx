"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-driven "paint drip" backdrop.
 *
 * Blue paint streaks hang from the top edge, each with a soft vertical gradient
 * and a rounded droplet at its tip. The drips lengthen as the section scrolls
 * up through the viewport (driven by scroll position, not a timer), so the
 * paint appears to slowly run down the page as you read.
 */

const COLORS = [
  "37, 99, 235", // brand-600
  "59, 130, 246", // brand-500
  "29, 78, 216", // brand-700
  "96, 165, 250", // brand-400
];

type Drip = {
  x: number;
  width: number;
  maxLen: number; // fraction of height (0..1)
  delay: number; // scroll progress before it starts falling
  alpha: number;
  phase: number; // wobble phase
  wob: number; // wobble amplitude
  color: string;
};

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export default function PaintDrip({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let drips: Drip[] = [];
    let ticking = false;

    const buildDrips = () => {
      drips = [];
      const gap = 46; // average horizontal spacing
      const count = Math.max(8, Math.floor(w / gap));
      for (let i = 0; i < count; i++) {
        const jitter = (Math.random() - 0.5) * gap * 0.8;
        drips.push({
          x: (w / count) * (i + 0.5) + jitter,
          width: 4 + Math.random() * 9,
          maxLen: 0.3 + Math.random() * 0.55,
          delay: Math.random() * 0.18,
          alpha: 0.1 + Math.random() * 0.14,
          phase: Math.random() * Math.PI * 2,
          wob: 2 + Math.random() * 5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const render = (progress: number) => {
      ctx.clearRect(0, 0, w, h);

      // faint paint band the drips hang from
      const band = ctx.createLinearGradient(0, 0, 0, 14);
      band.addColorStop(0, "rgba(37, 99, 235, 0.10)");
      band.addColorStop(1, "rgba(37, 99, 235, 0)");
      ctx.fillStyle = band;
      ctx.fillRect(0, 0, w, 14);

      for (const d of drips) {
        const t = clamp01((progress - d.delay) / (1 - d.delay));
        const len = t * d.maxLen * h;
        if (len <= 1) continue;

        // streak with soft top → saturated tip gradient
        const grad = ctx.createLinearGradient(0, 0, 0, len);
        grad.addColorStop(0, `rgba(${d.color}, 0.04)`);
        grad.addColorStop(1, `rgba(${d.color}, ${d.alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = d.width;
        ctx.lineCap = "round";

        ctx.beginPath();
        const steps = Math.max(2, Math.floor(len / 12));
        let tipX = d.x;
        for (let i = 0; i <= steps; i++) {
          const yy = (len * i) / steps;
          const xx = d.x + Math.sin(yy / 48 + d.phase) * d.wob;
          tipX = xx;
          if (i === 0) ctx.moveTo(xx, yy);
          else ctx.lineTo(xx, yy);
        }
        ctx.stroke();

        // droplet bulb swelling at the tip
        ctx.beginPath();
        ctx.fillStyle = `rgba(${d.color}, ${d.alpha + 0.04})`;
        ctx.arc(tipX, len, d.width * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    /**
     * Scroll progress: starts as the section enters (its top reaching the
     * middle of the viewport) and reaches 1 once it has scrolled through, so
     * the paint begins running down early and keeps falling as you read.
     */
    const scrollProgress = () => {
      const parent = canvas.parentElement;
      if (!parent) return 0;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = Math.max(1, rect.height - vh);
      return clamp01((vh * 0.5 - rect.top) / (vh * 0.5 + travel));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        render(scrollProgress());
      });
    };

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
      buildDrips();
      render(scrollProgress());
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
