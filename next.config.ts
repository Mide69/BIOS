import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/news",
        destination: "/resources",
        permanent: true,
      },
      {
        // Slug has no dot in it (blog slugs are dash-separated words).
        // This excludes static assets like /news/rust-1-98.png from
        // matching, so post images keep serving from their real path.
        source: "/news/:slug([^.]+)",
        destination: "/resources/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
