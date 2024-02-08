'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BiSolidSun } from 'react-icons/bi'
import { FaRegMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const iconVariants = {
        dark: { rotate: 360 },
        light: { rotate: 0 },
    }

    return (
        <motion.button
            aria-label="theme toggle button"
            className="p-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            initial={false}
            animate={theme}
        >
            {theme === 'dark' ? (
                <motion.div variants={iconVariants}>
                    <BiSolidSun className="theme-icon dark:hover:fill-white" />
                </motion.div>
            ) : (
                <motion.div variants={iconVariants}>
                    <FaRegMoon className="theme-icon" />
                </motion.div>
            )}
        </motion.button>
    )
}

export default ThemeSwitcher
