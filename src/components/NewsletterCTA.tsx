import { NewsletterForm } from "./NewsletterForm";

export function NewsletterCTA() {
  return (
    <section className="bg-gradient-to-br from-gold-dark via-gold to-gold-light py-20">
      <div className="container-page flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Never miss a program launch or spotlight
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">
            Join the BIOS newsletter for mentorship openings, community news,
            and open source opportunities, straight to your inbox.
          </p>
        </div>
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-black/90 p-2">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
