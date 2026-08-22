import postsData from "@/data/posts.json";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  accent: "gold" | "white";
  image?: string;
  content: string[];
};

const posts = postsData as Post[];

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(count: number): Post[] {
  return getAllPosts().slice(0, count);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((p) => p.category))).sort();
}

export function getAllYears(): number[] {
  return Array.from(
    new Set(posts.map((p) => new Date(p.date).getFullYear()))
  ).sort((a, b) => b - a);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
