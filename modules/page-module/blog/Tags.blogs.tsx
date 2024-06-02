import { slug } from 'github-slugger'
import Link from 'next/link'

const TagsBlogs = ({ tags }) => {
    return (
        <div className="mb-4 flex select-none flex-wrap border-b border-gray-200 pb-5 dark:border-gray-700">
            {tags.slice(0, 2).map((tag) => (
                <ul
                    key={tag}
                    className="mb-2 mr-2 rounded bg-gray-200 px-2 py-1 text-sm text-gray-700 transition hover:bg-gray-300 hover:bg-opacity-80 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-80 border border-gray-300 dark:border-gray-700 capitalize"
                >
                    <Link
                        className="px-2"
                        href={`/tags/${slug(tag)}`}
                        draggable={false}
                        unselectable={'on'}
                    >
                        {slug(tag)}
                    </Link>
                </ul>
            ))}
            {tags.length > 2 && (
                <ul>
                    <Link
                        href="/tags"
                        className="mb-2 mr-2 rounded bg-green-900 px-1 py-1 text-xs font-medium capitalize text-green-50 transition-all duration-300  dark:bg-gray-300 dark:text-gray-900"
                        draggable={false}
                        unselectable={'on'}
                    >
                        +{tags.length - 2} more
                    </Link>
                </ul>
            )}
        </div>
    )
}

export default TagsBlogs
