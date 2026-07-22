"use client";

import Reveal from "./Reveal";
import styles from "./ProductsBento.module.css";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

type Product = {
  img: string;
  label: string;
  url: string;
};

const PRODUCTS: Product[] = [
  {
    img: u("1460925895917-afdab827c52f"),
    label: "Digital Marketing Challenge",
    url: "https://shop.beacons.ai/anishablueprint/044d21ae-fcee-4c9a-b44d-7e8db8a27a21",
  },
  {
    img: u("1579621970563-ebec7560ff3e"),
    label: "Passive Profits Club",
    url: "https://shop.beacons.ai/anishablueprint/280db6cb-d209-4e6d-a5c3-18d7b9a506f4",
  },
  {
    img: u("1611262588024-d12430b98920"),
    label: "Passive Profits via Insta",
    url: "https://shop.beacons.ai/anishablueprint/6a1c61ce-61c7-4423-babd-d065f6c4b2a8",
  },
  {
    img: u("1558655146-9f40138edfeb"),
    label: "Turn Canva to Cash",
    url: "https://shop.beacons.ai/anishablueprint/10957150-745b-4477-9226-6d8c52ef5a52",
  },
  {
    img: u("1499750310107-5fef28a66643"),
    label: "90 Days Content",
    url: "https://shop.beacons.ai/anishablueprint/356ab3f7-956e-421a-aef0-356f146b8f7e",
  },
  {
    img: u("1516251193007-45ef944ab0c6"),
    label: "Instagram Viral in 30 Days",
    url: "https://shop.beacons.ai/anishablueprint/0321cd8c-4613-43f9-bd07-4ecc3e85a542",
  },
  {
    img: u("1600880292203-757bb62b4baf"),
    label: "15-min Consultation",
    url: "https://shop.beacons.ai/anishablueprint/5a62fbcf-0927-4e6f-8ab7-614ccff67319",
  },
];

export default function ProductsBento() {
  return (
    <section
      id="choose-your-path"
      className={`${styles.section} relative scroll-mt-24 overflow-hidden py-24 text-white sm:py-32`}
    >
      {/* Floating lights */}
      <div className={styles.lights} aria-hidden>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span
            key={n}
            className={`${styles.light} ${styles[`x${n}`]}`}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl capitalize leading-[1.1] text-white sm:text-5xl">
            Choose Your{" "}
            <em className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
              Path
            </em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-300">
            Explore my programs and mentorships, from making your first $1000
            online to building a brand that scales. Pick the one that matches
            where you are right now.
          </p>
        </Reveal>

        {/* Circular product tiles */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.label} direction="up" delay={0.15 + i * 0.12}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.pulse} group flex flex-col items-center text-center`}
                style={{ animationDelay: `${1.6 + i * 1.15}s` }}
              >
                <span className="flex aspect-square w-full max-w-[9rem] items-center justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 transition-shadow duration-300 group-hover:ring-brand-300/60 group-hover:shadow-xl group-hover:shadow-brand-500/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <span className="mt-4 max-w-[10rem] text-base font-bold leading-snug text-white transition-colors group-hover:text-brand-300">
                  {p.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTA, after the products */}
        <Reveal direction="up" className="mt-16 text-center">
          <a
            href="https://beacons.ai/anishablueprint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#eaeaea] px-7 py-3 text-base font-semibold text-[#202134] shadow-lg transition-all duration-300 hover:scale-[0.98] hover:bg-brand-200"
          >
            Explore All Programs
          </a>
        </Reveal>
      </div>
    </section>
  );
}
