import { pillars } from "@/data/pillars";
import { BookIcon, CodeIcon, NetworkIcon, CompassIcon, RocketIcon, StarIcon } from "./Icons";

const iconMap = {
  book: BookIcon,
  code: CodeIcon,
  network: NetworkIcon,
  compass: CompassIcon,
  rocket: RocketIcon,
  star: StarIcon,
};

export function Pillars() {
  return (
    <section className="border-b border-border-soft bg-background py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            What we stand for
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Six pillars driving everything we build
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We don&apos;t just want more Black people using open source. We
            want more Black people building it, contributing to it,
            maintaining it, and leading it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-border-soft bg-surface-raised p-7 transition hover:border-gold/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
