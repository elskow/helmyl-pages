'use client'

import React, { memo } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
} from '@/components/ui/dropdown-menu'

import menuItems from '@/const/MenuItems'

export interface NavbarProps {
    className?: string
}

const getClassName = (pathname: string, href: string) => {
    const baseClass = 'self-center transition duration-200 ease-in-out'
    let activeClass = 'font-medium'
    if (href !== '/' && pathname.startsWith(href)) {
        activeClass = 'font-bold'
    } else if (href === '/' && pathname === '/') {
        activeClass = 'font-bold'
    }
    return `${baseClass} ${activeClass}`
}

interface AnimatedLinkProps {
    href: string
    getClassName: (_pathname: string, _href: string) => string
    children: React.ReactNode
}

const AnimatedLink = memo(({ href, getClassName, children }: AnimatedLinkProps) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`${getClassName(pathname, href)} item-menu-hover`}
            draggable={false}
            unselectable={'on'}
        >
            {children}
        </Link>
    )
})

AnimatedLink.displayName = 'AnimatedLink'

const Navbar = memo(({ className }: NavbarProps) => {
    const pathname = usePathname()

    return (
        <nav className={`flex select-none items-center justify-between py-4 ${className}`}>
            <header className="flex items-center gap-4 lg:gap-6">
                <Link
                    href="/"
                    className="flex items-center lg:text-lg"
                    draggable={false}
                    unselectable={'on'}
                >
                    <h1 className={`${getClassName(pathname, '/')} item-menu-hover hidden sm:flex`}>
                        Home
                    </h1>
                    <h1 className={`self-center font-bold sm:hidden`}>helmyl.com</h1>
                </Link>
                <div className="hidden items-center gap-4 align-middle sm:flex lg:gap-6 lg:text-lg">
                    {Object.entries(menuItems).map(([key, item]) => (
                        <AnimatedLink key={key} href={item.href} getClassName={getClassName}>
                            {item.name}
                        </AnimatedLink>
                    ))}
                </div>
            </header>
            <div className="flex items-center gap-2 md:gap-4">
                <div className="block items-center gap-2 sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <span className="flex items-center gap-1 text-sm">
                                Menu <ChevronDownIcon />
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col gap-2 transition duration-300 ease-in-out">
                            {Object.values(menuItems).map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.name}
                                    className="flex w-full"
                                    draggable={false}
                                    unselectable={'on'}
                                >
                                    <DropdownMenuItem className={getClassName(pathname, item.href)}>
                                        <span>{item.name}</span>
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                            <Link href="/contact" draggable={false} unselectable={'on'}>
                                <DropdownMenuItem className={getClassName(pathname, '/contact')}>
                                    <span>Contact Me</span>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link
                    href="/contact"
                    className={`hidden sm:flex ${getClassName(
                        pathname,
                        '/contact'
                    )} item-menu-hover `}
                    draggable={false}
                    unselectable={'on'}
                >
                    <span>Contact Me</span>
                </Link>
                <ThemeSwitcher />
            </div>
        </nav>
    )
})

Navbar.displayName = 'Navbar'
export default Navbar
