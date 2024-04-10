import AvatarAbout from '@/page-module/about/Avatar.about'
import ContentAbout from '@/page-module/about/Content.about'
import SocialAbout from '@/page-module/about/Social.about'

const AboutPage = () => {
    return (
        <main className="mx-auto mb-12 mt-8 grid w-full grid-cols-1 justify-center gap-y-8 space-y-10 lg:mt-12 lg:max-w-5xl lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-20">
            <AvatarAbout />
            <ContentAbout />
            <SocialAbout />
        </main>
    )
}

export default AboutPage
