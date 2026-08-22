import Link from "next/link";
import { getLatestPosts } from "@/lib/posts";
import { PostCard } from "./PostCard";
import { ArrowUpRightIcon } from "./Icons";

export function NewsPreview() {
  const posts = getLatestPosts(3);

  return (
    <section className="border-b border-border-soft bg-surface py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Resources
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From the community
            </h2>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
          >
            View all resources
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
