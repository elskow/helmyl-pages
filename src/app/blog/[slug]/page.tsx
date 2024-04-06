import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import CONFIG from '../../../../blog.config'
import dynamic from 'next/dynamic'
import { memo } from 'react'

const Page = dynamic(() => import('./ui'))

const MemoizedPage = memo(Page)

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug.split('/').join('%2F'),
    }))
}

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
            title,
            description,
            card: 'summary_large_image',
        },
    }
}

export default MemoizedPage
