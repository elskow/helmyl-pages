import SocialMedia from '@/const/SocialMedias'
import Link from 'next/link'

const SocialAbout = () => {
    return (
        <div className="lg:pl-32">
            <ul role="list" className="select-none space-y-8">
                {SocialMedia.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href}
                            aria-label={item.name}
                            className="group flex items-center text-xs font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-500 lg:text-sm"
                            draggable={false}
                            unselectable={'on'}
                        >
                            <item.icon
                                className="h-5 w-5 flex-none fill-zinc-800 transition group-hover:fill-teal-500 dark:fill-zinc-200 dark:group-hover:fill-teal-500 lg:h-6 lg:w-6"
                                aria-hidden="true"
                            />
                            <span className="ml-4">{item.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialAbout
