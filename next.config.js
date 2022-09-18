/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com", "d3wo5wojvuv7l.cloudfront.net"],
  },
};

module.exports = nextConfig;
