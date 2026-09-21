// All webinar copy and configuration lives here so it can be edited without
// touching any UI code.

export const BRAND = "Coaching with Anisha";
export const SITE_URL = "https://coachingwithanisha.com"; // TODO: confirm production domain

export const WEBINAR = {
  dateLabel: "September XX, 2026", // TODO: replace with the real date
  timeLabel: "5:00 PM EST",
  format: "Live Online",
  // Set to an ISO string (e.g. "2026-09-30T17:00:00-05:00") once the date is
  // final. Event structured data is only emitted when this is set.
  startISO: null as string | null,
};

export const CTA_PRIMARY = "RESERVE MY FREE SPOT";
export const CTA_SECONDARY = "JOIN THE FREE WEBINAR";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What You'll Learn", href: "#learn" },
  { label: "FAQ", href: "#faq" },
];

export type IconName = "calendar" | "lightbulb" | "message";

export interface InfoCard {
  icon: IconName;
  title: string;
  description: string;
}

export const INFO_CARDS: InfoCard[] = [
  {
    icon: "calendar",
    title: "Live Training",
    description:
      "Join the session live and follow the complete framework step by step.",
  },
  {
    icon: "lightbulb",
    title: "Practical Strategy",
    description:
      "Learn actionable methods you can apply instead of just consuming information.",
  },
  {
    icon: "message",
    title: "Live Q&A",
    description: "Get your questions answered during the live session.",
  },
];

export const LEARNINGS = [
  {
    title: "Find Your Digital Offer",
    description:
      "Understand how to turn your knowledge, skills, or experience into an offer people can actually understand and buy.",
  },
  {
    title: "Choose the Right Audience",
    description:
      "Learn how to identify a specific audience and understand the problem they are already looking to solve.",
  },
  {
    title: "Build Without a Huge Following",
    description:
      "Discover how focused content and the right audience can matter more than simply chasing follower counts.",
  },
  {
    title: "Create a Simple Sales Journey",
    description:
      "Understand the basic journey from content to trust to offer to customer.",
  },
  {
    title: "Turn Knowledge Into Action",
    description:
      "Leave with a practical framework you can use to start taking your first steps.",
  },
];

export const FOR_YOU = [
  "You want to learn how online businesses work",
  "You have a skill, idea, or experience you could turn into an offer",
  "You want to explore digital products",
  "You are tired of consuming information without taking action",
  "You want more flexibility in how you work",
  "You are willing to learn and experiment",
];

export const NOT_FOR_YOU = [
  "You are looking for instant results",
  "You expect a guaranteed income",
  "You are unwilling to learn or take action",
  "You want someone else to build everything for you",
  "You are not interested in building a real skill",
];

export const STORY_PARAGRAPHS = [
  "Starting something new online can feel overwhelming.",
  "There are countless platforms, strategies, tools, and opinions competing for your attention.",
  "I started by learning one step at a time — understanding how content works, how audiences make decisions, and how digital products can solve real problems.",
  "This webinar brings together the lessons, frameworks, and practical steps that helped me move from confusion to clarity.",
];

export const STORY_QUOTE =
  "You don't need to know everything before you begin. You need a clear next step.";

export const BEFORE = [
  "Not sure what to sell",
  "Unsure who to target",
  "Overwhelmed by online business",
  "Consuming too much information",
  "No clear next step",
];

export const AFTER = [
  "Clearer business direction",
  "Better understanding of your audience",
  "Simple digital-product framework",
  "Practical next steps",
  "Confidence to start testing your idea",
];

// PLACEHOLDER testimonials — replace with real, permission-approved quotes
// before launch. Set `verified: true` on real ones.
export const TESTIMONIALS = [
  {
    quote: "Finally, someone explained the process without making it feel complicated.",
    name: "Sarah M.",
    verified: false,
  },
  {
    quote: "I came in with an idea and left knowing what I should work on first.",
    name: "Jessica R.",
    verified: false,
  },
  {
    quote:
      "The training helped me understand the difference between simply posting online and actually building an offer.",
    name: "Maya K.",
    verified: false,
  },
];

export const FAQS = [
  {
    q: "Is the webinar really free?",
    a: "Yes. Registration for the live webinar is free.",
  },
  {
    q: "How long is the webinar?",
    a: "The live training is designed to be concise and practical, with additional time for questions.",
  },
  {
    q: "Do I need previous experience?",
    a: "No. The training is designed for beginners and people exploring online business.",
  },
  {
    q: "Do I need a large social media following?",
    a: "No. The webinar focuses on understanding your audience, creating useful offers, and building a simple online strategy.",
  },
  {
    q: "Will there be a replay?",
    a: "If a replay is available, registered attendees will receive details by email.",
  },
  {
    q: "Can I ask questions?",
    a: "Yes. There will be a live Q&A portion during the session.",
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/anishablueprint" },
  { label: "TikTok", href: "#" }, // TODO
  { label: "YouTube", href: "#" }, // TODO
  { label: "LinkedIn", href: "#" }, // TODO
] as const;

export const DISCLAIMER =
  "Educational content only. Results vary based on individual circumstances, implementation, market conditions, and other factors. No specific income or business outcome is guaranteed.";
