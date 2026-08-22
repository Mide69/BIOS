"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/lib/posts";
import { PostCard } from "./PostCard";

type Props = {
  posts: Post[];
  categories: string[];
  years: number[];
};

export function NewsList({ posts, categories, years }: Props) {
  const [category, setCategory] = useState<string>("All");
  const [year, setYear] = useState<string>("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesYear =
        year === "All" || new Date(post.date).getFullYear().toString() === year;
      return matchesCategory && matchesYear;
    });
  }, [posts, category, year]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("All")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
              category === "All"
                ? "bg-gold text-black"
                : "border border-border-soft text-muted hover:border-gold/50 hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                category === c
                  ? "bg-gold text-black"
                  : "border border-border-soft text-muted hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted">
          Year
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="rounded-lg border border-border-soft bg-surface-raised px-3 py-1.5 text-sm text-foreground focus:border-gold focus:outline-none"
          >
            <option value="All">All</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-muted">
          No posts match those filters. Try a different category or year.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
