'use client'

import ContentPost from '@/page-module/blog/post/Content.post'
import HeaderPost from '@/page-module/blog/post/Header.post'
import { Slide } from '@/page-transition/Slide'
import { allPosts } from 'contentlayer/generated'
import { domAnimation, LazyMotion, m, useAnimation, useScroll } from 'framer-motion'
import { useTheme } from 'next-themes'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'

const findPost = (slug: string, posts: any) => posts.find((post: any) => post.slug === slug)

const Page = ({ params }: { params: { slug: string } }) => {
    const post = findPost(params.slug, allPosts)

    const { scrollYProgress } = useScroll()

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
        <section className="mx-auto mb-10 mt-2 min-h-screen w-full justify-center space-y-8 md:mt-4 lg:max-w-5xl">
            <LazyMotion features={domAnimation}>
                <m.div
                    className={`z-10 fixed top-0 left-0 right-0 h-1 bg-green-500`}
                    style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                />
            </LazyMotion>

            <Slide>
                <HeaderPost post={post} controls={controls} />
            </Slide>
            <Slide>
                <ContentPost body={post.body.code} theme={theme} controls={controls} />
            </Slide>
        </section>
    )
}

Page.displayName = 'BlogPostPage'
export default Page