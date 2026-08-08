import Link from "next/link";
import { programs } from "@/data/programs";
import { CompassIcon, ChatIcon, RocketIcon, ArrowUpRightIcon } from "./Icons";

const iconMap = {
  compass: CompassIcon,
  chat: ChatIcon,
  rocket: RocketIcon,
};

export function ProgramsPreview() {
  return (
    <section className="border-b border-border-soft bg-surface py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Programs
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ways to grow with BIOS
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
          >
            View all programs
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = iconMap[program.icon];
            return (
              <div
                key={program.slug}
                className="flex flex-col rounded-2xl border border-border-soft bg-surface-raised p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {program.summary}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
