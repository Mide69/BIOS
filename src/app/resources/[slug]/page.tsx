import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { LogoMark } from "@/components/Logo";
import { PostCard } from "@/components/PostCard";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="bg-background">
      <div className="relative overflow-hidden border-b border-border-soft">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-30" />
        <div className="container-page relative py-20">
          <Link
            href="/resources"
            className="text-sm font-semibold text-gold hover:text-gold-light"
          >
            ← Back to Resources
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-gold">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span className="text-muted">{formatDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span className="text-muted">{post.readTime}</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-muted">By {post.author}</p>
        </div>
      </div>

      {post.image && (
        <div className="border-b border-border-soft bg-white">
          <div className="container-page">
            <div className="relative mx-auto aspect-[1200/630] max-w-3xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_18rem]">
        <div className="max-w-2xl space-y-6 text-base leading-relaxed text-foreground/90">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="flex flex-col items-center rounded-2xl border border-border-soft bg-surface-raised p-8 text-center">
            <LogoMark className="h-12 w-12" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Want more like this? Join the BIOS LinkedIn group for
              discussion and updates.
            </p>
            <a
              href={site.linkedinGroup}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light"
            >
              Join on LinkedIn
            </a>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border-soft bg-surface py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold text-foreground">
              More from the community
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
