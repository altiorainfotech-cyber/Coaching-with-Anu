"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NAV_ITEMS = [
  { label: "My Story", href: "#my-story" },
  { label: "Why Education Matters", href: "#why-education-matters" },
  { label: "The Program", href: "#the-program" },
  { label: "Multiple Income Streams", href: "#multiple-income-streams" },
  { label: "Proof It Works", href: "#proof-it-works" },
  { label: "Student Results", href: "#student-spotlights" },
  { label: "Community", href: "#community" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // When the bar is "solid" it shows the white glass background (dark text);
  // otherwise it floats transparently over the dark hero (light text).
  const solid = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          solid
            ? "border-b border-black/5 bg-white/80 shadow-[0_8px_30px_rgb(2,6,23,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/0"
        }`}
      >
        <nav className="mx-auto grid h-18 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8">
          {/* Left — Logo */}
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2.5 justify-self-start"
            aria-label="Coaching with Anu — home"
          >
            <span
              className={`text-lg font-semibold tracking-tight transition-colors ${
                solid ? "text-black" : "text-white"
              }`}
            >
              Coaching{" "}
              <span className={solid ? "text-brand-600" : "text-brand-300"}>
                with Anu
              </span>
            </span>
          </a>

          {/* Center — Menu */}
          <ul className="hidden items-center justify-center gap-1 justify-self-center xl:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    solid
                      ? "text-zinc-600 hover:text-brand-700"
                      : "text-zinc-200 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-brand-500 to-brand-700 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right — CTA + mobile toggle */}
          <div className="flex shrink-0 items-center gap-2 justify-self-end">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden whitespace-nowrap rounded-none rounded-tl-2xl rounded-br-2xl bg-black px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/25 ring-1 ring-inset ring-white/15 transition-all hover:bg-zinc-800 hover:shadow-xl sm:inline-block"
            >
              Join the Program
            </motion.a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors xl:hidden ${
                solid
                  ? "text-black hover:bg-black/5"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-18 z-40 xl:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-4 mt-2 overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-2xl"
            >
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-none rounded-tl-2xl rounded-br-2xl bg-black px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-black/25"
              >
                Join the Program
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
