import { withContentlayer } from 'next-contentlayer'
import withBundleAnalyzer from '@next/bundle-analyzer'
import withPlaiceholder from '@plaiceholder/next'

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

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

export default bundleAnalyzer(withPlaiceholder(withContentlayer(nextConfig)))