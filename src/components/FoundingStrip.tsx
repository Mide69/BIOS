import { site } from "@/lib/site";

const items = [
  { label: "Founded", value: new Date(site.foundedDate).getFullYear().toString() },
  { label: "Community", value: "Global" },
  { label: "Membership", value: "Free" },
  { label: "Spirit", value: "100% Open Source" },
];

export function FoundingStrip() {
  return (
    <section className="border-b border-border-soft bg-surface">
      <div className="container-page grid grid-cols-2 divide-x divide-border-soft py-10 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="px-4 text-center first:pl-0 last:pr-0">
            <div className="font-display text-2xl font-bold text-gold sm:text-3xl">
              {item.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
