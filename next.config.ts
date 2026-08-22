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
        source: "/news/:slug",
        destination: "/resources/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
