import { X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { NOT_FOR_YOU } from "./content";

export default function NotForSection() {
  return (
    <section aria-labelledby="not-for" className="px-4 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-[900px] rounded-[2rem] bg-wb-deep px-6 py-14 text-white sm:px-14">
        <h2
          id="not-for"
          className="font-(family-name:--font-wb-serif) text-3xl leading-tight text-balance sm:text-5xl"
        >
          THIS MAY NOT BE FOR YOU IF...
        </h2>
        <p className="mt-3 text-white/70">
          We&apos;d rather be honest now than have you join for the wrong
          reasons.
        </p>
        <ul className="mt-8 grid gap-3">
          {NOT_FOR_YOU.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-white/15 text-wb-accent">
                <X aria-hidden className="size-4" strokeWidth={3} />
              </span>
              <span className="text-lg leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
