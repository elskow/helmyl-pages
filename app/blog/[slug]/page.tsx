import ContentSkeletonPost from '@/page-module/blog/post/Content.Skeleton.post'
import HeaderSkeletonPost from '@/page-module/blog/post/Header.Skeleton.post'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const Page = dynamic(() => import('app/blog/[slug]/blog-ui'), {
    ssr: false,
    loading: () => (
        <section className="mx-auto pb-10 pt-6 min-h-screen w-full justify-center space-y-8 md:pt-10 lg:max-w-5xl">
            <HeaderSkeletonPost />
            <ContentSkeletonPost />
        </section>
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
