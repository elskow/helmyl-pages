'use client'

import ContentPost from '@/page-module/blog/post/Content.post'
import HeaderPost from '@/page-module/blog/post/Header.post'
import { allPosts } from 'contentlayer/generated'
import { useAnimation } from 'framer-motion'
import { useTheme } from 'next-themes'
import { notFound } from 'next/navigation'
import { memo, useEffect, useMemo } from 'react'

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

    if (!post) return notFound()

    return (
        <>
            <HeaderPost post={post} controls={controls} />
            <ContentPost body={post.body.code} theme={theme} controls={controls} />
        </>
    )
}

Page.displayName = 'BlogPostPage'
export default memo(Page)
