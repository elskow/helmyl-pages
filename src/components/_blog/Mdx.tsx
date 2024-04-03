'use client'

import { cn } from '@/utils/cn'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'

import { LuCopy, LuCopyCheck } from 'react-icons/lu'

const Pre = ({ children, className }: { children: ReactNode; className?: string }) => {
    const textInput = useRef<any>(null)
    const [hovered, setHovered] = useState(false)
    const [copied, setCopied] = useState(false)

    const onEnter = () => {
        setHovered(true)
    }
    const onExit = () => {
        setHovered(false)
        setCopied(false)
    }

    const onCopy = () => {
        setCopied(true)
        if (textInput.current) {
            navigator.clipboard.writeText(textInput.current.textContent)
        }
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    const buttonVariants = {
        copied: {
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, -10, 10, 0], // Wiggle effect
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
        notCopied: {
            scale: 1,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative z-0">
            {hovered && (
                <motion.button
                    aria-label="Copy code"
                    className={cn(
                        'border-1 absolute right-2 top-2 z-10 rounded-xl bg-slate-800 p-1 text-slate-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 dark:border-slate-800 dark:bg-slate-900',
                        copied
                            ? 'border-green-400 focus:border-green-400 focus:outline-none'
                            : 'border-slate-300'
                    )}
                    onClick={onCopy}
                    variants={buttonVariants}
                    animate={copied ? 'copied' : 'notCopied'}
                    whileHover={{ scale: 1.1 }} // Add scale effect on hover
                    whileTap={{ scale: 0.9 }} // Add scale effect on tap
                >
                    <>
                        {copied ? (
                            <LuCopyCheck size={18} className="text-green-400" />
                        ) : (
                            <LuCopy size={18} />
                        )}
                    </>
                </motion.button>
            )}

            <pre className={className}>{children}</pre>
        </div>
    )
}

const CustomLink = (props: any) => {
    const href = props.href

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props} draggable={false} unselectable={'on'}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Images({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="flex justify-center">
            <figure className="mb:p-5 relative z-0 w-fit rounded-lg bg-white p-2 px-10 dark:bg-slate-900">
                <div className="flex w-full justify-center">
                    <Image
                        src={src}
                        alt={alt}
                        className="max-h-[60vh] max-w-full rounded-lg object-cover object-center drop-shadow-lg lg:max-h-[80vh] lg:rounded-xl"
                        width={800}
                        height={800}
                        loading="lazy"
                    />
                </div>
                <p className="py-5 text-center text-sm text-gray-500 dark:text-gray-400">{alt}</p>
            </figure>
        </div>
    )
}

const components: MDXComponents = {
    Image: Images,
    img: Images,
    images: Images,
    pre: Pre,
    a: CustomLink,
}

export function MdxRenderer({ code }: { code: string }) {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}
