import React from 'react'
import dynamic from 'next/dynamic'

const PostCard = dynamic(() => import('@/components/_blog/PostCard'))

const MemoizedPostCard = React.memo(PostCard)

const ContentBlogs = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <ul key={post.slug} className="mt-4">
                    <MemoizedPostCard
                        readingTime={post.readingTime.text}
                        href={`${post.url}`}
                        title={post.title}
                        summary={post.summary}
                        date={post.date}
                        index={posts.indexOf(post)}
                    />
                </ul>
            ))}
        </div>
    )
}

export default ContentBlogs
