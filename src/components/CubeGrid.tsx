"use client";

import type { CSSProperties } from "react";
import styles from "./CubeGrid.module.css";

// Ripple delay per concentric ring out from the grid center.
const DELAYS = [0, 0.4, 0.8, 1.0, 1.4];

const TOPS = Array.from({ length: 100 }, (_, idx) => {
  const row = Math.floor(idx / 10);
  const col = idx % 10;
  const ring = Math.max(Math.abs(row - 4.5), Math.abs(col - 4.5));
  return {
    top: row * 50,
    left: col * 50,
    delay: DELAYS[Math.min(Math.floor(ring), DELAYS.length - 1)],
  };
});

export default function CubeGrid({ className }: { className?: string }) {
  return (
    <div className={`${styles.container} ${className ?? ""}`} aria-hidden>
      <div className={styles.inner}>
        {TOPS.map((t, i) => (
          <figure
            key={i}
            className={styles.top}
            style={
              {
                top: t.top,
                left: t.left,
                "--delay": `${t.delay}s`,
              } as CSSProperties
            }
          >
            <figure className={`${styles.face} ${styles.face1}`} />
            <figure className={`${styles.face} ${styles.face2}`} />
            <figure className={`${styles.face} ${styles.face3}`} />
            <figure className={`${styles.face} ${styles.face4}`} />
            <figure className={`${styles.face} ${styles.face5}`} />
          </figure>
        ))}
      </div>
    </div>
  );
}
