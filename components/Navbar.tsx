import { memo } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

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
    return (
        <nav className={`flex select-none items-center justify-between py-4 ${className}`}>
            <header className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2 pr-4">
                    <h1 className="flex self-center text-xl font-extrabold transition duration-200 ease-in-out hover:text-teal-700 dark:hover:text-green-400 lg:text-lg">
                        helmyl.com
                    </h1>
                </Link>
                <div className="hidden items-center gap-4 align-middle sm:flex lg:gap-6 lg:text-lg">
                    {Object.entries(menuItems).map(([key, item]) => (
                        <Link
                            key={key}
                            href={item.href}
                            className="item-menu-hover self-center font-medium transition duration-200 ease-in-out hover:font-semibold"
                        >
                            {item.name}
                        </Link>
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
                                <Link href={item.href} key={item.name} className="flex w-full">
                                    <DropdownMenuItem className="flex w-full min-w-[8rem] items-center gap-2 font-medium">
                                        <span>{item.name}</span>
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                            <Link href="/contact">
                                <DropdownMenuItem>Contact Me</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link
                    href="/contact"
                    className="item-menu-hover hidden self-center font-medium transition duration-200 ease-in-out hover:font-semibold sm:block lg:text-lg"
                >
                    Contact Me
                </Link>
                <ThemeSwitcher />
            </div>
        </nav>
    )
})

Navbar.displayName = 'Navbar'
export default Navbar
