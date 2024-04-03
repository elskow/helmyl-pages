import React, { Suspense, lazy, useMemo, memo } from 'react'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

const ImageBanner = dynamic(() => import('@/components/_blog/ImageBanner'), { ssr: false })
const TagsList = lazy(() => import('@/app/blog/[slug]/tag-list'))
const PostMeta = lazy(() => import('@/app/blog/[slug]/post-meta'))
const Article = lazy(() => import('@/app/blog/[slug]/article'))

const findPost = (slug, posts) => posts.find((post) => post.slug === slug)

const Page = ({ params }: { params: { slug: string } }) => {
    const post = useMemo(() => findPost(params.slug, allPosts), [params.slug])

    if (!post) {
        return notFound()
    }

    const banner = post.banner ? <ImageBanner image={post.banner} title={post.title} /> : null

    return (
        <section className="mx-auto pb-16 pt-10 lg:max-w-5xl lg:pt-14">
            <div className="space-y-4 pb-5">
                <Suspense
                    fallback={<div style={{ height: 200 }} className="animate-pulse bg-gray-200" />}
                >
                    {banner}
                </Suspense>
                <h1 className="font-newsreader text-4xl font-bold text-primary dark:text-primary">
                    {post.title}
                </h1>
                <div className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl">
                    {post.summary}
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <TagsList tags={post.tags} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <PostMeta date={post.date} readingTime={post.readingTime.text} />
                </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Article body={post.body.code} />
            </Suspense>
        </section>
    )
}

Page.displayName = 'BlogPostPage'
export default memo(Page)
