'use client'

import Link from 'next/link'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import menuItems from '../../const/MenuItems'

import Tooltip from '@/components/Tooltip'
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

const SpecialSectionNavbar = () => {
    const pathname = usePathname()
    return (
        <Link
            href="/guest-book"
            className={`hidden sm:flex ${pathname.startsWith('/guest-book') ? 'font-bold' : ''}`}
            draggable={false}
            unselectable={'on'}
        >
            <Tooltip tooltipText="Guest Book" position={'bottom'}>
                <HiOutlineChatAlt2 className="self-center mr-2" />
            </Tooltip>
        </Link>
    )
}

export { MainHighlightNavbar, SpecialSectionNavbar }
