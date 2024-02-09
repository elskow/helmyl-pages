'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectProps {
    href: string
    title: string
    description: string
    image: string
}

export const LinkIcon = () => {
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
}

const ProjectCard = ({ title, description, image, href }: ProjectProps) => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.1,
                duration: 0.8,
            },
        },
        hover: {
            scale: 1.02,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20,
                duration: 0.3,
            },
        },
    }

    return (
        <Link href={href} target="_blank">
            <motion.div
                className="delay-50 flex flex-col justify-between rounded-lg p-6 text-black transition hover:bg-white hover:text-slate-700 dark:text-primary dark:hover:bg-primary dark:hover:bg-opacity-5 dark:hover:text-secondary"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
            >
                <div className="mb-5 flex max-h-[20vh] justify-center overflow-hidden">
                    <Image
                        src={image}
                        width={300}
                        height={300}
                        className="my-5 w-full rounded-lg object-cover"
                        alt={description}
                    />
                </div>
                <h1 className="mb-4 mt-2 text-xl font-semibold">{title}</h1>
                <p className="mb-6 mt-4 text-sm">{description}</p>
                <p className="text-dark mt-6 flex items-center">
                    <LinkIcon />
                    <span className="ml-2 text-sm font-semibold">
                        {href.replace(/^https?:\/\//, '')}
                    </span>
                </p>
            </motion.div>
        </Link>
    )
}

export default ProjectCard
