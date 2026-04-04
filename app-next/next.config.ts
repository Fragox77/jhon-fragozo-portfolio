import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Sin output:'export' — Vercel corre Next.js nativo (SSR + API routes + Image Optimization)
  // Sin basePath — el dominio propio es la raíz
};

export default nextConfig;
