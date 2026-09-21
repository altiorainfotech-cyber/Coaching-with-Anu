import { BRAND, NAV_LINKS } from "./content";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wb-primary/10 bg-wb-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="font-(family-name:--font-wb-serif) text-lg text-wb-primary sm:text-xl"
        >
          {BRAND}
        </a>
        <nav
          aria-label="Webinar sections"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-wb-muted transition hover:text-wb-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#register"
          className="inline-flex min-h-11 items-center rounded-full bg-wb-primary px-5 text-xs font-semibold tracking-[0.1em] whitespace-nowrap text-white transition hover:bg-wb-deep focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-wb-accent"
        >
          <span className="sm:hidden">RESERVE</span>
          <span className="hidden sm:inline">RESERVE MY SPOT</span>
        </a>
      </div>
    </header>
  );
}
