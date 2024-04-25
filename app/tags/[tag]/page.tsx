import MainLayout from '@/layouts/MainLayout'
import { Slide } from '@/page-transition/Slide'
import { allPosts, Post } from 'contentlayer/generated'
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
        <MainLayout className="mx-auto mt-5 min-h-[70vh] w-full justify-center space-y-4 lg:max-w-5xl">
            <Slide>
                <h1 className="mb-5 border-b border-gray-200 pb-5 text-base dark:border-gray-700 lg:text-xl">
                    {filteredPosts.length} posts tagged with{' '}
                    <span className="font-newsreader font-bold">{params.tag}</span>
                </h1>
            </Slide>
            <Slide delay={0.2}>
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
            </Slide>
        </MainLayout>
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
    return allPosts
        .map(({ tags }) => tags)
        .flat()
        .filter((value, index, self) => self.indexOf(value) === index)
        .map((tag) => ({ tag: slug(tag) }))
}
