import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: [
                '/admin',
                '/api',
                '/_next',
                '/_vercel',
                '/_api',
                '/_admin',
                '/_vercel',
                '/keystatic',
            ],
        },
        sitemap: 'https://helmyl.com/sitemap.xml',
        host: 'https://helmyl.com',
    }
}
