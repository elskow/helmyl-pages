import Link from 'next/link'
import { AiOutlineLoading } from 'react-icons/ai'
import dynamic from 'next/dynamic'

import Experiences from '@/const/Experiences'

const Loading = () => {
    return (
        <div className="flex h-32 items-center justify-center">
            <AiOutlineLoading className="h-10 w-10 animate-spin text-teal-600 dark:text-teal-500" />
        </div>
    )
}

const Skillset = dynamic(() => import('@/components/_about/Skillset'), {
    ssr: false,
    loading: Loading,
})
const WorkExperiences = dynamic(() => import('@/components/_about/WorkExperiences'), {
    ssr: false,
    loading: Loading,
})
const SpotifyNowPlaying = dynamic(() => import('@/components/_about/SpotifyNowPlaying'), {
    ssr: false,
    loading: Loading,
})

const ContentAbout = () => {
    return (
        <div className="lg:order-first lg:row-span-2">
            <h1 className="font-newsreader text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:mb-16 lg:mt-10">
                I&apos;m{' '}
                <span className="text-teal-700 dark:text-teal-400">Helmy Luqmanulhakim</span>, a
                software engineer from Surabaya, Indonesia.
            </h1>
            <div className="pt-12 text-base ">
                <section className="space-y-12 md:space-y-16">
                    <div>
                        <h2 className="mb-3 font-newsreader text-xl font-bold lg:mb-5 lg:text-2xl">
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
                                draggable={false}
                                unselectable={'on'}
                            >
                                <u>Universitas Negeri Surabaya</u>
                            </Link>
                            , I am actively seeking full-time remote or hybrid roles in software
                            engineering or data analysis. My expertise lies in
                            <b> web development</b> and <b>data-centric</b> technologies, including
                            Classical Machine Learning, Data Visualization, and Data Streaming.
                            Being a self-taught developer, I thrive on the thrill of exploring and
                            mastering new technologies.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-8 font-newsreader text-xl font-bold lg:mb-10 lg:text-2xl">
                            What am I using?
                        </h2>
                        <Skillset />
                    </div>
                    <div>
                        <h2 className="mb-8 font-newsreader text-xl font-bold lg:mb-10 lg:text-2xl">
                            Where have I worked?
                        </h2>
                        <div>
                            <WorkExperiences experiences={Experiences} />
                        </div>
                    </div>
                    <div>
                        <SpotifyNowPlaying />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContentAbout
