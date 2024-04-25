import ContentBlogs from '@/page-module/blog/Content.blogs'
import HeaderBlogs from '@/page-module/blog/Header.blogs'
import NotfoundBlogs from '@/page-module/blog/Notfound.blogs'
import TagsBlogs from '@/page-module/blog/Tags.blogs'
import { Slide } from '@/page-transition/Slide'
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
        <section className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <Slide>
                <HeaderBlogs />
            </Slide>
            <Slide delay={0.1}>
                <TagsBlogs tags={tags} />
            </Slide>
            <Slide delay={0.12}>
                <ContentBlogs posts={posts} />
            </Slide>
        </section>
    )
}

export default Blog
