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
    },
}

module.exports = withContentlayer(nextConfig)
