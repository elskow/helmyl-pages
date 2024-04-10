import BlurImageRounded from '@/components/BlurImage-Rounded'
import HelmyAvatar from 'public/helmy-avatar-bw.webp'

const AvatarAbout = () => {
    return (
        <div className="lg:pl-32">
            <div className="max-w-xs px-2.5 lg:max-w-none">
                <BlurImageRounded
                    src={HelmyAvatar.src}
                    alt="Profile Picture"
                    className="aspect-square rotate-2 rounded-2xl object-cover shadow-lg shadow-emerald-950 blur-0 drop-shadow-2xl backdrop-contrast-200 transition duration-1000 dark:shadow-2xl dark:shadow-teal-900 dark:drop-shadow-2xl dark:backdrop-contrast-200"
                    blurDataURL={HelmyAvatar.blurDataURL}
                    placeholder="blur"
                />
            </div>
        </div>
    )
}

export default AvatarAbout
