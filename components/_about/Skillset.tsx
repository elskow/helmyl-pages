'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BiLogoGoLang, BiLogoJava, BiLogoPython } from 'react-icons/bi'
import { FaReact, FaDocker } from 'react-icons/fa'
import { SiApachekafka, SiMicrosoftazure, SiPowerbi } from 'react-icons/si'

import { motion } from 'framer-motion'

const logos = [
    { Icon: BiLogoGoLang, link: 'https://golang.org/', text: 'GoLang' },
    { Icon: BiLogoJava, link: 'https://www.java.com/', text: 'Java' },
    { Icon: BiLogoPython, link: 'https://www.python.org/', text: 'Python' },
    { Icon: FaReact, link: 'https://reactjs.org/', text: 'React' },
    { Icon: SiApachekafka, link: 'https://kafka.apache.org/', text: 'Apache Kafka' },
    { Icon: SiMicrosoftazure, link: 'https://azure.microsoft.com/', text: 'Microsoft Azure' },
    { Icon: FaDocker, link: 'https://www.docker.com/', text: 'Docker' },
    { Icon: SiPowerbi, link: 'https://powerbi.microsoft.com/', text: 'Power BI' },
]

const Skillset = () => {
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

    return (
        <div
            ref={scrollRef}
            className="mx-2 inline-flex w-full flex-nowrap overflow-hidden py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
            <ul className="flex max-w-none md:justify-start">
                {logos.concat(logos).map((logo, index) => (
                    <Link
                        key={index}
                        href={logo.link}
                        target="_blank"
                        title={logo.text}
                        rel="noopener noreferrer"
                    >
                        <motion.li
                            className={`mx-8 ${hoveredLogo === index ? 'cursor-pointer text-teal-500' : ''} ${hoveredLogo !== null && hoveredLogo !== index ? 'opacity-60' : ''}`}
                            onMouseEnter={() => {
                                stopScroll()
                                setHoveredLogo(index)
                            }}
                            onMouseLeave={() => {
                                startScroll()
                                setHoveredLogo(null)
                            }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1, color: '#38b2ac' }}
                        >
                            <logo.Icon className="text-4xl md:text-5xl" />
                        </motion.li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Skillset
