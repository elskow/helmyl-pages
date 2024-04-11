'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import Link from 'next/link'

import ProjectLinkIcon from '@/components/_project/ProjectLinkIcon'
import TechStack from '@/components/_project/TechStackBadge'
import BlurImage from '@/components/BlurImage'

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

const ProjectCard = ({
    title,
    description,
    image,
    href,
    tech,
    date,
    link_text,
    index,
    ...props
}: ProjectProps) => {
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
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            unselectable={'on'}
            {...props}
        >
            <LazyMotion features={domAnimation}>
                <m.li
                    className="group relative flex h-[500px] w-[300px] select-none flex-col items-start rounded-lg border border-transparent bg-white bg-opacity-20 shadow-lg hover:bg-opacity-10 hover:shadow-xl dark:border-gray-700 dark:bg-slate-800 dark:bg-opacity-60 dark:hover:bg-gray-900 dark:hover:shadow-xl"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <div className="relative h-[250px] w-full">
                        <BlurImage
                            src={image}
                            alt={description}
                            className="absolute h-full w-full"
                        />
                    </div>
                    <div className="flex flex-grow flex-col p-6">
                        <p className="mt-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                            {date}
                        </p>
                        <h2 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-50">
                            <p className="hover:underline">{title}</p>
                        </h2>
                        <p className="mt-2 flex-grow text-sm text-zinc-600 dark:text-zinc-300">
                            {description}
                        </p>
                        {tech && <TechStack tech={tech} />}
                        <p className="mt-6 flex items-center text-sm font-medium text-zinc-800 transition dark:text-zinc-50">
                            <ProjectLinkIcon />
                            <span className="ml-2">{link_text}</span>
                        </p>
                    </div>
                </m.li>
            </LazyMotion>
        </Link>
    )
}

export default ProjectCard
