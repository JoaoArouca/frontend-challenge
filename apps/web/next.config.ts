import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@frontend-challenge/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
}

export default nextConfig
