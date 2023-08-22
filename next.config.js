/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.shapcab.com',
        port: '',
        pathname: '/*/**',
      }
    ],
  },
  // unoptimized : true,
}

module.exports = nextConfig
