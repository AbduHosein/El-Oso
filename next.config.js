/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd1fdloi71mui9q.cloudfront.net',
            port: '',
            pathname: '/ySGT2CqZSJWEMocihDqK_8Cvo6Q1EQqlVH718/**',
          },
        ],
      },
}

module.exports = nextConfig
