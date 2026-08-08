import Link from "next/link";
import { LogoMark } from "./Logo";
import { ArrowUpRightIcon } from "./Icons";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border-soft bg-background">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-14rem] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-gold-dark/20 blur-[120px]" />

      <div className="container-page relative grid gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div>
          <div className="inline-flex animate-fade-in-up items-center gap-3 rounded-full bg-gold/10 px-6 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
            <span className="animate-shimmer-gold font-display text-sm font-bold uppercase tracking-[0.2em] sm:text-base">
              Black In Open Source
            </span>
          </div>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Amplifying{" "}
            <span className="text-gradient-gold">Black Excellence</span> in
            Open Source
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            BIOS connects, supports, and amplifies Black developers,
            engineers, architects, contributors, maintainers, students, and
            technology leaders building the future of open source, together.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.linkedinGroup}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light"
            >
              Join the Community
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-soft px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold"
            >
              Explore Programs
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
            <span>Free to join</span>
            <span className="h-1 w-1 rounded-full bg-border-soft" />
            <span>Global &amp; remote-first</span>
            <span className="h-1 w-1 rounded-full bg-border-soft" />
            <span>Open to all experience levels</span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
          <div className="relative w-full rounded-3xl border border-border-soft bg-surface-raised p-8 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border-soft pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-dark" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-light" />
              <span className="ml-2 font-mono text-xs text-muted">
                bios/community.sh
              </span>
            </div>
            <div className="mt-5 flex justify-center">
              <LogoMark className="h-28 w-28" />
            </div>
            <div className="mt-6 space-y-2.5 font-mono text-xs text-muted">
              <p>
                <span className="text-gold">$</span> git clone community
              </p>
              <p>
                <span className="text-gold">$</span> npm run mentorship
              </p>
              <p>
                <span className="text-gold">$</span> git commit -m
                &quot;you belong here&quot;
              </p>
              <p className="text-gold">✓ Welcome to BIOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
