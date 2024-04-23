'use client'

import NavbarDropdownMenuMobile from '@/components/Navbar-DropdownMenu-Mobile'
import { ContactHighlightNavbar, MainHighlightNavbar } from '@/components/Navbar-Items'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import menuItems from '@/const/MenuItems'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'

const NavbarFloating = () => {
    return (
        <AnimatePresence mode={'sync'}>
            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={`block md:hidden fixed top-0 left-0 right-0 z-10 px-4 py-5 bg-neutral-200 bg-opacity-20 dark:bg-slate-900 dark:bg-opacity-10 filter backdrop-blur-6xl`}
                >
                    <div className={`flex items-center justify-between lg:max-w-5xl mx-auto`}>
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
                </m.div>
            </LazyMotion>
        </AnimatePresence>
    )
}

export default NavbarFloating
