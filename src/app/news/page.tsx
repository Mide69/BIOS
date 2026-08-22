import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { NewsList } from "@/components/NewsList";
import { getAllPosts, getAllCategories, getAllYears } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest announcements, guides, and community spotlights from BIOS, Black In Open Source.",
};

export default function NewsPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const years = getAllYears();

  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title="From the community"
        description="Announcements, guides, program updates, and spotlights from BIOS, latest first."
      />

      <section className="bg-background py-20">
        <div className="container-page">
          {posts.length === 0 ? (
            <p className="text-muted">No posts yet. Check back soon.</p>
          ) : (
            <NewsList posts={posts} categories={categories} years={years} />
          )}
        </div>
      </section>
    </>
  );
}
