import { LogoMark } from "./Logo";

export function MissionQuote() {
  return (
    <section className="border-b border-border-soft bg-background py-24">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-border-soft bg-surface-raised px-8 py-16 text-center">
          <LogoMark className="h-12 w-12" />
          <blockquote className="mt-8 font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            &quot;This is more than a community. It&apos;s where we learn from
            one another, collaborate on projects, create opportunities, and
            help the next generation of Black technologists thrive.&quot;
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold">
            The BIOS Founding Team
          </p>
        </div>
      </div>
    </section>
  );
}
