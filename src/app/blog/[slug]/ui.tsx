import React, { useMemo, memo } from 'react'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

const ImageBanner = dynamic(() => import('@/components/_blog/ImageBanner'), { ssr: false })
const TagsList = dynamic(() => import('@/app/blog/[slug]/tag-list'), { ssr: false })
const PostMeta = dynamic(() => import('@/app/blog/[slug]/post-meta'), { ssr: false })
const Article = dynamic(() => import('@/app/blog/[slug]/article'), { ssr: false })

const findPost = (slug: string, posts: any) => posts.find((post: any) => post.slug === slug)

const Page = ({ params }: { params: { slug: string } }) => {
    const post = useMemo(() => findPost(params.slug, allPosts), [params.slug])

    if (!post) {
        return notFound()
    }

    const banner = post.banner ? <ImageBanner image={post.banner} title={post.title} /> : null

    return (
        <section className="mx-auto pb-16 pt-10 lg:max-w-5xl lg:pt-14" suppressHydrationWarning>
            <div className="space-y-4 pb-5">
                {banner}
                <h1 className="font-newsreader text-4xl font-bold text-primary dark:text-primary">
                    {post.title}
                </h1>
                <div className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl">
                    {post.summary}
                </div>
                <TagsList tags={post.tags} />
                <PostMeta date={post.date} readingTime={post.readingTime.text} />
            </div>
            <Article body={post.body.code} />
        </section>
    )
}

Page.displayName = 'BlogPostPage'
export default memo(Page)
