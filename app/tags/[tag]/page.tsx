import { Post, allPosts } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import type { Metadata } from 'next'
import React, { lazy, useMemo } from 'react'

const PostCard = lazy(() => import('@/components/_blog/PostCard'))

const MemoizedPostCard = React.memo(PostCard)

const Tag = ({ params }) => {
    const tagSlug = slug(params.tag)
    const filteredPosts: Post[] = useMemo(
        () =>
            allPosts.filter((post) => {
                return post.tags?.some((tag) => slug(tag) === tagSlug)
            }),
        [tagSlug]
    )

    return (
        <main className="mx-auto mt-5 min-h-[70vh] w-full justify-center space-y-4 lg:max-w-5xl">
            <h1 className="mb-5 border-b border-gray-200 pb-5 text-base dark:border-gray-700 lg:text-xl">
                {filteredPosts.length} posts tagged with{' '}
                <span className="font-newsreader font-bold">{params.tag}</span>
            </h1>
            {filteredPosts.map((post, index) => (
                <ul key={post.slug}>
                    <MemoizedPostCard
                        readingTime={post.readingTime.text}
                        href={`${post.url}`}
                        title={post.title}
                        summary={post.summary}
                        date={post.date}
                        index={index}
                    />
                </ul>
            ))}
        </main>
    )
}

export default Tag

export async function generateMetadata({ params }): Promise<Metadata> {
    const tag = params.tag
    return {
        title: `#${tag}`,
        description: `${tag} tagged posts`,
    }
}

export async function generateStaticParams() {
    const tags = allPosts.reduce((acc, post: Post) => {
        if (post.tags) {
            post.tags.forEach((tag: string) => {
                // @ts-ignore
                if (!acc.includes(tag)) {
                    // @ts-ignore
                    acc.push(tag)
                }
            })
        }
        return acc
    }, [])

    return tags.map((tag: string) => ({ params: { tag } }))
}
