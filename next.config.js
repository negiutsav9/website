/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains: ['firebasestorage.googleapis.com']
    },
    headers: () => [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ],
  }
