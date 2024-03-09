import { Suspense, lazy } from 'react'
import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import { slug } from 'github-slugger'
import { MdxRenderer } from '@/components/_blog/Mdx'

import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

const FormatDate = dynamic(() => import('@/components/_blog/FormatDate'))
const ImageBanner = dynamic(() => import('@/components/_blog/ImageBanner'))
const Toc = lazy(() => import('@/components/_blog/TableOfContents'))

const findPost = (slug, posts) => posts.find((post) => post.slug === slug)

export default function Page({ params }: { params: { slug: string } }) {
    const post = findPost(params.slug, allPosts)
    if (!post) {
        return notFound()
    }

    return (
        <section className="mx-auto px-2 pb-16 pt-10 lg:max-w-5xl lg:pt-14">
            <div className="space-y-4 pb-5">
                <Suspense
                    fallback={<div style={{ height: 200 }} className="animate-pulse bg-gray-200" />}
                >
                    {post.banner && <ImageBanner image={post.banner} title={post.title} />}
                </Suspense>
                <h1 className="font-newsreader text-4xl font-bold text-primary dark:text-primary">
                    {post.title}
                </h1>
                <div className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl">
                    {post.summary}
                </div>
                <ul className="mb-4 flex select-none flex-wrap">
                    <div className="text-sm font-medium text-primary dark:text-primary md:text-base">
                        Tags: &nbsp;
                    </div>
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
            <article className="text-pretty prose-md js-toc-content prose flex min-h-full w-full min-w-full flex-col font-sans prose-code:prose-sm dark:prose-invert sm:prose-lg sm:prose-code:prose-sm md:prose-lg md:prose-h2:prose-xl md:prose-code:prose-base lg:prose-lg lg:prose-h2:prose-2xl lg:prose-code:prose-base prose-p:text-black prose-code:font-code dark:prose-p:text-white lg:max-w-6xl lg:flex-row lg:space-x-4">
                <div className="lg:w-3/4">
                    <MdxRenderer code={post.body.code} />
                </div>
                <div className="hidden lg:block lg:w-1/4 lg:pl-4">
                    <Toc />
                </div>
            </article>
        </section>
    )
}
