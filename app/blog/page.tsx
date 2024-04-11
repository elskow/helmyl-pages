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
    .filter((value, index, self) => self.indexOf(value) === index)

const Blog = () => {
    if (posts.length === 0) {
        return <NotfoundBlogs />
    }

    return (
        <main className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <HeaderBlogs />
            <TagsBlogs tags={tags} />
            <ContentBlogs posts={posts} />
        </main>
    )
}

export default Blog
