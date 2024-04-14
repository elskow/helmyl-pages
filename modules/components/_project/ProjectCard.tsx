'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import Link from 'next/link'

import ImageProjectMdx from '@/components/_project/ImageProjectMdx'
import ProjectLinkIcon from '@/components/_project/ProjectLinkIcon'
import TechStack from '@/components/_project/TechStackBadge'

const ProjectCard = ({ title, description, image, href, tech, date, index, ...props }) => {
    const cardVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 30,
                delay: 0.1 * index,
                duration: 1,
            },
        },
        hover: {
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
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
                    className="group relative flex h-[500px] w-[300px] select-none flex-col items-start rounded-lg border border-transparent bg-white bg-opacity-20 hover:bg-opacity-10 dark:border-gray-700 dark:bg-slate-800 dark:bg-opacity-60 dark:hover:bg-gray-900 border-gray-400 border-opacity-20"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <div className="relative h-[250px] w-full">
                        <ImageProjectMdx src={image} alt={description} />
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
                        </p>
                    </div>
                </m.li>
            </LazyMotion>
        </Link>
    )
}

export default ProjectCard
