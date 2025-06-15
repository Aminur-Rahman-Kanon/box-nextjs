import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [new URL('https://boxdelabonita.com/api/products/**')]
  }
};

export default nextConfig;
