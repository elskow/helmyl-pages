import type { Metadata } from 'next'

import { allPosts } from '@/.contentlayer/generated'
import CONFIG from '@/blog.config'
import Page from './ui'

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata | undefined> {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
        return
    }
    const { title, date: publishedTime, summary: description, slug } = post

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${CONFIG.url}/blog/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    }
}

export default Page
