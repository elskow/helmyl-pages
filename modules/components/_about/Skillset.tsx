'use client'

import Link from 'next/link'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import Skills from '../../../const/Skills'

import { LazyMotion, domAnimation, m } from 'framer-motion'

const Skillset = ({ ...props }) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const intervalId = useRef<number | null>(null)
    const [hoveredLogo, setHoveredLogo] = useState<number | null>(null)

    const startScroll = () => {
        if (intervalId.current !== null) {
            clearInterval(intervalId.current)
        }
        intervalId.current = window.setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                    scrollRef.current.scrollLeft = 0
                }
            }
        }, 20)
    }

    const stopScroll = () => {
        if (intervalId.current !== null) {
            window.clearInterval(intervalId.current)
            intervalId.current = null
        }
    }

    useEffect(() => {
        startScroll()
        return () => stopScroll()
    }, [])

    const handleMouseEnter = useCallback((index: number) => {
        stopScroll()
        setHoveredLogo(index)
    }, [])

    const handleMouseLeave = useCallback(() => {
        startScroll()
        setHoveredLogo(null)
    }, [])

    return (
        <div
            ref={scrollRef}
            className="mx-2 inline-flex w-full flex-nowrap overflow-hidden py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
            {...props}
        >
            <ul className="flex max-w-none md:justify-start">
                {Skills.concat(Skills).map((logo, index) => (
                    <Link
                        key={`${logo.text}-${index}`}
                        href={logo.link}
                        target="_blank"
                        title={logo.text}
                        rel="noopener noreferrer"
                        draggable={false}
                        unselectable={'on'}
                    >
                        <LazyMotion features={domAnimation}>
                            <m.li
                                className={`mx-8 ${
                                    hoveredLogo === index ? 'cursor-pointer text-teal-500' : ''
                                } ${hoveredLogo !== null && hoveredLogo !== index ? 'opacity-60' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.1, color: '#38b2ac' }}
                            >
                                <logo.Icon className="text-4xl md:text-5xl" />
                            </m.li>
                        </LazyMotion>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default memo(Skillset)
