'use client'

import { usePathname } from 'next/navigation'

export default function Unmount({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    if (pathname.startsWith('/keystatic')) return null
    return <>{children}</>
}
