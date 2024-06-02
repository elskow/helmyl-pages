import { slug } from 'github-slugger'
import Link from 'next/link'
import React from 'react'

const TagsPost = React.memo(({ tags }: { tags: string[] }) => (
    <ul className="mb-4 flex select-none flex-wrap">
        <div className="text-sm font-medium text-primary dark:text-primary md:text-base">
            Tags: &nbsp;
        </div>
        {tags?.map((tag) => (
            <li
                className="mb-2 mr-2 rounded bg-gray-200 px-2 py-1 text-sm text-gray-700 transition hover:bg-gray-300 hover:bg-opacity-80 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-80 border border-gray-300 dark:border-gray-700 capitalize"
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

TagsPost.displayName = 'TagsList'
export default TagsPost
