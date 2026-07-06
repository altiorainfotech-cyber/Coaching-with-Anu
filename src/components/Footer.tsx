const NAV = [
  { label: "About Me", href: "#my-story" },
  { label: "Why Education Matters", href: "#why-education-matters" },
  { label: "What I Help You With", href: "#the-program" },
  { label: "My Promise", href: "#proof-it-works" },
  { label: "Who This Is For", href: "#multiple-income-streams" },
  { label: "The Bigger Picture", href: "#student-spotlights" },
];

const INSTAGRAM = "https://instagram.com/anishaxsidhu";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060a18] text-white">
      {/* Light-blue corner glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-brand-300/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1.6fr] md:gap-16">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="text-2xl font-semibold tracking-tight text-white"
              aria-label="Anisha Blueprint — home"
            >
              anisha <span className="text-brand-300">blueprint</span>
            </a>
            <p className="mt-3 text-xs font-medium text-white/80">
              From international student to digital entrepreneur.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
              Structured online business education with a real mentor — so you
              stop guessing and start building multiple income streams.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:border-white/40 hover:bg-white/15"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.05 1.8.25 2.2.42.6.2 1 .47 1.4.9.43.4.7.8.9 1.4.17.4.37 1 .42 2.2.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.05 1.2-.25 1.8-.42 2.2-.2.6-.47 1-.9 1.4-.4.43-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.2-1-.47-1.4-.9-.43-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.05-1.2.25-1.8.42-2.2.2-.6.47-1 .9-1.4.4-.43.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.7-.32.31-.52.62-.7 1.05-.12.3-.28.8-.32 1.7C3.2 9.5 3.2 9.9 3.2 12s0 2.5.07 3.7c.04.9.2 1.4.32 1.7.17.43.37.74.7 1.06.31.32.62.52 1.05.7.3.12.8.28 1.7.32 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.17.74-.37 1.06-.7.32-.31.52-.62.7-1.05.12-.3.28-.8.32-1.7.07-1.2.07-1.6.07-3.7s0-2.5-.07-3.7c-.04-.9-.2-1.4-.32-1.7a2.85 2.85 0 0 0-.7-1.06 2.85 2.85 0 0 0-1.05-.7c-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4Zm0 3.05A4.95 4.95 0 1 1 12 17a4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.15-3.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </svg>
              @Anishaxsidhu
            </a>
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/70">
          © 2026 Online Business Coaching with Anisha ·{" "}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white transition-colors hover:text-white/80"
          >
            @Anishaxsidhu
          </a>
        </div>
      </div>
    </footer>
  );
}
