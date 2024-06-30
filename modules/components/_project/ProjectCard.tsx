"use client"

import Link from 'next/link'
import ProjectLinkIcon from '@/components/_project/ProjectLinkIcon'
import TechStack from '@/components/_project/TechStackBadge'

const ProjectCard = ({ title, description, image, href, tech, date, ...props }) => {
    return (
        <div {...props} className="group relative flex flex-col items-start rounded-lg bg-neutral-200 dark:bg-slate-800 border dark:border-gray-700 border-gray-500 max-h-[30rem] w-full mx-auto max-w-[30rem] transition-all duration-300 ease-in-out hover:shadow-lg">
            <div className="flex flex-grow flex-col p-6">
                <p className="mt-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    {date}
                </p>
                <Link href={href} aria-label={`Learn more about ${title}`} className="mt-2 text-base font-bold text-zinc-800 dark:text-zinc-50 hover:underline">
                    {title}
                </Link>
                <p className="mt-2 flex-grow text-sm text-zinc-600 dark:text-zinc-300">
                    {description}
                </p>
                <div className="hidden md:flex mt-4 space-x-2">
                    {tech && <TechStack tech={tech} />}
                </div>
                <Link href={href} aria-label="Project link" className="mt-6 flex items-center text-sm font-medium text-zinc-800 dark:text-zinc-50 hover:text-zinc-600">
                    <ProjectLinkIcon />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard