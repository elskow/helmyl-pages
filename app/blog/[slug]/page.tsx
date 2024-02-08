import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { allPosts } from '@/.contentlayer/generated'
import CONFIG from '@/blog.config'

import FormatDate from '@/components/FormatDate'
import { MdxRenderer } from '@/components/Mdx'

import { slug } from 'github-slugger'
import ImageBanner from '@/components/ImageBanner'

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata | undefined> {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
        return
    }
    const { title, date: publishedTime, summary: description, slug } = post

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
            card: 'summary_large_image',
            title,
            description,
        },
    }
}

export default function Page({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post.slug === params.slug)

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
