'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import FormatDate from '@/components/FormatDate'
import { MdxRenderer } from '@/components/Mdx'

import { slug } from 'github-slugger'
import ImageBanner from '@/components/ImageBanner'

export default function Page({ params }: { params: { slug: string } }) {
    const [isLoading, setIsLoading] = useState(true)
    const post = allPosts.find((post) => post.slug === params.slug)

    useEffect(() => {
        if (post) {
            setIsLoading(false)
        }
    }, [post])

    if (isLoading) {
        return (
            <section className="mx-auto space-y-6 px-2 pb-16 pt-10 lg:max-w-5xl lg:pt-14">
                <div className="space-y-4 border-b border-gray-200 pb-5 dark:border-gray-700">
                    <motion.div
                        style={{ height: 200 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.h1
                        className="font-newsreader text-4xl font-bold"
                        style={{ background: '#eee', height: '1em' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.p
                        className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl"
                        style={{ background: '#eee', height: '1em' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.div
                        className="pt-2 text-sm text-[#858585]"
                        style={{ background: '#eee', height: '1em' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </div>
            </section>
        )
    }

    if (!post) {
        notFound()
    }

    return (
        <section className="mx-auto space-y-6 px-2 pb-16 pt-10 lg:max-w-5xl lg:pt-14">
            <div className="space-y-4 border-b border-gray-200 pb-5 dark:border-gray-700">
                {post.banner && <ImageBanner image={post.banner} title={post.title} />}
                <h1 className="font-newsreader text-4xl font-bold">{post.title}</h1>
                <p className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl">
                    {post.summary}
                </p>
                <ul className="mb-4 flex select-none flex-wrap">
                    <p className="text-sm font-medium text-primary dark:text-primary md:text-base">
                        Tags: &nbsp;
                    </p>
                    {post.tags?.map((tag) => (
                        <li
                            className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 text-xs font-medium capitalize text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 md:text-sm"
                            key={tag}
                            title={slug(tag)}
                        >
                            <Link className="px-2" href={`/tags/${slug(tag)}`}>
                                {slug(tag)}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="pt-2 text-sm text-[#858585]">
                    <span>
                        <FormatDate dateString={post.date} />
                    </span>
                    <span className="mx-2">·</span>
                    <span>{post.readingTime.text}</span>
                </div>
            </div>
            <article className="rose-code:font-code text-pretty prose-code:line-height-1.5 prose prose-sm min-h-full w-full min-w-full space-y-5 dark:prose-invert sm:prose-base md:prose-lg prose-code:text-sm prose-code:tracking-wide sm:prose-code:text-base md:prose-code:text-lg">
                <MdxRenderer code={post.body.code} />
            </article>
        </section>
    )
}
