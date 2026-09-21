import Reveal from "@/components/Reveal";
import CtaButton from "./CtaButton";

export default function CtaStrip() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[2rem] bg-wb-primary px-6 py-14 text-center text-white sm:px-12">
        <div
          aria-hidden
          className="absolute -top-24 -right-16 size-72 rounded-full bg-wb-secondary/40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-16 size-64 rounded-full bg-wb-accent/20 blur-3xl"
        />
        <div className="relative">
          <h2 className="font-(family-name:--font-wb-serif) text-3xl text-balance sm:text-5xl">
            Ready to Learn How It Works?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
            Reserve your free seat and join the next live training.
          </p>
          <div className="mt-8">
            <CtaButton variant="gold">YES — SAVE MY FREE SPOT</CtaButton>
          </div>
          <p className="mt-4 text-sm text-white/70">No payment required.</p>
        </div>
      </Reveal>
    </section>
  );
}
