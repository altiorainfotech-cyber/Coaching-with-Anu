import Reveal from "@/components/Reveal";
import CtaButton from "./CtaButton";
import { CTA_PRIMARY } from "./content";

// Deliberately no countdown timer or invented scarcity. If a real
// registration deadline exists, add it to the copy below.
export default function FinalCTA() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="mx-auto max-w-[800px] rounded-[2rem] border border-wb-accent/50 bg-white px-6 py-14 text-center shadow-[0_24px_60px_-36px_rgba(91,78,130,0.5)] sm:px-12">
        <h2 className="font-(family-name:--font-wb-serif) text-3xl text-balance text-wb-ink sm:text-4xl">
          Don&apos;t Just Save This Page for Later.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-wb-muted">
          Take one small step today. Reserve your free seat and show up ready to
          learn.
        </p>
        <div className="mt-8">
          <CtaButton>{CTA_PRIMARY}</CtaButton>
        </div>
        <p className="mt-4 text-sm text-wb-muted">
          Limited live-session capacity.
        </p>
      </Reveal>
    </section>
  );
}
