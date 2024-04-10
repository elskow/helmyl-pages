'use client'

import React, { useEffect, useMemo, memo } from 'react'
import { useAnimation, m, LazyMotion, domAnimation } from 'framer-motion'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

const ImageBanner = dynamic(() => import('@/components/_blog/ImageBanner'), { ssr: false })
const TagsList = dynamic(() => import('@/components/_blog/TagList'), { ssr: false })
const PostMeta = dynamic(() => import('@/components/_blog/PostMeta'), { ssr: false })
const Article = dynamic(() => import('@/components/_blog/Article'), { ssr: false })

const findPost = (slug: string, posts: any) => posts.find((post: any) => post.slug === slug)

const Page = ({ params }: { params: { slug: string } }) => {
    const post = useMemo(() => findPost(params.slug, allPosts), [params.slug])
    const controls = useAnimation()
    const { theme } = useTheme()

    useEffect(() => {
        controls.start((i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: 'easeOut',
            },
        }))
    }, [controls])

    if (!post) {
        return notFound()
    }

    const banner = post.banner ? <ImageBanner image={post.banner} title={post.title} /> : null

    return (
        <section
            className="mx-auto min-h-screen pb-16 pt-10 lg:max-w-5xl lg:pt-14"
            suppressHydrationWarning
        >
            <LazyMotion features={domAnimation}>
                <div className="space-y-4 pb-5">
                    {banner}
                    <m.h1
                        className="font-newsreader text-4xl font-bold text-primary dark:text-primary"
                        animate={controls}
                        initial={{ opacity: 0 }}
                        custom={0}
                    >
                        {post.title}
                    </m.h1>
                    <m.div
                        className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl"
                        animate={controls}
                        initial={{ opacity: 0 }}
                        custom={1}
                    >
                        {post.summary}
                    </m.div>
                    <m.div animate={controls} initial={{ opacity: 0 }} custom={2}>
                        <TagsList tags={post.tags} />
                    </m.div>
                    <m.div animate={controls} initial={{ opacity: 0 }} custom={3}>
                        <PostMeta date={post.date} readingTime={post.readingTime.text} />
                    </m.div>
                </div>
                <m.div animate={controls} initial={{ opacity: 0 }} custom={4}>
                    <Article body={post.body.code} theme={theme} />
                </m.div>
            </LazyMotion>
        </section>
    )
}

Page.displayName = 'BlogPostPage'
export default memo(Page)
