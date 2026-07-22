"use client";

import Reveal from "./Reveal";
import styles from "./MultipleIncomeStreams.module.css";

type Stream = {
  name: string;
  icon: React.ReactNode;
};

const STREAMS: Stream[] = [
  {
    name: "Affiliate Marketing",
    icon: (
      <>
        <path d="M8 12a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-1 1" />
        <path d="M12 8a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l1-1" />
      </>
    ),
  },
  {
    name: "UGC Content Creation",
    icon: (
      <>
        <rect x="3" y="5" width="10" height="10" rx="2" />
        <path d="M13 9l4-2v6l-4-2" />
      </>
    ),
  },
  {
    name: "Paid Brand Collaborations",
    icon: (
      <>
        <path d="M10 2.5l1.8 1.5 2.3-.2.6 2.2 1.9 1.3-1 2.1 1 2.1-1.9 1.3-.6 2.2-2.3-.2L10 17.5l-1.8-1.5-2.3.2-.6-2.2L3.4 12.4l1-2.1-1-2.1 1.9-1.3.6-2.2 2.3.2L10 2.5Z" />
        <path d="M7.8 10l1.6 1.6L13 8" />
      </>
    ),
  },
  {
    name: "AI Assistants & Chatbots",
    icon: (
      <>
        <path d="M4 5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8l-4 3V6a1 1 0 0 1 1-1Z" />
        <path d="M8 9h6M8 11.5h3" />
      </>
    ),
  },
  {
    name: "Selling on TikTok Shop",
    icon: (
      <>
        <path d="M5.5 7h9l-.8 8.2a1.5 1.5 0 0 1-1.5 1.3H7.8a1.5 1.5 0 0 1-1.5-1.3L5.5 7Z" />
        <path d="M7.5 7a2.5 2.5 0 0 1 5 0" />
      </>
    ),
  },
  {
    name: "Monetising Facebook",
    icon: (
      <path d="M6 9v8H3.5V9H6Zm0 0 2.7-5.4A1.8 1.8 0 0 1 11 5.2V8h4a1.4 1.4 0 0 1 1.4 1.7l-1 5A1.5 1.5 0 0 1 14 16H6" />
    ),
  },
  {
    name: "Getting Clients on LinkedIn",
    icon: (
      <>
        <rect x="3" y="6" width="14" height="10" rx="2" />
        <path d="M7 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M3 10.5h14" />
      </>
    ),
  },
  {
    name: "Copywriting for Brands",
    icon: <path d="M13 3.5l3.5 3.5M4 16l1-3.2 8-8L16.3 8l-8 8L4 16Z" />,
  },
  {
    name: "Digital Products",
    icon: (
      <>
        <path d="M10 2.5l6.5 3.5v8L10 17.5 3.5 14v-8L10 2.5Z" />
        <path d="M3.7 6L10 9.5 16.3 6M10 9.5v8" />
      </>
    ),
  },
  {
    name: "Email Marketing Funnels",
    icon: (
      <>
        <rect x="3" y="5" width="14" height="10" rx="2" />
        <path d="M3.5 6l6.5 5 6.5-5" />
      </>
    ),
  },
  {
    name: "Faceless Content Strategy",
    icon: (
      <>
        <path d="M3 10s2.6-5 7-5c1.4 0 2.6.5 3.6 1.1M17 10s-2.6 5-7 5c-1.4 0-2.6-.5-3.6-1.1" />
        <path d="M8 8a2.8 2.8 0 0 0 4 4M3 3l14 14" />
      </>
    ),
  },
  {
    name: "Canva Design Services",
    icon: (
      <>
        <path d="M10 2.5a7.5 7.5 0 1 0 0 15c.9 0 1.4-.7 1.4-1.4 0-.7-.5-1.1-.5-1.7 0-.6.5-1 1.1-1H14a3.5 3.5 0 0 0 3.5-3.5c0-4-3.4-7.4-7.5-7.4Z" />
        <circle cx="6.5" cy="9" r="0.6" />
        <circle cx="9" cy="6.3" r="0.6" />
        <circle cx="12.5" cy="6.6" r="0.6" />
      </>
    ),
  },
];

const ROW_A = STREAMS.slice(0, 6);
const ROW_B = STREAMS.slice(6);

function Pill({ stream }: { stream: Stream }) {
  return (
    <div className="mr-4 flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full bg-white py-3 pl-3 pr-6 shadow-[0_6px_20px_rgba(15,23,42,0.12)] transition-shadow hover:shadow-[0_10px_28px_rgba(15,23,42,0.18)]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-brand-400 to-brand-600 text-white shadow-md ring-1 ring-inset ring-white/25">
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {stream.icon}
        </svg>
      </span>
      <span className="text-base font-semibold text-zinc-900">
        {stream.name}
      </span>
    </div>
  );
}

export default function MultipleIncomeStreams() {
  return (
    <section
      id="income-streams"
      className="relative scroll-mt-24 overflow-hidden bg-white py-28 text-black sm:py-36"
    >
      {/* Header */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Multiple Income Streams
          </span>
          <h2 className="mt-6 font-serif text-4xl capitalize leading-[1.1] text-black sm:text-6xl">
            I won&apos;t leave you with{" "}
            <em className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              just one way
            </em>{" "}
            to earn
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Most coaches teach one method and leave you there. I teach you
            everything I personally use to build{" "}
            <span className="font-semibold text-black">4 income streams</span>,
            so you&apos;re never dependent on just one source.
          </p>
        </Reveal>
      </div>

      {/* Marquee rows */}
      <div className={`${styles.rows} mt-16 flex flex-col gap-4`}>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...ROW_A, ...ROW_A].map((s, i) => (
              <Pill key={`a-${i}`} stream={s} />
            ))}
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={`${styles.track} ${styles.reverse}`}>
            {[...ROW_B, ...ROW_B].map((s, i) => (
              <Pill key={`b-${i}`} stream={s} />
            ))}
          </div>
        </div>

        {/* Static edge fades (cheaper than masking the animated track) */}
        <div aria-hidden className={styles.fadeLeft} />
        <div aria-hidden className={styles.fadeRight} />
      </div>
    </section>
  );
}
