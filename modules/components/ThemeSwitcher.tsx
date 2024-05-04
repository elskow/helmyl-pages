'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BiSolidSun } from 'react-icons/bi'
import { FaRegMoon } from 'react-icons/fa'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    // @ts-ignore
    const [icon, setIcon] = useState(FaRegMoon)

    useEffect(() => {
        if (theme === 'dark') {
            // @ts-ignore
            setIcon(<BiSolidSun className="theme-icon" />)
        } else {
            // @ts-ignore
            setIcon(<FaRegMoon className="theme-icon" />)
        }
    }, [theme])

    return (
        <LazyMotion features={domAnimation}>
            <m.button
                aria-label="theme toggle button"
                className="rounded-full bg-neutral-200 p-2 transition-all duration-300 ease-in-out hover:bg-neutral-300 hover:focus:outline-none hover:focus:ring-2 hover:focus:ring-slate-500 hover:focus:ring-opacity-50 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:focus:ring-slate-400 dark:hover:focus:ring-opacity-50 bg-opacity-40"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                initial={false}
                animate={theme}
            >
                {icon}
            </m.button>
        </LazyMotion>
    )
}
export default ThemeSwitcher
