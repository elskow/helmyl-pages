'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'

const GithubLoginButton = () => {
    const supabase = createClient()

    async function handleLogin() {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${window.location.origin}/guest-book`,
                skipBrowserRedirect: false,
            },
        })
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((_, session) => {
            if (session?.user) {
                window.location.href = '/guest-book'
            }
        })
    }, [supabase])
    return (
        <button
            title={'Login with GitHub'}
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-neutral-100 text-neutral-900 hover:bg-neutral-300 hover:text-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-700 transition-all duration-100 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-300 dark:disabled:hover:bg-slate-700 dark:disabled:hover:text-slate-200"
            onClick={handleLogin}
        >
            <FaGithub className="text-xl" />
        </button>
    )
}

export default GithubLoginButton
