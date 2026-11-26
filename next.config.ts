import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

// shortcut: static export disables Next.js on-the-fly image optimization, remove output:'export' and unoptimized:true if moving to Vercel/Node runtime
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
