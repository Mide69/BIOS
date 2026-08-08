import Link from "next/link";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { SocialIcon } from "./Icons";
import { navLinks, socialLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo showTagline />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-foreground/80 transition hover:border-gold hover:text-gold"
              >
                <SocialIcon icon={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Community
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={site.linkedinGroup}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition hover:text-gold"
              >
                LinkedIn Group
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition hover:text-gold"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted transition hover:text-gold"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Stay in the loop
          </h3>
          <p className="mt-5 text-sm text-muted">
            Get program launches, mentorship openings, and community spotlights
            in your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="mt-5">
            <NewsletterForm variant="stacked" />
          </div>
        </div>
      </div>

      <div className="border-t border-border-soft">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>© {year} BIOS - Black In Open Source. All rights reserved.</p>
          <p>Built by and for the community.</p>
        </div>
      </div>
    </footer>
  );
}
