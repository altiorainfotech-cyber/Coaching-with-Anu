"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "./content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-20 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-[800px]">
        <SectionHeading id="faq-title" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `${base}-panel-${i}`;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-wb-primary/10 bg-white transition-shadow data-[open=true]:shadow-[0_16px_40px_-24px_rgba(91,78,130,0.5)]"
                data-open={isOpen}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left text-lg font-semibold text-wb-ink focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-wb-accent"
                  >
                    {f.q}
                    <Plus
                      aria-hidden
                      className={`size-5 shrink-0 text-wb-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-wb-muted">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
