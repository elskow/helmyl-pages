'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectProps {
    href: string
    link_text: string
    title: string
    description: string
    tech?: string
    date?: string
    image: string
    index: number
}

export const LinkIcon = React.memo(() => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            strokeWidth="2"
            stroke="currentColor"
            className="h-4 w-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
        </svg>
    )
})

const TechStack = React.memo(({ tech }: { tech: string }) => {
    const [showAll, setShowAll] = React.useState(false);
    const techStacks = tech.split(',');

    const handleShowAll = React.useCallback(() => {
        setShowAll(true);
    }, []);

    return (
        <div className='min-h-[8vh]'>
            <div className="mt-4 flex flex-wrap">
                {(showAll ? techStacks : techStacks.slice(0, 6)).map((item, index) => (
                    <span key={index} className="mr-2 mb-2 bg-gray-200 rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-300 transition hover:bg-opacity-80">
                        {item.trim()}
                    </span>
                ))}
                {techStacks.length > 6 && !showAll && (
                    <button onClick={handleShowAll}
                        className="mr-2 mb-2 bg-green-200 rounded px-2 py-1 text-sm text-green-700 hover:bg-green-300 transition hover:bg-opacity-80 dark:bg-blue-200 dark:text-blue-700 dark:hover:bg-blue-300 dark:hover:bg-opacity-80">
                        More
                    </button>
                )}
            </div>
        </div>
    )
})

const ProjectCard = ({ title, description, image, href, tech, date, link_text, index }: ProjectProps) => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 30,
                delay: 0.1 * index,
                duration: 1,
            },
        },
        hover: {
            scale: 1.01,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 30,
                duration: 0.5,
            },
        },
    }

    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" >
            <motion.li
                className="group relative flex flex-col items-start bg-white rounded-lg shadow-md select-none w-[300px] h-[500px]"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
            >
                <div className="relative w-full h-[250px]">
                    <Image
                        src={image}
                        alt={description}
                        className="absolute w-full h-full object-cover fill-white"
                        width={300}
                        height={200}
                        loading='lazy'
                    />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <p className="mt-2 text-xs font-semibold text-zinc-700">
                        {date}
                    </p>
                    <h2 className="mt-2 text-base font-semibold text-zinc-800">
                        <p className="hover:underline">
                            {title}
                        </p>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 flex-grow">{description}</p>
                    {tech && <TechStack tech={tech} />}
                    <p className="mt-6 flex items-center text-sm font-medium text-zinc-800 transition group-hover:text-teal-900">
                        <LinkIcon />
                        <span className="ml-2">{link_text}</span>
                    </p>
                </div>
            </motion.li>
        </Link>
    )
}

export default ProjectCard
