'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, memo } from 'react'
import { BiSolidSun } from 'react-icons/bi'
import { FaRegMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ThemeSwitcher = memo(() => {
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
            className="rounded-full bg-neutral-200 p-2 transition-all duration-300 ease-in-out hover:bg-neutral-300 hover:focus:outline-none hover:focus:ring-2 hover:focus:ring-slate-500 hover:focus:ring-opacity-50 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:focus:ring-slate-400 dark:hover:focus:ring-opacity-50"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            initial={false}
            animate={theme}
        >
            {theme === 'dark' ? (
                <motion.div variants={iconVariants}>
                    <BiSolidSun className="theme-icon" />
                </motion.div>
            ) : (
                <motion.div variants={iconVariants}>
                    <FaRegMoon className="theme-icon" />
                </motion.div>
            )}
        </motion.button>
    )
})
ThemeSwitcher.displayName = 'ThemeSwitcher'

export default ThemeSwitcher
