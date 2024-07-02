import LoadingAnimation from '@/components/LoadingAnimation'
import { Slide } from '@/page-transition/Slide'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Experiences from '../../../const/Experiences'

const Skillset = dynamic(() => import('@/components/_about/Skillset'), {
    ssr: false,
    loading: LoadingAnimation,
})
const WorkExperiences = dynamic(() => import('@/components/_about/WorkExperiences'), {
    ssr: false,
    loading: LoadingAnimation,
})
const SpotifyNowPlaying = dynamic(() => import('@/components/_about/SpotifyNowPlaying'), {
    ssr: false,
    loading: LoadingAnimation,
})

const ContentAbout = () => {
    return (
        <div className="lg:order-first lg:row-span-2">
            <Slide>
                <h1 className="font-newsreader text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:mb-16 lg:mt-10">
                    I&apos;m{' '}
                    <span className="text-teal-700 dark:text-teal-400">Helmy Luqmanulhakim</span>, a
                    software engineer from Surabaya, Indonesia.
                </h1>
            </Slide>
            <div className="pt-12 text-base ">
                <section className="space-y-12 md:space-y-16">
                    <Slide delay={0.2}>
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
                    </Slide>
                    <Slide delay={0.4}>
                        <h2 className="mb-8 font-newsreader text-xl font-bold lg:mb-10 lg:text-2xl">
                            What am I using?
                        </h2>
                        <Skillset />
                    </Slide>
                    <Slide delay={0.6}>
                        <h2 className="mb-8 font-newsreader text-xl font-bold lg:mb-10 lg:text-2xl">
                            Where have I worked?
                        </h2>
                        <div>
                            <WorkExperiences experiences={Experiences} />
                        </div>
                    </Slide>
                    <Slide delay={0.8}>
                        <SpotifyNowPlaying />
                    </Slide>
                </section>
            </div>
        </div>
    )
}

export default ContentAbout
