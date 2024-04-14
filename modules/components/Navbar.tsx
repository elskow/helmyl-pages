import ThemeSwitcher from '@/components/ThemeSwitcher'
import menuItems from '@/const/MenuItems'
import React from 'react'

import NavbarDropdownMenuMobile from '@/components/Navbar-DropdownMenu-Mobile'
import { ContactHighlightNavbar, MainHighlightNavbar } from '@/components/Navbar-Items'

type NavbarProps = React.ComponentProps<'nav'>

const Navbar = ({ className, ...props }: NavbarProps) => {
    return (
        <nav {...props} className={`${className}`}>
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
        </nav>
    )
}

export default Navbar
