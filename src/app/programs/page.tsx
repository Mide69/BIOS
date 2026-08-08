import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { programs } from "@/data/programs";
import { CompassIcon, ChatIcon, RocketIcon, ArrowUpRightIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Mentorship, community events, and visibility programs from BIOS, Black In Open Source.",
};

const iconMap = {
  compass: CompassIcon,
  chat: ChatIcon,
  rocket: RocketIcon,
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Ways to grow with BIOS"
        description="From your first pull request to your first conference talk, our programs meet you where you are."
      />

      <section className="bg-background py-20">
        <div className="container-page space-y-8">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon];
            return (
              <div
                key={program.slug}
                className="grid gap-8 rounded-3xl border border-border-soft bg-surface-raised p-8 lg:grid-cols-[auto_1fr] lg:items-start lg:p-12"
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-4xl font-bold text-border-soft lg:mt-2">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {program.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {program.summary}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
                  <Link
                    href="/join"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
                  >
                    Get involved
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border-soft bg-surface py-20">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Have an idea for a new program?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            BIOS is community-built. If there&apos;s a program, event, or
            initiative you&apos;d like to see, tell us in the LinkedIn group.
          </p>
          <a
            href={site.linkedinGroup}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light"
          >
            Share it on LinkedIn
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
