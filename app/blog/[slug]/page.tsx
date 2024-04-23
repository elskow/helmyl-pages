import LoadingAnimation from '@/components/LoadingAnimation'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const Page = dynamic(() => import('app/blog/[slug]/blog-ui'), {
    ssr: false,
    loading: () => (
        <div className="flex h-[60vh] items-center justify-center">
            <LoadingAnimation />
        </div>
    ),
})

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
            url: `https://helmyl.com/blog/${slug}`,
        },
        twitter: {
            title,
            description,
            card: 'summary_large_image',
        },
    }
}

export default Page
