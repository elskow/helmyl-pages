'use client'

import React, { useEffect, useMemo, memo } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

const ImageBanner = dynamic(() => import('@/components/_blog/ImageBanner'), { ssr: false })
const TagsList = dynamic(() => import('@/app/blog/[slug]/tag-list'), { ssr: false })
const PostMeta = dynamic(() => import('@/app/blog/[slug]/post-meta'), { ssr: false })
const Article = dynamic(() => import('@/app/blog/[slug]/article'), { ssr: false })

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
            <div className="space-y-4 pb-5">
                {banner}
                <motion.h1
                    className="font-newsreader text-4xl font-bold text-primary dark:text-primary"
                    animate={controls}
                    initial={{ opacity: 0 }}
                    custom={0}
                >
                    {post.title}
                </motion.h1>
                <motion.div
                    className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl"
                    animate={controls}
                    initial={{ opacity: 0 }}
                    custom={1}
                >
                    {post.summary}
                </motion.div>
                <motion.div animate={controls} initial={{ opacity: 0 }} custom={2}>
                    <TagsList tags={post.tags} />
                </motion.div>
                <motion.div animate={controls} initial={{ opacity: 0 }} custom={3}>
                    <PostMeta date={post.date} readingTime={post.readingTime.text} />
                </motion.div>
            </div>
            <motion.div animate={controls} initial={{ opacity: 0 }} custom={4}>
                <Article body={post.body.code} theme={theme} />
            </motion.div>
        </section>
    )
}

Page.displayName = 'BlogPostPage'
export default memo(Page)
