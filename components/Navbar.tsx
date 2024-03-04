'use client'

import { memo, useCallback } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useAnimation } from 'framer-motion'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
} from '@/components/ui/dropdown-menu'

const menuItems: Record<string, { name: string; href: string }> = {
    about: {
        name: 'About',
        href: '/about',
    },
    projects: {
        name: 'Projects',
        href: '/projects',
    },
    blog: {
        name: 'Blog',
        href: '/blog',
    },
}

export interface NavbarProps {
    className?: string
}

const Navbar = memo(({ className }: NavbarProps) => {
    const pathname = usePathname()
    const controls = useAnimation()

    const getClassName = (href: string) => {
        const baseClass =
            'item-menu-hover self-center transition duration-200 ease-in-out hover:font-bold'
        let activeClass = 'font-medium'
        if (href !== '/' && pathname.startsWith(href)) {
            activeClass = 'font-bold'
        } else if (href === '/' && pathname === '/') {
            activeClass = 'font-bold'
        }
        return `${baseClass} ${activeClass}`
    }

    const handleMouseEnter = async () => {
        await controls.start({
            scale: 1.1,
            transition: { duration: 0.5 },
        })
    }

    const handleMouseLeave = async () => {
        await controls.start({
            scale: 1.0,
            transition: { duration: 0.5 },
        })
    }

    const AnimatedLink = ({ href, children }) => {
        const controls = useAnimation()
        const className = getClassName(href)

        const handleMouseEnter = useCallback(async () => {
            await controls.start({
                scale: 1.1,
                transition: { duration: 0.5 },
            })
        }, [controls])

        const handleMouseLeave = useCallback(async () => {
            await controls.start({
                scale: 1.0,
                transition: { duration: 0.5 },
            })
        }, [controls])

        return (
            <Link href={href} className={className}>
                <motion.span
                    animate={controls}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {children}
                </motion.span>
            </Link>
        )
    }

    return (
        <nav className={`flex select-none items-center justify-between py-4 ${className}`}>
            <header className="flex items-center gap-4">
                <Link href="/" className="flex items-center pr-2 lg:text-lg">
                    <h1 className={`${getClassName('/')} hidden sm:flex`}>Home</h1>
                    <h1 className={`${getClassName('/')} sm:hidden`}>helmyl.com</h1>
                </Link>
                <div className="hidden items-center gap-4 align-middle sm:flex lg:gap-6 lg:text-lg">
                    {Object.entries(menuItems).map(([key, item]) => (
                        <AnimatedLink key={key} href={item.href}>
                            {item.name}
                        </AnimatedLink>
                    ))}
                </div>
            </header>
            <div className="flex items-center gap-2 md:gap-4">
                <div className="block items-center gap-2 sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <motion.span
                                className="flex items-center gap-1 text-sm"
                                animate={controls}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Menu <ChevronDownIcon />
                            </motion.span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col gap-2 transition duration-300 ease-in-out">
                            {Object.values(menuItems).map((item) => (
                                <Link href={item.href} key={item.name} className="flex w-full">
                                    <DropdownMenuItem className={getClassName(item.href)}>
                                        <motion.span
                                            animate={controls}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {item.name}
                                        </motion.span>
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                            <Link href="/contact">
                                <DropdownMenuItem className={getClassName('/contact')}>
                                    <motion.span
                                        animate={controls}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Contact Me
                                    </motion.span>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link href="/contact" className={`hidden  sm:flex ${getClassName('/contact')}`}>
                    <span>Contact Me</span>
                </Link>
                <ThemeSwitcher />
            </div>
        </nav>
    )
})

Navbar.displayName = 'Navbar'
export default Navbar
