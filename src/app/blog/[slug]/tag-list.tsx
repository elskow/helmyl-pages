import { slug } from 'github-slugger'
import Link from 'next/link'
import React from 'react'

const TagsList = React.memo(({ tags }: { tags: string[] }) => (
    <ul className="mb-4 flex select-none flex-wrap">
        <div className="text-sm font-medium text-primary dark:text-primary md:text-base">
            Tags: &nbsp;
        </div>
        {tags?.map((tag) => (
            <li
                className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 text-xs font-medium capitalize text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 md:text-sm"
                key={tag}
                title={slug(tag)}
            >
                <Link
                    className="px-2"
                    href={`/tags/${slug(tag)}`}
                    unselectable={'on'}
                    draggable={'false'}
                >
                    {slug(tag)}
                </Link>
            </li>
        ))}
    </ul>
))

TagsList.displayName = 'TagsList'
export default TagsList
