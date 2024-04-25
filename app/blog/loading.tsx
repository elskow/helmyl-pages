import ContentSkeletonBlogs from '@/page-module/blog/Content.Skeleton.blogs'
import HeaderSkeletonBlogs from '@/page-module/blog/Header.Skeleton.blogs'
import TagsSkeletonBlogs from '@/page-module/blog/Tags.Skeleton.blogs'

const Loading = () => {
    return (
        <section className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <HeaderSkeletonBlogs />
            <TagsSkeletonBlogs />
            <ContentSkeletonBlogs />
        </section>
    )
}

export default Loading
