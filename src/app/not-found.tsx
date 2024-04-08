'use client'

import Link from 'next/link'
import { Metadata } from 'next'
import CONFIG from '../../blog.config'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
    metadataBase: new URL(CONFIG.url),
    title: `404 | ${CONFIG.title}`,
    description: CONFIG.siteDescription,
    openGraph: {
        title: CONFIG.title,
        description: CONFIG.siteDescription,
        url: CONFIG.url,
        locale: CONFIG.lang,
        type: 'website',
    },
}

const NotFound = () => {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center pt-2 text-center lg:min-h-[75vh]">
            <motion.h1
                className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-100 lg:text-6xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                404
            </motion.h1>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300 lg:text-lg">Page not found</p>
            <button className="rounded-md bg-zinc-900 px-4 py-2 text-neutral-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-neutral-900 dark:hover:bg-zinc-200 lg:font-medium">
                <Link href="/" unselectable={'on'} draggable={false}>
                    Back to home
                </Link>
            </button>
        </div>
    )
}

export default NotFound
