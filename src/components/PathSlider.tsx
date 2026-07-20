"use client";

import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import type { ISourceOptions } from "@tsparticles/engine";
import "swiper/css";
import "swiper/css/effect-cube";
import styles from "./PathSlider.module.css";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

type Slide = { img: string; title: string; url: string };

const SLIDES: Slide[] = [
  {
    img: u("1460925895917-afdab827c52f"), // marketing analytics
    title: "Digital Marketing Crash Challenge",
    url: "https://shop.beacons.ai/anishablueprint/044d21ae-fcee-4c9a-b44d-7e8db8a27a21",
  },
  {
    img: u("1579621970563-ebec7560ff3e"), // money / passive income
    title: "Passive Profits Club + Mentorship",
    url: "https://shop.beacons.ai/anishablueprint/280db6cb-d209-4e6d-a5c3-18d7b9a506f4",
  },
  {
    img: u("1611262588024-d12430b98920"), // instagram on phone
    title: "Passive Profits Club (via Instagram)",
    url: "https://shop.beacons.ai/anishablueprint/6a1c61ce-61c7-4423-babd-d065f6c4b2a8",
  },
  {
    img: u("1600880292203-757bb62b4baf"), // consultation / meeting
    title: "Book a 15-min Consultation",
    url: "https://shop.beacons.ai/anishablueprint/5a62fbcf-0927-4e6f-8ab7-614ccff67319",
  },
  {
    img: u("1558655146-9f40138edfeb"), // graphic design / canva
    title: "Turn Canva to Cash",
    url: "https://shop.beacons.ai/anishablueprint/10957150-745b-4477-9226-6d8c52ef5a52",
  },
  {
    img: u("1499750310107-5fef28a66643"), // content creation / laptop
    title: "90 Days Content Done For You",
    url: "https://shop.beacons.ai/anishablueprint/356ab3f7-956e-421a-aef0-356f146b8f7e",
  },
  {
    img: u("1516251193007-45ef944ab0c6"), // social media / phone
    title: "In 30 Days Make Your Instagram Go Viral",
    url: "https://shop.beacons.ai/anishablueprint/0321cd8c-4613-43f9-bd07-4ecc3e85a542",
  },
];

export default function PathSlider() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const particleOptions = useMemo<ISourceOptions>(
    () => ({
      fpsLimit: 60,
      fullScreen: { enable: false },
      background: { color: { value: "#040a22" }, opacity: 0 },
      particles: {
        number: { value: 30, density: { enable: true } },
        color: {
          value: [
            "#3998D0",
            "#2EB6AF",
            "#A9BD33",
            "#FEC73B",
            "#F89930",
            "#F45623",
            "#D62E32",
          ],
        },
        shape: { type: "circle" },
        opacity: { value: 1 },
        size: { value: { min: 4, max: 8 } },
        collisions: { enable: true, mode: "destroy" },
        move: {
          enable: true,
          speed: 7,
          direction: "none",
          straight: false,
          outModes: { default: "out" },
        },
        destroy: {
          mode: "split",
          split: {
            count: 1,
            factor: { value: 5, random: { enable: true, minimumValue: 4 } },
            rate: { value: 10, random: { enable: true, minimumValue: 5 } },
            particles: {
              collisions: { enable: false },
              move: { speed: 7 },
              life: { count: 1, duration: { value: 1 } },
            },
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section id="path-slider" className={styles.section}>
      {engineReady && (
        <Particles
          id="tsparticles-path"
          options={particleOptions}
          className={styles.particles}
        />
      )}

      <div className={styles.content}>
        <h1>
          Choose Your <em>Path</em>
        </h1>
        <p>
          Explore my programs and mentorships — from making your first $1000
          online to building a brand that scales. Swipe through and start right
          where you are.
        </p>
        <a
          href="https://beacons.ai/anishablueprint"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Explore All Programs
        </a>
      </div>

      <Swiper
        className={styles.swiper}
        modules={[EffectCube, Autoplay]}
        effect="cube"
        grabCursor
        loop
        speed={1000}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        autoplay={{ delay: 2600, pauseOnMouseEnter: true }}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <a href={slide.url} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.img} alt={slide.title} />
              <div className={styles.overlay}>
                <h2>{slide.title}</h2>
                <span className={styles.cta}>Get Started →</span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
