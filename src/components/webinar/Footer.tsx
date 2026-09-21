import { BRAND, SOCIALS } from "./content";

const ICONS: Record<string, string> = {
  Instagram:
    "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  TikTok:
    "M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.8 5.8 0 1 0 4.9 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5Z",
  YouTube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  LinkedIn:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z",
};

export default function Footer() {
  return (
    <footer className="border-t border-wb-primary/10 bg-wb-bg px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="font-(family-name:--font-wb-serif) text-2xl text-wb-primary">
            {BRAND}
          </p>
          <nav aria-label="Footer" className="flex gap-8 text-sm font-medium text-wb-muted">
            {["Privacy Policy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="transition hover:text-wb-primary">
                {l}
              </a>
            ))}
          </nav>
          <ul className="flex gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-full bg-wb-soft text-wb-primary transition hover:bg-wb-primary hover:text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-wb-accent"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                    <path d={ICONS[s.label]} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 border-t border-wb-primary/10 pt-8 text-center">
          <p className="text-sm text-wb-muted">
            © 2026 {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
