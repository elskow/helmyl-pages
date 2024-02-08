import { Post, allPosts } from '@/.contentlayer/generated'
import PostCard from '@/components/PostCard'
import PageLayout from '@/layouts/PageLayout'
import { slug } from 'github-slugger'
import type { Metadata } from 'next'
import React, { useMemo } from 'react'

export async function generateMetadata({ params }): Promise<Metadata> {
    const tag = params.tag
    return {
        title: `#${tag}`,
        description: `${tag} tagged posts`,
    }
}

const MemoizedPostCard = React.memo(PostCard)

const Tag = ({ params }) => {
    const filteredPosts: Post[] = useMemo(
        () =>
            allPosts.filter((post) => {
                return post.tags?.some((tag) => slug(tag) === params.tag)
            }),
        [params.tag]
    )

    return (
        <PageLayout>
            <ul className="mx-auto mt-5 w-full justify-center space-y-4 lg:max-w-5xl">
                <h1 className="mb-5 border-b border-gray-200 pb-5 text-base dark:border-gray-700 lg:text-xl">
                    {filteredPosts.length} posts tagged with{' '}
                    <span className="font-newsreader font-bold">{params.tag}</span>
                </h1>
                {filteredPosts.map((post) => (
                    <li key={post.slug}>
                        <MemoizedPostCard
                            readingTime={post.readingTime.text}
                            href={`${post.url}`}
                            title={post.title}
                            summary={post.summary}
                            date={post.date}
                        />
                    </li>
                ))}
            </ul>
        </PageLayout>
    )
}

export default Tag
