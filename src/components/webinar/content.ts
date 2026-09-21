// All webinar copy and configuration lives here so it can be edited without
// touching any UI code.

export const BRAND = "Coaching with Anisha";
export const SITE_URL = "https://coachingwithanisha.com"; // TODO: confirm production domain

export const WEBINAR = {
  dateLabel: "September 19th",
  timeLabel: "5:00 PM EST (2:00 PM PST)",
  format: "Live Online",
  // Set to an ISO string (e.g. "2026-09-30T17:00:00-05:00") once the date is
  // final. Event structured data is only emitted when this is set.
  startISO: null as string | null,
};

export const CTA_PRIMARY = "SAVE MY FREE SPOT";
export const CTA_SECONDARY = "JOIN THIS FREE LIVE WEBINAR";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What You'll Learn", href: "#learn" },
];

export const LEARNINGS = [
  "I'll tell you exactly where I started, the struggles nobody talks about, and the moment everything clicked for me.",
  "The exact method I used (SPARK METHOD) and still use to build consistent income with digital products.",
  "I'll show you how to pick something that actually sells, even starting from scratch.",
  "You don't need 100K followers. I'll show you how to build the right audience that trusts and buys from you.",
  "You can ask your questions and get answers, live, from me directly.",
];

export const FOR_YOU = [
  "Are sick and tired of doing a 9-5 job..",
  "Want to earn a living without a degree or corporate job",
  "Want to learn a new skill and be part of a community",
  "Want to work from anywhere on your own terms and not be tied to a desk",
];

export const NOT_FOR_YOU = [
  "Are looking for a get rich quick scheme",
  "Don't want to put in the work",
  "Don't want to be part of a community",
  "Are not ready to invest in yourself",
  "Are not committed to changing your life",
];

export const STORY_PARAGRAPHS = [
  "I came to Canada in August 2018 as an international student, an immigrant, and did what almost all of us do. I studied, worked at many different places, and even got my first job as a corporate girl.",
  "Then I went to India to get married, and that's when life hit me with a major problem. My dad had a major stroke, and that's when I hit rock bottom. I soon fell into $50,000 of debt, between the medical expenses and everything else that came with it.",
  "I kept hoping I'd get a better job when I went back to India. That never happened.",
  "That's the point I had to start with social media — and I started learning how to promote digital products online.",
  "I was hoping to make an extra $500, just so I could send that back home to help my parents.",
  "It's been almost 2 years since that day. And I've made well over $200,000, multiple six figures, all from my phone.",
  "It was possible for me because I took action.",
];

export const STORY_QUOTE =
  "And this is possible for you too, by TAKING ACTION.";

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/anishablueprint" },
  { label: "TikTok", href: "#" }, // TODO
  { label: "YouTube", href: "#" }, // TODO
  { label: "LinkedIn", href: "#" }, // TODO
] as const;
