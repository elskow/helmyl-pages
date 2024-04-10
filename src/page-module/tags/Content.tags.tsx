import Link from 'next/link'
import { slug } from 'github-slugger'

const ContentTags = ({ tags }) => {
    return (
        <ul className="mb-4 flex select-none flex-wrap p-4 pb-5">
            {tags.map((tag) => (
                <li
                    key={tag}
                    className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 font-medium capitalize text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-slate-500"
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
