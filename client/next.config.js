/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    ],
  },
  async rewrites() {
    return [
      {
        source: '/article/most-shipped-items-from-tamilnadu-to-:country',
        destination: '/article/most-shipped-items-from-tamilnadu-to/:country',
      },
    ]
  },
};

module.exports = nextConfig;
