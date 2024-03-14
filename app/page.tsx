import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { allPosts } from '@/.contentlayer/generated'
import WorkExperiences from '@/components/_root/WorkExperiences'

const posts = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)

import experiences from '@/const/WorkExperience'

export default async function Page() {
    return (
        <main className="mx-auto space-y-6 pb-32 pt-36 lg:max-w-5xl lg:pb-36 lg:pt-40">
            <section className="mb-36 min-h-[60vh] space-y-6">
                <p className="font-medium text-slate-800 dark:text-slate-100 sm:text-xl">
                    Hello! I&apos;m <span className="font-semibold">Helmy Luqmanulhakim</span>
                </p>
                <h1 className="mb-6 font-code text-3xl font-semibold tracking-extra-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
                    I do software development
                    <br />
                    and data-related stuff.
                </h1>
                <p className="mb-6 tracking-tight text-slate-800 dark:text-slate-100 sm:text-xl md:max-w-2xl">
                    I&apos;ve been coding for over{' '}
                    <span className="underline underline-offset-4">2 years</span>, working on
                    projects from data science to web development. I&apos;m highly interested in
                    exploring <b>computational mathematics</b> and <b>backend engineering</b>.
                </p>
                <div className="flex select-none flex-col sm:flex-row">
                    <Link
                        className="inline-flex items-center rounded-md font-semibold hover:font-bold hover:underline"
                        href="/contact"
                        draggable={false}
                        unselectable={'on'}
                    >
                        Hire Me! <ChevronRightIcon />
                    </Link>
                    <Link
                        className="mt-2 inline-flex items-center rounded-md font-semibold hover:font-bold hover:underline sm:mt-0 sm:pl-4"
                        href="/projects"
                        draggable={false}
                        unselectable={'on'}
                    >
                        Explore My Work <ChevronRightIcon />
                    </Link>
                </div>
            </section>
            <section className="grid grid-cols-1 gap-24 lg:grid-cols-2">
                <div className="space-y-6">
                    <h1 className="mb-10 text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                        Latest Posts
                    </h1>
                    <div
                        className={`mx-auto flex max-w-[80vw] flex-col items-center space-y-6 lg:max-w-none`}
                    >
                        {posts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                passHref
                                key={post.slug}
                                className="mt-4 space-y-2 rounded-lg bg-white bg-opacity-10 px-4 py-6 shadow-md backdrop-blur-lg backdrop-filter transition-all duration-200 hover:bg-slate-50 hover:bg-opacity-5 hover:shadow-lg dark:bg-slate-900 dark:bg-opacity-60 dark:hover:bg-slate-950"
                            >
                                <div
                                    className="group cursor-pointer"
                                    draggable={false}
                                    unselectable={'off'}
                                >
                                    <h1 className="mb-6 font-semibold text-slate-900 text-opacity-90 transition-all duration-200 group-hover:pointer-events-none group-hover:text-opacity-100 dark:text-slate-50 sm:text-lg">
                                        {post.title}
                                    </h1>
                                    <p className="mb-6 text-sm text-slate-800 text-opacity-80 dark:text-slate-100 sm:text-base">
                                        {post.summary}
                                    </p>
                                    <p className="text-xs text-slate-600 text-opacity-80 dark:text-slate-400 sm:text-sm">
                                        {post.date}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <h1 className="mb-10 text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                        Work Experience
                    </h1>
                    <div className="mx-auto flex max-w-[80vw] flex-col items-center pl-4 pt-4 lg:max-w-none">
                        <WorkExperiences experiences={experiences} />
                    </div>
                </div>
            </section>
        </main>
    )
}
