'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LinkIcon from '@/components/_project/LinkIcon'
import TechStack from '@/components/_project/TechStackBadge'

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
