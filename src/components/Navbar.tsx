import React, { memo } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
} from '@/components/ui/dropdown-menu'

import menuItems from '@/const/MenuItems'
import { ContactHighlightNavbar, MainHighlightNavbar } from '@/components/Highlight-Navbar'

const Navbar = memo(({ ...props }) => {
    return (
        <nav {...props}>
            <header className="flex items-center gap-4 lg:gap-6">
                <MainHighlightNavbar />
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
                                    prefetch={false}
                                >
                                    <DropdownMenuItem className={``}>
                                        <span>{item.name}</span>
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                draggable={false}
                                unselectable={'on'}
                                prefetch={false}
                            >
                                <DropdownMenuItem>
                                    <span>Contact Me</span>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <ContactHighlightNavbar />
                <ThemeSwitcher />
            </div>
        </nav>
    )
})

Navbar.displayName = 'Navbar'
export default Navbar
