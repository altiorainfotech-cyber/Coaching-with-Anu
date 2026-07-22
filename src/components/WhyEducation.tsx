"use client";

import Reveal from "./Reveal";
import VantaBirds from "./VantaBirds";

export default function WhyEducation() {
  return (
    <section
      id="why-education-matters"
      className="relative scroll-mt-24 overflow-hidden bg-[#060a18] py-28 text-white sm:py-36"
    >
      {/* Vanta birds — live flocking background (demo-accurate, full strength) */}
      <VantaBirds className="absolute inset-0 h-full w-full" />

      {/* Soft scrim to keep copy readable over the flock */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,8,26,0.6),transparent_72%)]"
      />

      {/* Light-blue corner glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-400/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal direction="up" className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 shadow-sm">
            Why Education Matters
          </span>
          <h2 className="mt-6 font-serif text-4xl capitalize leading-[1.1] text-white sm:text-6xl">
            Feeling Overwhelmed by All the{" "}
            <em className="bg-linear-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
              Information Online?
            </em>
          </h2>
          <div className="mt-8 space-y-5 text-left text-lg leading-8 text-white">
            <p>
              We live in a world where information is everywhere. Every day,
              there&apos;s a new course, a new strategy, a new &ldquo;secret&rdquo;
              to making money online. One person tells you to start Amazon,
              another says dropshipping, someone else says crypto, trading,
              affiliate marketing, or digital products.
            </p>
            <p>
              With unlimited resources comes unlimited confusion. I know exactly
              how that feels because I&apos;ve been there. When I first came to
              Canada, I spent countless hours watching videos, reading posts, and
              trying to figure out what was actually real and what was just
              another internet trend. The hardest part wasn&apos;t finding
              information&mdash;
              <span className="font-semibold text-white">
                it was knowing who to trust.
              </span>
            </p>
            <p>
              That&apos;s why I created this platform. I&apos;m here to simplify
              the process, cut through the noise, and guide you step by step. No
              overwhelming jargon. No unrealistic promises. Just a clear roadmap
              that helps you understand digital income, build the right skills,
              and take action with confidence.
            </p>
            <p>
              You don&apos;t need to learn everything. You just need to learn{" "}
              <span className="font-semibold text-white">
                the right things&mdash;from someone who&apos;s already walked the
                path.
              </span>
            </p>
          </div>
        </Reveal>

        {/* Transition line */}
        <Reveal
          direction="up"
          className="mx-auto mt-10 max-w-4xl text-center text-base text-zinc-400"
        >
          No structure. No sequence. No accountability. Every creator teaches
          something different — and you end up{" "}
          <span className="font-medium text-white">
            more confused than when you started.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
