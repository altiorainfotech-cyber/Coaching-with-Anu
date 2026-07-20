"use client";

import type { CSSProperties } from "react";
import styles from "./SpiralBackground.module.css";

// Ported from the SCSS generative spiral (length 100 -> 101 items, half = 50).
const BASE = 55; // vmin
const HALF = 50;
const GAP_SIZE = BASE / HALF; // 1.1
const GAP_DIST = (BASE / 100) * 1.75; // 0.9625
const DELAY = 2.5 / HALF; // 0.05s

type Item = { size: number; delay: number; dist: number };

const ITEMS: Item[] = [];
for (let i = 1; i <= HALF; i++) {
  ITEMS.push({ size: BASE - GAP_SIZE * (i - 1), delay: DELAY * i, dist: GAP_DIST * i });
}
for (let i = 1; i <= HALF; i++) {
  ITEMS.push({ size: BASE - GAP_SIZE * (i - 1), delay: DELAY * i, dist: -GAP_DIST * i });
}
ITEMS.push({ size: BASE, delay: 0, dist: 0 }); // last child

export default function SpiralBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${styles.perspective} ${className ?? ""}`} aria-hidden>
      <div className={styles.section}>
        <ul className={styles.list}>
          {ITEMS.map((it, i) => {
            const style = {
              "--size": `${it.size}vmin`,
              "--size-a": `${it.size * 0.5}vmin`,
              "--size-b": `${it.size * 0.25}vmin`,
              "--delay": `${it.delay}s`,
              "--dist": `${it.dist}vmin`,
            } as CSSProperties;
            return <li key={i} className={styles.item} style={style} />;
          })}
        </ul>
      </div>
    </div>
  );
}
