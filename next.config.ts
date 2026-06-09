import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" as const } : {}),
  ...(isGithubPages ? { basePath: "/designer-portfolio" } : {}),
  ...(isGithubPages ? { assetPrefix: "/designer-portfolio/" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
