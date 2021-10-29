/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    reactRoot: true,
    serverComponents: true,
    concurrentFeatures: true,
  },
  eslint: {
    // Turns off ESLint during builds because we do it in an
    // earlier CI step
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Turns off type checking during builds becaues we do it in an
    // earlier CI step
    ignoreBuildErrors: true,
  },
};
