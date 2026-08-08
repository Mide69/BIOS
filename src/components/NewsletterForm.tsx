"use client";

import { useState } from "react";

type Variant = "inline" | "stacked";

const MAILCHIMP_ACTION = process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ACTION ?? "";
// Mailchimp embedded forms include a hidden honeypot field named "b_<u>_<id>".
// Set NEXT_PUBLIC_MAILCHIMP_HONEYPOT_NAME to that exact field name from your
// Mailchimp embed code so bot submissions get silently dropped.
const HONEYPOT_NAME = process.env.NEXT_PUBLIC_MAILCHIMP_HONEYPOT_NAME ?? "";

export function NewsletterForm({ variant = "inline" }: { variant?: Variant }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const isConfigured = MAILCHIMP_ACTION.length > 0;

  if (!isConfigured) {
    return (
      <form
        className={
          variant === "inline"
            ? "flex flex-col gap-3 sm:flex-row"
            : "flex flex-col gap-3"
        }
        onSubmit={(e) => {
          e.preventDefault();
          setStatus("success");
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full min-w-0 flex-1 rounded-full border border-border-soft bg-surface-raised px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold-light"
        >
          Subscribe
        </button>
        {status === "success" && (
          <p className="text-xs text-gold sm:basis-full" role="status">
            Newsletter form UI is ready. Connect NEXT_PUBLIC_MAILCHIMP_FORM_ACTION
            in .env.local to start collecting real subscribers.
          </p>
        )}
      </form>
    );
  }

  return (
    <form
      action={MAILCHIMP_ACTION}
      method="post"
      target="_blank"
      className={
        variant === "inline"
          ? "flex flex-col gap-3 sm:flex-row"
          : "flex flex-col gap-3"
      }
    >
      <label htmlFor="mce-EMAIL" className="sr-only">
        Email address
      </label>
      <input
        id="mce-EMAIL"
        type="email"
        name="EMAIL"
        required
        placeholder="you@example.com"
        className="w-full min-w-0 flex-1 rounded-full border border-border-soft bg-surface-raised px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
      {HONEYPOT_NAME && (
        <div aria-hidden="true" className="absolute left-[-5000px]">
          <input type="text" name={HONEYPOT_NAME} tabIndex={-1} defaultValue="" />
        </div>
      )}
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold-light"
      >
        Subscribe
      </button>
    </form>
  );
}
