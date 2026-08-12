import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Pillars } from "@/components/Pillars";
import { ArrowUpRightIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why BIOS (Black In Open Source) exists and what we're building for Black technologists in open source.",
};

const audience = [
  "First-time contributors making their first pull request",
  "Maintainers of widely-used open source projects",
  "Engineers, architects, and technical leaders",
  "Students exploring open source for the first time",
  "Conference speakers and community organizers",
  "Anyone passionate about open source",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About BIOS"
        title="Building the community we wish we'd had"
        description="BIOS (Black In Open Source) is a community dedicated to connecting, supporting, and amplifying Black developers, engineers, architects, contributors, maintainers, students, and technology leaders passionate about open source."
      />

      <section className="border-b border-border-soft bg-surface py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Why we exist
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Representation, visibility, and mentorship still need to grow
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Open source has transformed the technology industry, but
                representation, visibility, mentorship, and opportunities for
                Black professionals in the ecosystem still need to grow. Our
                goal is simple: create greater visibility, access,
                collaboration, and opportunity for Black people in open
                source.
              </p>
              <p>
                BIOS is not about creating a separate technology ecosystem.
                It&apos;s about ensuring Black people have a stronger voice
                and presence within the ecosystem that already exists, one
                where we learn from one another, collaborate on projects,
                create opportunities, and help the next generation of Black
                technologists thrive.
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Who it&apos;s for
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
              If you touch open source, you belong here
            </h2>
            <ul className="mt-6 space-y-3">
              {audience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border-soft bg-surface-raised px-4 py-3 text-sm text-foreground/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border-soft bg-background py-20">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Leadership
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Who&apos;s behind BIOS
          </h2>
          <div className="mt-8 flex flex-col items-start gap-6 rounded-2xl border border-border-soft bg-surface-raised p-8 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/40">
              <Image
                src="/team/olamide-kosile.jpg"
                alt={site.founder}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {site.founder}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                Founder &amp; Community Lead
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                Olamide is a Senior AWS Cloud Engineer and cloud security
                leader with 8+ years of experience across government and
                enterprise environments. He&apos;s the founder of Tek Tribe,
                where he runs cloud engineering, cybersecurity, and AI
                mentorship programmes, and holds multiple AWS certifications
                including Solutions Architect Professional. He brings that
                same hands-on, community-first approach to leading BIOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Pillars />

      <section className="bg-background py-20">
        <div className="container-page flex flex-col items-center gap-6 rounded-3xl border border-border-soft bg-surface-raised px-8 py-16 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Ready to build, contribute, and grow with us?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Join the community and invite others who would benefit. Let&apos;s
            increase Black representation in open source, together.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={site.linkedinGroup}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light"
            >
              Join on LinkedIn
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <Link
              href="/join"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-soft px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold"
            >
              More ways to join
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
