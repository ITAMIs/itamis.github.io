/** @type {import('next').NextConfig} */
const withReactSnap = require("react-snap").default;
const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
