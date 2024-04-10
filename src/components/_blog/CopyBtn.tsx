'use client'

import { cn } from '@/lib/cn'
import { m, LazyMotion, domAnimation } from 'framer-motion'
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
            <LazyMotion features={domAnimation}>
                {hovered && (
                    <m.button
                        aria-label="Copy code"
                        className={cn(
                            'border-1 absolute right-3 top-3 z-10 rounded-xl bg-slate-800 p-1 text-slate-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 dark:border-slate-800 dark:bg-slate-900',
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
                    </m.button>
                )}
            </LazyMotion>

            <pre className={className}>{children}</pre>
        </div>
    )
}

export default Pre
