'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect } from 'react'

const GithubLogoutButton = () => {
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut({ scope: 'global' })
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((_, session) => {
            if (!session?.user) {
                window.location.href = '/guest-book'
            }
        })
    }, [supabase])

    return (
        <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-red-500 text-white hover:bg-red-800 disabled:bg-red-800 disabled:text-white transition-all duration-100 dark:bg-red-800 dark:text-white dark:hover:bg-red-700 dark:disabled:bg-red-700 dark:disabled:text-white"
            onClick={handleLogout}
        >
            Logout
        </button>
    )
}

export default GithubLogoutButton
