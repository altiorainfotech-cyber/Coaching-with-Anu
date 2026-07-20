"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ShowcaseCards.module.css";
import SpiralBackground from "./SpiralBackground";

type Card = {
  box: string;
  img: string;
  name: string;
  url: string;
};

const GREEN =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-893bc9989a52eba0.png";
const PURPLE =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png";
const BLUE =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-2ebb2b6f93add843.png";
const ORANGE =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-f79c4cc8de2f84ae.png";

const CARDS: Card[] = [
  // Row 1 — original 4 products
  {
    box: "box-1",
    img: GREEN,
    name: "Digital Marketing Crash Challenge to make your first $1000 online",
    url: "https://shop.beacons.ai/anishablueprint/044d21ae-fcee-4c9a-b44d-7e8db8a27a21",
  },
  {
    box: "box-2",
    img: PURPLE,
    name: "Passive Profits Club + My Personal Mentorship",
    url: "https://shop.beacons.ai/anishablueprint/280db6cb-d209-4e6d-a5c3-18d7b9a506f4",
  },
  {
    box: "box-3",
    img: BLUE,
    name: "Passive Profits Club + My Personal Mentorship (Through Insta)",
    url: "https://shop.beacons.ai/anishablueprint/6a1c61ce-61c7-4423-babd-d065f6c4b2a8",
  },
  {
    box: "box-4",
    img: ORANGE,
    name: "Book a 15 mins consultation",
    url: "https://shop.beacons.ai/anishablueprint/5a62fbcf-0927-4e6f-8ab7-614ccff67319",
  },
  // Row 2 — 3 new services
  {
    box: "box-5",
    img: GREEN,
    name: "Turn Canva to Cash — A to Z on how to use it for selling online",
    url: "https://shop.beacons.ai/anishablueprint/10957150-745b-4477-9226-6d8c52ef5a52",
  },
  {
    box: "box-6",
    img: PURPLE,
    name: "90 days content done for you",
    url: "https://shop.beacons.ai/anishablueprint/356ab3f7-956e-421a-aef0-356f146b8f7e",
  },
  {
    box: "box-7",
    img: BLUE,
    name: "In 30 days make your Instagram go viral",
    url: "https://shop.beacons.ai/anishablueprint/0321cd8c-4613-43f9-bd07-4ecc3e85a542",
  },
];

function CardLink({ card }: { card: Card }) {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.box} ${styles[card.box]}`}
    >
      <div className={styles.cover}>
        <span className={styles.name}>{card.name}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.img} alt={card.name} />
      </div>
      <div className={styles.btn}>
        <div />
      </div>
    </a>
  );
}

export default function ShowcaseCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="showcase" className={styles.stage}>
      {/* Generative 3D spiral backdrop */}
      <SpiralBackground />

      {/* Heading */}
      <div className="relative z-10 px-6 pb-12 text-center">
        <h2 className="font-serif text-4xl capitalize leading-tight text-white sm:text-5xl">
          Choose Your{" "}
          <em className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
            Path
          </em>
        </h2>
      </div>

      <div
        ref={ref}
        className={`${styles.container} ${shown ? styles.show : ""}`}
      >
        {CARDS.map((card) => (
          <CardLink key={card.box} card={card} />
        ))}
      </div>
    </section>
  );
}
