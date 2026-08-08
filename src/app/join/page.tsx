import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { NewsletterForm } from "@/components/NewsletterForm";
import { LinkedInIcon, FacebookIcon, GithubIcon, ArrowUpRightIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join the BIOS community on LinkedIn, Facebook, and GitHub, or subscribe to our newsletter.",
};

const channels = [
  {
    icon: LinkedInIcon,
    title: "LinkedIn Group",
    description:
      "Our main hub for discussion, opportunities, and community announcements.",
    href: site.linkedinGroup,
    cta: "Join the group",
  },
  {
    icon: FacebookIcon,
    title: "Facebook",
    description: "Follow along and join the conversation on Facebook.",
    href: site.facebook,
    cta: "Follow on Facebook",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    description: "Explore and contribute to the BIOS project on GitHub.",
    href: site.github,
    cta: "View on GitHub",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join Us"
        title="There's a place for you in BIOS"
        description="Join the community and invite others who would benefit. Let's build, contribute, and grow together."
      />

      <section className="bg-background py-20">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-border-soft bg-surface-raised p-8 transition hover:border-gold/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <channel.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {channel.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {channel.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition group-hover:text-gold">
                {channel.cta}
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-border-soft bg-surface py-20">
        <div className="container-page">
          <div className="mx-auto max-w-xl rounded-3xl border border-border-soft bg-surface-raised p-10 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Subscribe to the newsletter
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Program launches, mentorship openings, and community spotlights,
              sent occasionally, never spam.
            </p>
            <div className="mt-7">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border-soft bg-surface-raised p-8">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Want to mentor or be mentored?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sign up for our Mentorship Circles pilot through the LinkedIn
              group. Mentors and mentees both welcome.
            </p>
          </div>
          <div className="rounded-2xl border border-border-soft bg-surface-raised p-8">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Have a question?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Reach us at{" "}
              <a href={`mailto:${site.email}`} className="text-gold">
                {site.email}
              </a>{" "}
              or post directly in the LinkedIn group.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
