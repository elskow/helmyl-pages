import PageLayout from '@/layouts/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import Skillset from '@/components/_about/Skillset'

import SocialMedia from '@/const/SocialMedia'

const AboutPage = () => {
    return (
        <PageLayout>
            <div className="mx-auto mb-12 mt-12 grid w-full grid-cols-1 justify-center gap-y-8 space-y-10 lg:max-w-5xl lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-20">
                <div className="lg:pl-32">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={'/helmy-avatar.webp'}
                            alt="Profile Picture"
                            width={500}
                            height={500}
                            className="aspect-square rotate-3 scale-100 rounded-2xl bg-zinc-100 object-cover blur-0 transition duration-1000 dark:bg-zinc-800"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="font-newsreader text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:mb-16 lg:mt-10">
                        I&apos;m{' '}
                        <span className="text-teal-700 dark:text-teal-400">
                            Helmy Luqmanulhakim
                        </span>
                        , a software engineer from Surabaya, Indonesia.
                    </h1>
                    <div className="mt-12 text-base ">
                        <section className="space-y-8 md:space-y-10">
                            <div className="lg:mt-10">
                                <h2 className="mb-3 font-newsreader text-xl font-bold lg:mb-5 lg:text-3xl">
                                    Who am I?
                                </h2>
                                <p className="font-normal lg:text-lg">
                                    A dedicated Computer Science student at{' '}
                                    <Link
                                        href="https://unesa.ac.id"
                                        passHref
                                        aria-label="Universitas Negeri Surabaya"
                                        className="transition hover:text-teal-600 dark:hover:text-teal-500"
                                        title="See more about Universitas Negeri Surabaya"
                                        target="_blank"
                                    >
                                        <u>Universitas Negeri Surabaya</u>
                                    </Link>
                                    , I am actively seeking full-time remote or hybrid roles in
                                    software engineering or data analysis. My expertise lies in
                                    <b> web development</b> and <b>data-centric</b> technologies,
                                    including Classical Machine Learning, Data Visualization, and
                                    Data Streaming. Being a self-taught developer, I thrive on the
                                    thrill of exploring and mastering new technologies.
                                </p>
                            </div>
                            <div className="lg:mt-10">
                                <h2 className="mb-8 font-newsreader text-xl font-bold lg:mb-10 lg:text-3xl">
                                    What am I using?
                                </h2>
                                <Skillset />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="lg:pl-32">
                    <ul role="list" className="space-y-8">
                        {SocialMedia.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    aria-label={item.name}
                                    className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-500"
                                >
                                    <item.icon
                                        className="h-6 w-6 flex-none fill-zinc-800 transition group-hover:fill-teal-500 dark:fill-zinc-200 dark:group-hover:fill-teal-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-4">{item.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </PageLayout>
    )
}

export default AboutPage
