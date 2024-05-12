/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: "/app",
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
}

module.exports = nextConfig