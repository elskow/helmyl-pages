import PageLayout from '@/layouts/PageLayout'
import { allPosts } from '@/.contentlayer/generated'
import { slug } from 'github-slugger'
import Link from 'next/link'

const TagsPage = () => {
    const posts = allPosts.filter((post) => post.draft !== true)

    if (posts.length === 0) {
        return (
            <PageLayout>
                <div className="flex min-h-[60vh] flex-col items-center justify-center pt-28 text-center">
                    <h1 className="font-bold">Author has not written any posts yet.</h1>
                    <p>Please check back later.</p>
                </div>
            </PageLayout>
        )
    }

    const tags = posts.map((post) => post.tags).flat()
    return (
        <PageLayout>
            <ul className="mx-auto mt-10 w-full justify-center space-y-8 lg:max-w-5xl">
                <div className="space-y-3">
                    <h1 className="font-newsreader text-4xl font-bold lg:text-5xl">Tags</h1>
                </div>
                <ul className="mb-4 flex select-none flex-wrap p-4 pb-5">
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="mb-2 mr-2 rounded bg-green-50 px-3 py-1 font-medium capitalize text-green-900 transition-all duration-300 hover:bg-green-900 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
                        >
                            <Link className="px-2" href={`/tags/${slug(tag)}`}>
                                {slug(tag)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </PageLayout>
    )
}

export default TagsPage
