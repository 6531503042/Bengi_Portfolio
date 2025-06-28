// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: [
      "github.com",
      "raw.githubusercontent.com",
      "res.cloudinary.com",
      "agroindustry.mfu.ac.th",
    ],
    unoptimized: true,
  },
  // Ensure proper handling of Three.js
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    return config;
  },
};

module.exports = nextConfig;
