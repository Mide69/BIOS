import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import { ArrowUpRightIcon } from "./Icons";
import { LogoMark } from "./Logo";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface-raised transition hover:border-gold/50"
    >
      <div
        className={`flex h-40 items-center justify-center ${
          post.accent === "gold"
            ? "bg-gradient-to-br from-gold-dark/40 via-surface-raised to-surface-raised"
            : "bg-gradient-to-br from-foreground/10 via-surface-raised to-surface-raised"
        }`}
      >
        <LogoMark className="h-14 w-14 opacity-90" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-gold">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-muted" />
          <span className="text-muted">{formatDate(post.date)}</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition group-hover:text-gold">
          Read more
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
