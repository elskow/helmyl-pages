'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import CONFIG from '@/blog.config'
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
            <Button className="text-neutral-100 dark:text-neutral-900 lg:font-medium">
                <Link href="/" unselectable={'on'} draggable={false}>
                    Back to home
                </Link>
            </Button>
        </div>
    )
}

export default NotFound
