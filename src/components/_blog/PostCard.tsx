'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import FormatDate from '@/components/_blog/FormatDate'

interface CardProps {
    href: string
    title: string
    summary: string
    date: string
    readingTime: string
    index: number
}

const Card: React.FC<CardProps> = (props) => {
    const { href, title, summary, date, readingTime, index } = props

    const variants = {
        hidden: { opacity: 0, scale: 0.95, y: 100 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.2 * index,
                duration: 1.5,
                ease: 'easeInOut',
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -100,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 1.5,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={variants}>
            <div className="flex w-full flex-col md:flex-row">
                <Link
                    href={href}
                    className="group flex w-full flex-col"
                    draggable={false}
                    unselectable={'on'}
                >
                    <motion.h1 className="flex cursor-pointer items-center font-newsreader text-lg font-semibold transition-colors duration-300 group-hover:text-green-900 group-hover:underline dark:group-hover:text-green-300 lg:text-2xl">
                        {title}
                        <span className="text-gray dark:text-slate ml-3 hidden font-sans text-sm font-light sm:inline-block">
                            ({readingTime})
                        </span>
                    </motion.h1>
                    <motion.p className="mt-1 hidden text-sm font-light text-primary dark:text-primary md:flex lg:text-base">
                        {summary}
                    </motion.p>
                </Link>
                <FormatDate dateString={date} />
            </div>
            <motion.div className="my-4 border-b border-gray-200 dark:border-gray-700" />
        </motion.div>
    )
}

export default Card
