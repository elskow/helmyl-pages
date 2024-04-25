import { Slide } from '@/page-transition/Slide'
import Link from 'next/link'
import { RxChevronDown } from 'react-icons/rx'

const Hero = () => {
    return (
        <section className="my-auto space-y-6 pb-[10vh] items-start">
            <Slide>
                <p className="font-medium text-slate-800 dark:text-slate-100 sm:text-xl">
                    Hello! I&apos;m <span className="font-bold">Helmy Luqmanulhakim</span>.
                </p>
            </Slide>
            <Slide delay={0.1}>
                <h1 className="mb-6 font-code text-3xl font-semibold tracking-extra-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
                    I do software development
                    <br />
                    and data-related stuff.
                </h1>
            </Slide>
            <Slide delay={0.2}>
                <p className="mb-6 tracking-tight text-slate-800 dark:text-slate-100 sm:text-xl md:max-w-2xl">
                    I&apos;ve been coding for over{' '}
                    <span className="underline underline-offset-4">2 years</span>, working on
                    projects from data science to web development. I&apos;m highly interested in
                    exploring <b>computational mathematics</b> and <b>backend engineering</b>.
                </p>
            </Slide>
            <Slide className="flex select-none flex-col sm:flex-row" delay={0.3}>
                <Link
                    className="inline-flex items-center rounded-md font-semibold hover:font-bold hover:underline"
                    href="/contact"
                    draggable={false}
                    unselectable={'on'}
                >
                    Hire Me! <RxChevronDown />
                </Link>
                <Link
                    className="mt-2 inline-flex items-center rounded-md font-semibold hover:font-bold hover:underline sm:mt-0 sm:pl-4"
                    href="/projects"
                    draggable={false}
                    unselectable={'on'}
                >
                    Explore My Work <RxChevronDown />
                </Link>
            </Slide>
        </section>
    )
}

export default Hero
