"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { CTA_PRIMARY, WEBINAR } from "./content";

type Status = "idle" | "loading" | "success";
type Errors = Partial<Record<"firstName" | "email" | "consent" | "form", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "mt-2 block min-h-14 w-full rounded-2xl border-2 bg-white px-5 text-base text-wb-ink placeholder:text-wb-muted/60 transition focus:border-wb-accent focus:outline-none focus:ring-4 focus:ring-wb-accent/30 aria-[invalid=true]:border-red-500";

export default function Registration() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const firstName = String(form.get("firstName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const consent = form.get("consent") === "on";

    const next: Errors = {};
    if (!firstName) next.firstName = "Please enter your first name.";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (!consent) next.consent = "Please agree to receive webinar updates.";
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget
        .querySelector<HTMLElement>("[aria-invalid=true]")
        ?.focus();
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/webinar/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, consent }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("idle");
      setErrors({ form: "Something went wrong. Please try again in a moment." });
    }
  }

  const details = [
    ["DATE", WEBINAR.dateLabel],
    ["TIME", WEBINAR.timeLabel],
    ["FORMAT", WEBINAR.format],
  ];

  return (
    <section
      id="register"
      aria-labelledby="register-title"
      className="relative scroll-mt-16 overflow-hidden bg-wb-deep px-4 py-24 text-white sm:px-6"
    >
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-wb-primary/50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-wb-accent">
            FREE REGISTRATION
          </p>
          <h2
            id="register-title"
            className="font-(family-name:--font-wb-serif) text-4xl leading-[1.08] text-balance sm:text-6xl"
          >
            Your Next Step Starts Here
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Reserve your free seat for the next live webinar.
          </p>
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {details.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold tracking-[0.22em] text-wb-accent">
                  {k}
                </dt>
                <dd className="mt-1 font-(family-name:--font-wb-serif) text-lg leading-tight">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-[2rem] bg-white p-6 text-wb-ink shadow-2xl sm:p-10">
          {status === "success" ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2
                aria-hidden
                className="mx-auto size-16 text-wb-success"
              />
              <h3 className="mt-5 font-(family-name:--font-wb-serif) text-3xl">
                You&apos;re Registered!
              </h3>
              <p className="mt-2 text-wb-muted">
                Check your inbox for the webinar details.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-busy={status === "loading"}>
              <div>
                <label htmlFor="firstName" className="text-sm font-semibold">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Your first name"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-err" : undefined}
                  className={`${inputClass} border-wb-soft`}
                />
                {errors.firstName && (
                  <p id="firstName-err" role="alert" className="mt-2 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-err" : undefined}
                  className={`${inputClass} border-wb-soft`}
                />
                {errors.email && (
                  <p id="email-err" role="alert" className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-wb-muted">
                  <input
                    type="checkbox"
                    name="consent"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-err" : undefined}
                    className="mt-0.5 size-5 shrink-0 accent-wb-primary focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-wb-accent"
                  />
                  I agree to receive webinar and related email updates.
                </label>
                {errors.consent && (
                  <p id="consent-err" role="alert" className="mt-2 text-sm text-red-600">
                    {errors.consent}
                  </p>
                )}
              </div>

              {errors.form && (
                <p role="alert" className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-700">
                  {errors.form}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-wb-primary px-8 text-sm font-semibold tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-wb-deep focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-wb-accent disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 aria-hidden className="size-4 animate-spin" />
                    RESERVING…
                  </>
                ) : (
                  CTA_PRIMARY
                )}
              </button>
              <p className="mt-4 text-center text-xs text-wb-muted">
                Free registration. You can unsubscribe from emails at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
