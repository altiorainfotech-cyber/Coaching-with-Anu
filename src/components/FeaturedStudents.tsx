"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./FeaturedStudents.module.css";

type Slide = {
  name: string;
  tag: string;
  quote: string;
  author: string;
  bg: string;
  img: string;
};

const SLIDES: Slide[] = [
  {
    name: "Build Freedom",
    tag: "Beyond Income",
    quote:
      "“Don't just build income. Build freedom. The goal isn't just to make more money, it's about something bigger than the numbers.”",
    author: "It starts with a bigger why",
    bg: "#16233b",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "More Time",
    tag: "Time Freedom",
    quote:
      "“It's to create a life where your income isn't tied to your time, where earning no longer costs you every hour of your day.”",
    author: "Earn without trading every hour",
    bg: "#1f2937",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "More Choices",
    tag: "On Your Terms",
    quote:
      "“Where you have more choices, the freedom to decide how, when, and where you live, work, and travel.”",
    author: "Your life, your rules",
    bg: "#2a2440",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
];

const SPIN_DUR = 1000;
const AUTOPLAY = 5000;
const pad = (n: number) => String(n).padStart(2, "0");

function ChevronUp() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 10l5-5 5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 6l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner({
  side,
  active,
  next,
}: {
  side: "left" | "right";
  active: number;
  next: number | null;
}) {
  const cls = [styles.spinner, side === "right" ? styles.right : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls}>
      {SLIDES.map((s, i) => {
        const faceCls = [
          styles.face,
          i === active ? styles.active : "",
          i === next ? styles.next : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div key={s.name} className={faceCls}>
            <div className={styles.content} style={{ backgroundColor: s.bg }}>
              <div
                className={styles.cLeft}
                style={
                  side === "left"
                    ? { backgroundImage: `url(${s.img})` }
                    : undefined
                }
              >
                <h1>
                  {s.name}
                  <br />
                  <span>{s.tag}</span>
                </h1>
              </div>
              <div className={styles.cRight}>
                <div className={styles.cMain}>
                  <p>{s.quote}</p>
                  <p>{s.author}</p>
                </div>
                <h3 className={styles.cIndex}>{pad(i + 1)}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FeaturedStudents() {
  const len = SLIDES.length;
  const [active, setActive] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [dir, setDir] = useState<"fwd" | "bwd" | null>(null);
  const [noTrans, setNoTrans] = useState(false);
  const [paused, setPaused] = useState(false);

  const lock = useRef(false);
  const activeRef = useRef(0);

  const spin = useCallback(
    (inc: number) => {
      if (lock.current || !inc) return;
      lock.current = true;
      const cur = activeRef.current;
      const n = (((cur + inc) % len) + len) % len;

      setNext(n);
      setDir(inc > 0 ? "fwd" : "bwd");

      window.setTimeout(() => {
        setNoTrans(true);
        activeRef.current = n;
        setActive(n);
        setNext(null);
        setDir(null);
        window.setTimeout(() => {
          setNoTrans(false);
          lock.current = false;
        }, 80);
      }, SPIN_DUR);
    },
    [len],
  );

  const goTo = (i: number) => spin(i - activeRef.current);

  // Respect reduced-motion: no autoplay.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
    }
  }, []);

  // Autoplay (pauses on hover/focus and when reduced-motion).
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => spin(1), AUTOPLAY);
    return () => window.clearInterval(id);
  }, [paused, spin]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      spin(-1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      spin(1);
    }
  };

  const stageCls = [
    styles.stage,
    dir === "fwd" ? styles.spinFwd : "",
    dir === "bwd" ? styles.spinBwd : "",
    noTrans ? styles.noTrans : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id="student-spotlights"
      aria-roledescription="carousel"
      aria-label="Build freedom"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`relative outline-none ${styles.carousel}`}
    >
      <span className={styles.label}>The Bigger Picture</span>

      <div className={stageCls}>
        <Spinner side="left" active={active} next={next} />
        <Spinner side="right" active={active} next={next} />
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.navBtn}
          aria-label="Previous"
          onClick={() => spin(-1)}
        >
          <ChevronUp />
        </button>

        <div className={styles.dots}>
          {SLIDES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-label={`Go to ${s.name}`}
              aria-current={i === active}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.navBtn}
          aria-label="Next"
          onClick={() => spin(1)}
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  );
}
