"use client";

import { useEffect, useRef } from "react";

type VantaEffect = { destroy: () => void };
type VantaGlobal = {
  THREE?: unknown;
  VANTA?: { BIRDS: (opts: Record<string, unknown>) => VantaEffect };
};

// Load Three.js r134 + Vanta birds as plain globals (the exact setup the
// Vanta demo uses). This avoids the bundler shipping a second copy of
// Three.js — the cause of the broken/one-wing bird geometry.
const THREE_SRC = "https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js";
const VANTA_SRC =
  "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js";

function loadScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () =>
          reject(new Error(`Failed to load ${src}`)),
        );
      }
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.id = id;
    s.async = true;
    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

export default function VantaBirds({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let effect: VantaEffect | null = null;
    let cancelled = false;
    let fadeTimer = 0;
    let stopTimer = 0;

    (async () => {
      try {
        // Three must be present before Vanta initializes.
        await loadScript(THREE_SRC, "cdn-three-r134");
        await loadScript(VANTA_SRC, "cdn-vanta-birds");
      } catch {
        return;
      }
      const w = window as unknown as VantaGlobal;
      if (cancelled || !ref.current || !w.VANTA?.BIRDS) return;

      // Only ever one flock: clear any leftover canvas from a prior
      // init / hot-reload before creating a new one.
      ref.current.querySelectorAll("canvas").forEach((c) => c.remove());
      ref.current.style.opacity = ""; // reset in case a prior run faded it out
      ref.current.style.transition = "opacity 4s ease-in-out";

      effect = w.VANTA.BIRDS({
        el: ref.current,
        THREE: w.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // Match the hero section background.
        backgroundColor: 0x060a18,
        backgroundAlpha: 1.0,
        color1: 0xff0000,
        color2: 0x00d1ff,
        colorMode: "varianceGradient",
        quantity: 4,
        birdSize: 1.0,
        wingSpan: 30.0,
        speedLimit: 5.0,
        separation: 20.0,
        alignment: 20.0,
        cohesion: 20.0,
      });

      // Fly for ~9s, smoothly fade the flock out over the last 4s, then
      // freeze the loop at 13s.
      fadeTimer = window.setTimeout(() => {
        if (ref.current) ref.current.style.opacity = "0";
      }, 9000);
      stopTimer = window.setTimeout(() => {
        const e = effect as unknown as { req?: number } | null;
        if (e && typeof e.req === "number") cancelAnimationFrame(e.req);
      }, 13000);
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(fadeTimer);
      window.clearTimeout(stopTimer);
      effect?.destroy();
      // Remove any residual canvas so flocks never stack up.
      el.querySelectorAll("canvas").forEach((c) => c.remove());
    };
  }, []);

  return <div ref={ref} aria-hidden className={className} />;
}
