import Link from 'next/link'
import { HiMiniRss } from 'react-icons/hi2'

const HeaderBlogs = () => {
    return (
        <div className="space-y-3">
            <h1 className="font-newsreader text-4xl font-bold lg:text-5xl">
                Blog
                <Link
                    href={`/rss.xml`}
                    className="text-base align-top ml-2 text-lime-800 hover:text-lime-500 hover:drop-shadow-lg dark:text-lime-100 dark:hover:text-lime-600 transition-all duration-300"
                >
                    <HiMiniRss className={`inline`} />
                </Link>
            </h1>
            <p className="font-light lg:text-lg">
                I write about software development, productivity, and other topics that interest me.
            </p>
        </div>
    )
}

export default HeaderBlogs
