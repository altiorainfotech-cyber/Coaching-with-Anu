import styles from "./ShowcaseCards.module.css";

type Card = {
  box: string;
  img: string;
  name: string;
  url: string;
};

const CARDS: Card[] = [
  {
    box: "box-1",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-893bc9989a52eba0.png",
    name: "How Digital Marketing works in simple words",
    url: "https://shop.beacons.ai/anishablueprint/044d21ae-fcee-4c9a-b44d-7e8db8a27a21",
  },
  {
    box: "box-2",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png",
    name: "Passive Profits Club + My Personal Mentorship",
    url: "https://shop.beacons.ai/anishablueprint/280db6cb-d209-4e6d-a5c3-18d7b9a506f4",
  },
  {
    box: "box-3",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-2ebb2b6f93add843.png",
    name: "Passive Profits Club + My Personal Mentorship (Through Insta)",
    url: "https://shop.beacons.ai/anishablueprint/6a1c61ce-61c7-4423-babd-d065f6c4b2a8",
  },
  {
    box: "box-4",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-f79c4cc8de2f84ae.png",
    name: "Book a 15 mins consultation",
    url: "https://shop.beacons.ai/anishablueprint/5a62fbcf-0927-4e6f-8ab7-614ccff67319",
  },
];

export default function ShowcaseCards() {
  return (
    <section id="showcase" className={styles.stage}>
      {/* Distinct animated backdrop */}
      <div className={styles.bg} aria-hidden>
        <div className={styles.sheen} />
        <span className={`${styles.orb} ${styles.orb1}`} />
        <span className={`${styles.orb} ${styles.orb2}`} />
        <span className={`${styles.orb} ${styles.orb3}`} />
        <span className={`${styles.orb} ${styles.orb4}`} />
        <span className={`${styles.beam} ${styles.beam1}`} />
        <span className={`${styles.beam} ${styles.beam2}`} />
        <span className={`${styles.particle} ${styles.p1}`} />
        <span className={`${styles.particle} ${styles.p2}`} />
        <span className={`${styles.particle} ${styles.p3}`} />
        <span className={`${styles.particle} ${styles.p4}`} />
        <span className={`${styles.particle} ${styles.p5}`} />
        <div className={styles.dots} />
        <div className={styles.vignette} />
      </div>

      <div className={styles.container}>
        {CARDS.map((card) => (
          <a
            key={card.box}
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
        ))}
      </div>
    </section>
  );
}
