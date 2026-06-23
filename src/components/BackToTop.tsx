"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-none rounded-tl-2xl rounded-br-2xl bg-black text-white shadow-xl shadow-black/30 ring-1 ring-inset ring-white/15 transition-colors hover:bg-zinc-900 sm:bottom-8 sm:right-8"
        >
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 16V5M5 10l5-5 5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
