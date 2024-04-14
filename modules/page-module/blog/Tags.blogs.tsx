import Link from 'next/link'

const TagsBlogs = ({ tags }) => {
    return (
        <div className="mb-4 flex select-none flex-wrap border-b border-gray-200 pb-5 dark:border-gray-700">
            {tags.slice(0, 2).map((tag) => (
                <ul
                    key={tag}
                    className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 text-sm font-medium capitalize text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-slate-500 md:text-base"
                >
                    <Link
                        className="px-2"
                        href={`/tags/${tag}`}
                        draggable={false}
                        unselectable={'on'}
                    >
                        {tag}
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
