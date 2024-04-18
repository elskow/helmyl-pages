'use client'

import type typeMenuItems from '@/const/MenuItems'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const MobileNavbarDropdownMenu = ({ menuItems }: { menuItems: typeof typeMenuItems }) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <LazyMotion features={domAnimation}>
            <div className="relative inline-block text-left antialiased">
                <div>
                    <m.button
                        type="button"
                        className="flex items-center gap-2 text-sm"
                        id="menu-button"
                        aria-expanded={isMenuOpen}
                        aria-haspopup="true"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95, opacity: 0.5, transition: { duration: 0.1 } }}
                    >
                        Menu <ChevronDownIcon className="w-4 h-4" />
                    </m.button>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <m.div
                            className="min-h-screen w-screen fixed inset-0 bg-black bg-opacity-50 z-40 filter backdrop-blur-sm"
                            onClick={() => setMenuOpen(!isMenuOpen)}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                                exit: { opacity: 0 },
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <m.div
                                className="fixed inset-x-4 top-5 z-50 origin-top bg-white px-8 py-9 ring-1 ring-zinc-900/5 dark:bg-slate-800 dark:ring-zinc-800 rounded-lg shadow-lg"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex={-1}
                                variants={{
                                    hidden: { opacity: 0, y: -10 },
                                    visible: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: -10 },
                                }}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="flex flex-row-reverse items-center justify-between pb-4">
                                    <m.button
                                        aria-label="Close menu"
                                        className="-m-1 p-1"
                                        type="button"
                                        onClick={() => setMenuOpen(!isMenuOpen)}
                                        animate={{ rotate: 180 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                        >
                                            <path
                                                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </m.button>
                                    <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-200">
                                        Navigation
                                    </h2>
                                </div>
                                <nav className="mt-6">
                                    <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                        {Object.values(menuItems).map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block py-2 focus:outline-none"
                                                draggable={false}
                                                unselectable={'on'}
                                                prefetch={false}
                                            >
                                                <m.span whileTap={{ opacity: 0.5, scale: 0.95 }}>
                                                    {item.name}
                                                </m.span>
                                            </Link>
                                        ))}
                                        <Link
                                            href="/contact"
                                            draggable={false}
                                            unselectable={'on'}
                                            prefetch={false}
                                            className="block py-2 focus:outline-none"
                                        >
                                            <m.span whileTap={{ opacity: 0.5, scale: 0.95 }}>
                                                Contact Me
                                            </m.span>
                                        </Link>
                                    </ul>
                                </nav>
                            </m.div>
                        </m.div>
                    )}
                </AnimatePresence>
            </div>
        </LazyMotion>
    )
}

export default MobileNavbarDropdownMenu