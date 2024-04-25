// import AvatarAbout from '@/page-module/about/Avatar.about'
// import ContentAbout from '@/page-module/about/Content.about'
// import SocialAbout from '@/page-module/about/Social.about'

import AvatarSkeletonAbout from '@/page-module/about/Avatar.Skeleton.about'
import ContentSkeletonAbout from '@/page-module/about/Content.Skeleton.about'
import SocialSkeletonAbout from '@/page-module/about/Social.Skeleton.about'
import dynamic from 'next/dynamic'

const AvatarAbout = dynamic(() => import('@/page-module/about/Avatar.about'), {
    loading: AvatarSkeletonAbout,
    ssr: false,
})
const ContentAbout = dynamic(() => import('@/page-module/about/Content.about'), {
    loading: ContentSkeletonAbout,
    ssr: false,
})
const SocialAbout = dynamic(() => import('@/page-module/about/Social.about'), {
    loading: SocialSkeletonAbout,
    ssr: false,
})

const AboutPage = () => {
    return (
        <section className="mx-auto mb-12 mt-8 grid w-full grid-cols-1 justify-center gap-y-8 space-y-10 lg:mt-12 lg:max-w-5xl lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-20">
            <AvatarAbout />
            <ContentAbout />
            <SocialAbout />
        </section>
    )
}

export default AboutPage
