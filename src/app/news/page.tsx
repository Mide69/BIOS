import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest announcements, guides, and community spotlights from BIOS, Black In Open Source.",
};

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title="From the community"
        description="Announcements, guides, program updates, and spotlights from BIOS."
      />

      <section className="bg-background py-20">
        <div className="container-page">
          {posts.length === 0 ? (
            <p className="text-muted">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
