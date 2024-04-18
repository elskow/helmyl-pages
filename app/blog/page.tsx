import ContentBlogs from '@/page-module/blog/Content.blogs'
import HeaderBlogs from '@/page-module/blog/Header.blogs'
import NotfoundBlogs from '@/page-module/blog/Notfound.blogs'
import TagsBlogs from '@/page-module/blog/Tags.blogs'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog',
}

const posts = allPosts.filter((post) => !post.draft).sort((a, b) => b.date.localeCompare(a.date))
const tags = posts
    .map((post) => post.tags)
    .flat()
    .filter((value, index, self) => {
        return self.indexOf(value) === index
    })

const Blog = () => {
    if (posts.length === 0) {
        return <NotfoundBlogs />
    }

    return (
        <>
            <HeaderBlogs />
            <TagsBlogs tags={tags} />
            <ContentBlogs posts={posts} />
        </>
    )
}

export default Blog
