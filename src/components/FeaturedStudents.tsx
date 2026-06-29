"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import styles from "./FeaturedStudents.module.css";
import heera from "../../public/images/Student Results/testi-heera-v13kmUis.jpg";
import jeleesha from "../../public/images/Student Results/testi-jeleesha-Cm5XXcYM.jpg";
import riya from "../../public/images/Student Results/testi-riya-C2-OI_Kc.jpg";
import student from "../../public/images/Student Results/testi-student-CCsZxebU.png";

type Slide = {
  name: string;
  tag: string;
  quote: string;
  author: string;
  bg: string;
  img: StaticImageData;
};

const SLIDES: Slide[] = [
  {
    name: "Jeleesha",
    tag: "Digital Products",
    quote:
      "“I started with zero audience and no idea where to begin. The structured path made all the difference — instead of guessing, I followed the steps in order. Within three months I'd made my first $4,000 selling digital products, all while keeping my day job.”",
    author: "— Jeleesha, course member since 2024",
    bg: "#16233b",
    img: jeleesha,
  },
  {
    name: "Heera",
    tag: "Affiliate Income",
    quote:
      "“I'd wasted almost a year on free videos that left me more confused than when I started. Anu's program finally connected the dots. The community kept me accountable, and now affiliate income covers my rent every single month.”",
    author: "— Heera, building her second income stream",
    bg: "#1f2937",
    img: heera,
  },
  {
    name: "Riya",
    tag: "Content Creator",
    quote:
      "“What changed everything for me was learning to treat this like a real education, not a side hobby. I show up, I do the work, and the results follow. I've grown an engaged audience and landed my first brand deals this year.”",
    author: "— Riya, full-time creator",
    bg: "#2a2440",
    img: riya,
  },
  {
    name: "Aanya",
    tag: "Online Coaching",
    quote:
      "“Coming from a 9-to-5, I never imagined I could build something of my own. The proper structure gave me confidence to start coaching others. Four income streams later, I finally have the freedom I was chasing.”",
    author: "— Aanya, now coaching her own students",
    bg: "#11302b",
    img: student,
  },
];

const SPIN_DUR = 1000;
const AUTOPLAY = 6000;
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
                    ? { backgroundImage: `url(${s.img.src})` }
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
      aria-label="Featured student spotlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`relative outline-none ${styles.carousel}`}
    >
      <span className={styles.label}>Student Spotlights</span>

      <div className={stageCls}>
        <Spinner side="left" active={active} next={next} />
        <Spinner side="right" active={active} next={next} />
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.navBtn}
          aria-label="Previous student"
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
          aria-label="Next student"
          onClick={() => spin(1)}
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  );
}
