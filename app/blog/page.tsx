import { allPosts } from '@/.contentlayer/generated'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useMemo } from 'react'

const PostCard = dynamic(() => import('@/components/_blog/PostCard'))

export const metadata: Metadata = {
    title: 'Blog',
}

const posts = allPosts
    .filter((post) => post.draft !== true)
    .sort((a, b) => b.date.localeCompare(a.date))

const MemoizedPostCard = React.memo(PostCard)

const Blog = () => {
    const tags = useMemo(() => {
        return posts
            .map((post) => post.tags)
            .flat()
            .filter((value, index, self) => {
                return self.indexOf(value) === index
            })
    }, [])

    if (posts.length === 0) {
        return (
            <PageLayout>
                <div className="flex min-h-[60vh] flex-col items-center justify-center pt-28 text-center">
                    <h1 className="font-bold">Author has not written any posts yet.</h1>
                    <p>Please check back later.</p>
                </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <ul className="mx-auto mb-10 mt-10 w-full justify-center space-y-8 lg:max-w-5xl">
                <div className="space-y-3">
                    <h1 className="font-newsreader text-4xl font-bold lg:text-5xl">Blog</h1>
                    <p className="font-light lg:text-lg">
                        I write about software development, productivity, and other topics that
                        interest me.
                    </p>
                </div>
                <ul className="mb-4 flex select-none flex-wrap border-b border-gray-200 pb-5 dark:border-gray-700">
                    {tags.slice(0, 2).map((tag) => (
                        <li
                            key={tag}
                            className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 text-sm font-medium capitalize text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 md:text-base"
                        >
                            <Link className="px-2" href={`/tags/${tag}`}>
                                {tag}
                            </Link>
                        </li>
                    ))}
                    {tags.length > 2 && (
                        <li>
                            <Link
                                href="/tags"
                                className="mb-2 mr-2 rounded bg-green-900 px-1 py-1 text-xs font-medium capitalize text-green-50 transition-all duration-300  dark:bg-gray-300 dark:text-gray-900"
                            >
                                +{tags.length - 2} more
                            </Link>
                        </li>
                    )}
                </ul>
                {posts.map((post) => (
                    <li key={post.slug} className="mt-4">
                        <MemoizedPostCard
                            readingTime={post.readingTime.text}
                            href={`${post.url}`}
                            title={post.title}
                            summary={post.summary}
                            date={post.date}
                            index={posts.indexOf(post)}
                        />
                    </li>
                ))}
            </ul>
        </PageLayout>
    )
}

export default Blog
