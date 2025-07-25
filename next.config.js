/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cms.liber.consulting",
      },
    ],
  },
};

module.exports = nextConfig;
