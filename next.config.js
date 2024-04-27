/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: '',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
    webpack: (config, { _ }) => {
        config.optimization.splitChunks = false
        return config
    },
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ]
    },
}

module.exports = withContentlayer(nextConfig)
