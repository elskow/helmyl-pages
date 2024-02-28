import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { allPosts } from '@/.contentlayer/generated'
import WorkExperiences from '@/components/WorkExperiences'

const posts = allPosts
    .filter((post) => post.draft !== true)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)

const experiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'PT. Telkom Indonesia',
        period: 'June 2021 - Present',
        description:
            'Working on a project to develop a web-based application for the company’s internal use. The application is built using React and Tailwind CSS for the frontend, and Node.js for the backend.',
        present: true,
    },
    {
        id: 2,
        title: 'Data Analyst',
        company: 'PT. Telkom Indonesia',
        period: 'June 2020 - June 2021',
        description:
            'Developed a data visualization dashboard for the company’s data warehouse. The dashboard is built using Power BI and SQL Server.',
    },
]

export default async function Page() {
    return (
        <main className="mx-auto space-y-6 pb-32 pt-36 lg:max-w-5xl lg:pb-36 lg:pt-40">
            <section className="mb-36 space-y-6">
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
                    >
                        Hire Me! <ChevronRightIcon />
                    </Link>
                    <Link
                        className="mt-2 inline-flex items-center rounded-md font-semibold hover:font-bold hover:underline sm:mt-0 sm:pl-4"
                        href="/projects"
                    >
                        Explore My Work <ChevronRightIcon />
                    </Link>
                </div>
            </section>
            <section className="grid grid-cols-1 gap-24 lg:grid-cols-2">
                <div className="space-y-6">
                    <h1 className="font-semibold text-slate-900 dark:text-slate-50 lg:text-xl">
                        Latest Posts
                    </h1>
                    {posts.map((post) => (
                        <ul
                            key={post.slug}
                            className="mt-4 space-y-2 rounded-lg bg-white px-4 py-6 shadow-md dark:bg-slate-800"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                passHref
                                className="group cursor-pointer"
                            >
                                <h1 className="mb-6 font-semibold text-slate-900 transition-all duration-200 group-hover:pointer-events-none group-hover:text-green-600 dark:text-slate-50 dark:group-hover:text-green-400">
                                    {post.title}
                                </h1>
                                <p className="mb-4 text-slate-800 dark:text-slate-100">
                                    {post.summary}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {post.date}
                                </p>
                            </Link>
                        </ul>
                    ))}
                </div>
                <div className="space-y-6">
                    <h1 className="font-semibold text-slate-900 dark:text-slate-50 lg:text-xl">
                        Work Experience
                    </h1>
                    <div className="pl-4 pt-4">
                        <WorkExperiences experiences={experiences} />
                    </div>
                </div>
            </section>
        </main>
    )
}
