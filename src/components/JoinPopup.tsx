"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { CloseIcon, ArrowUpRightIcon } from "./Icons";
import { site } from "@/lib/site";

const STORAGE_KEY = "bios_join_popup_dismissed_at";
const RESHOW_AFTER_DAYS = 14;
const SHOW_DELAY_MS = 1800;

export function JoinPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissedAt = localStorage.getItem(STORAGE_KEY);
    if (dismissedAt) {
      const elapsedDays =
        (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60 * 24);
      if (elapsedDays < RESHOW_AFTER_DAYS) return;
    }

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="relative w-full max-w-sm animate-fade-in-up rounded-2xl border border-border-soft bg-surface-raised p-8 text-center shadow-2xl shadow-black/50">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 text-muted transition hover:text-foreground"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
          <LogoMark className="h-8 w-8" />
        </div>

        <h2
          id="join-popup-title"
          className="mt-5 font-display text-xl font-bold text-foreground"
        >
          Join the BIOS Community
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Connect with Black developers, engineers, and technologists
          building, contributing, and leading in open source. Our LinkedIn
          Group is where the conversation happens.
        </p>

        <a
          href={site.linkedinGroup}
          target="_blank"
          rel="noreferrer"
          onClick={dismiss}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold-light"
        >
          Join the LinkedIn Group
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-border-soft" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted">
            Or subscribe
          </span>
          <span className="h-px flex-1 bg-border-soft" />
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          Get program launches and community news in your inbox instead.
        </p>
        <div className="mt-3">
          <NewsletterForm variant="stacked" />
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="mt-4 text-xs font-medium text-muted transition hover:text-foreground"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
