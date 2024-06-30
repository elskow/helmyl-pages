import { slug } from 'github-slugger'
import Link from 'next/link'

const ContentTags = ({ tags }) => {
    return (
        <ul className="mb-4 flex select-none flex-wrap p-4 pb-5">
            {tags.map((tag) => (
                <li
                    key={tag}
                    className="mb-2 mr-2 rounded bg-gray-200 px-2 py-1 text-gray-700 transition hover:bg-gray-300 hover:bg-opacity-80 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-80 border border-gray-300 dark:border-gray-700 capitalize"
                >
                    <Link
                        className="px-2"
                        href={`/tags/${slug(tag)}`}
                        draggable={false}
                        unselectable={'on'}
                    >
                        {slug(tag)}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ContentTags
