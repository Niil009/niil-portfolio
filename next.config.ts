import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static portfolio — component-level caching caused stale dev renders, and
     isn't needed here, so it's disabled. */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
