export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border-soft bg-background">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-gold/15 blur-[110px]" />
      <div className="container-page relative py-20 lg:py-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
