'use client'

import Link from 'next/link'
import menuItems from '@/const/MenuItems'
import React from 'react'

import { usePathname } from 'next/navigation'

const MainHighlightNavbar = () => {
    const pathname = usePathname()

    return (
        <>
            <Link
                href="/"
                className="flex items-center lg:text-lg"
                draggable={false}
                unselectable={'on'}
            >
                <h1
                    className={`item-menu-hover hidden sm:flex ${pathname === '/' ? 'font-bold' : ''}`}
                >
                    Home
                </h1>
                <h1 className={`self-center font-semibold sm:hidden`}>helmyl.com</h1>
            </Link>
            <div className="hidden items-center gap-4 align-middle sm:flex lg:gap-6 lg:text-lg">
                {Object.entries(menuItems).map(([key, item]) => (
                    <Link
                        href={item.href}
                        key={key}
                        draggable={false}
                        unselectable={'on'}
                        className={`item-menu-hover ${
                            pathname.startsWith(item.href) ? 'font-bold' : ''
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
    )
}

const ContactHighlightNavbar = () => {
    const pathname = usePathname()
    return (
        <Link
            href="/contact"
            className={`item-menu-hover hidden sm:flex ${pathname.startsWith('/contact') ? 'font-bold' : ''}`}
            draggable={false}
            unselectable={'on'}
        >
            <span>Contact Me</span>
        </Link>
    )
}

export { MainHighlightNavbar, ContactHighlightNavbar }
