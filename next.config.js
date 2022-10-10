/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "agroplus-api.herokuapp.com"],
  },
};

module.exports = nextConfig;
