import ContentSkeletonProjects from '@/page-module/projects/Content.Skeleton.projects'
import HeaderSkeletonProjects from '@/page-module/projects/Header.Skeleton.project'

const Loading = () => {
    return (
        <section className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <HeaderSkeletonProjects />
            <ContentSkeletonProjects />
        </section>
    )
}

export default Loading
