'use client'

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type SlideProps = {
    children: React.ReactNode
    className?: string
    delay?: number
}

export const Slide = ({ children, className, delay = 0 }: SlideProps) => {
    const ref = useRef(null)
    const controls = useAnimation()

    useEffect(() => {
        controls.start('stop')
    }, [controls])

    return (
        <motion.div
            ref={ref}
            variants={{
                start: {
                    opacity: 0,
                    translateY: 10,
                    pointerEvents: 'none',
                },
                stop: {
                    opacity: 1,
                    translateY: 0,
                    pointerEvents: 'auto',
                },
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.2,
                delay: delay,
                stiffness: 0.5,
            }}
            animate={controls}
            initial="start"
            className={className}
        >
            {children}
        </motion.div>
    )
}
