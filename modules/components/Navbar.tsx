'use client'

import ThemeSwitcher from '@/components/ThemeSwitcher'

import menuItems from '@/const/MenuItems'
import { useScroll } from 'framer-motion'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'

const NavbarDropdownMenuMobile = dynamic(() => import('@/components/Navbar-DropdownMenu-Mobile'))

import NavbarFloating from '@/components/Navbar-Floating'
import { ContactHighlightNavbar, MainHighlightNavbar } from '@/components/Navbar-Items'
import Unmount from '@/components/Unmount'

type NavbarProps = React.ComponentProps<'div'>

const Navbar = ({ className, ...props }: NavbarProps) => {
    const { scrollY } = useScroll()
    const [hasScrolled, setHasScrolled] = React.useState(false)

    useEffect(() => {
        const unsubscribe = scrollY.onChange(() => {
            if (scrollY.get() > 100) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
        })
        return () => unsubscribe()
    }, [scrollY])

    return (
        <nav>
            <Unmount>
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
                {hasScrolled && <NavbarFloating />}
            </Unmount>
        </nav>
    )
}

export default Navbar
