'use client'

import PageLayout from '@/layouts/PageLayout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    metadataBase: new URL(`https://helmyl.com`),
    title: `404 | Helmy Luqmanulhakim`,
    description: 'Page not found',
    openGraph: {
        title: '404 | Helmy Luqmanulhakim',
        description: 'Page not found',
        url: 'https://helmyl.com',
        locale: 'en_US',
        type: 'website',
    },
}

const NotFound = () => {
    return (
        <PageLayout className="flex lg:max-w-5xl xl:max-w-7xl mx-auto">
                <section className={`mx-auto flex lg:max-w-5xl xl:max-w-7xl justify-center items-center`}>
                    <div>
                        <LazyMotion features={domAnimation}>
                            <m.h1
                                className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-100 lg:text-6xl"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                404
                            </m.h1>
                            <p className="mb-4 text-neutral-700 dark:text-neutral-300 lg:text-lg">
                                Page not found
                            </p>
                            <button
                                className="rounded-md bg-zinc-900 px-4 py-2 text-neutral-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-neutral-900 dark:hover:bg-zinc-200 lg:font-medium">
                                <Link href="/" unselectable={'on'} draggable={false}>
                                    Back to home
                                </Link>
                            </button>
                        </LazyMotion>
                    </div>
                </section>
        </PageLayout>
    )
}

export default NotFound
