'use client'

import ThemeSwitcher from '@/components/ThemeSwitcher'
import menuItems from '@/const/MenuItems'
import { useScroll } from 'framer-motion'
import React from 'react'

import NavbarDropdownMenuMobile from '@/components/Navbar-DropdownMenu-Mobile'
import NavbarFloating from '@/components/Navbar-Floating'
import { ContactHighlightNavbar, MainHighlightNavbar } from '@/components/Navbar-Items'

type NavbarProps = React.ComponentProps<'div'>

const Navbar = ({ className, ...props }: NavbarProps) => {
    const { scrollY } = useScroll()
    return (
        <nav>
            <div {...props} className={`${className}`}>
                <header className="flex items-center gap-4 lg:gap-6">
                    <MainHighlightNavbar />
                </header>
                <div className="flex items-center gap-2 md:gap-4">
                    <div className={`block items-center gap-2 sm:hidden`}>
                        <NavbarDropdownMenuMobile menuItems={menuItems} />
                    </div>
                    <ContactHighlightNavbar />
                    <ThemeSwitcher />
                </div>
            </div>
            {scrollY.get() > 100 && <NavbarFloating />}
        </nav>
    )
}

export default Navbar
