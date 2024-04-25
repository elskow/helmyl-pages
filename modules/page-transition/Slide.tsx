'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type SlideProps = {
    children: React.ReactNode
    className?: string
    delay?: number
}

export const Slide = ({ children, className, delay = 0 }: SlideProps) => {
    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (isInview) {
            controls.start('stop')
        }
    }, [controls, isInview])

    return (
        <motion.div
            ref={ref}
            variants={{
                start: { opacity: 0, translateY: 10 },
                stop: { opacity: 1, translateY: 0 },
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.3,
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
