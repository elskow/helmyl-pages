import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import CONFIG from 'blog.config'
import dynamic from 'next/dynamic'
import { memo } from 'react'

const Page = dynamic(() => import('app/blog/[slug]/blog-ui'), { ssr: false })
const MemoizedPage = memo(Page)

export async function generateStaticParams() {
    return allPosts.map(({ slug }) => ({
        slug: slug.split('/').join('%2F'),
    }))
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata | undefined> {
    const post = allPosts.find((post) => post.slug === slug)
    if (!post) {
        return
    }
    const { title, date: publishedTime, summary: description } = post

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
