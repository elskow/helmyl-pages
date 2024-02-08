import '@/styles/globals.css'
import '@/styles/prism.css'

import Navbar from '@/components/Navbar'
import { inclusiveSans, newsreader, jetBrainsMono } from '@/lib/fonts'
import { ThemeProviders } from './providers'
import Script from 'next/script'

import CONFIG from '@/blog.config'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL(CONFIG.url),
    title: {
        default: CONFIG.title,
        template: `%s | ${CONFIG.title}`,
    },
    description: CONFIG.siteDescription,
    openGraph: {
        title: CONFIG.title,
        description: CONFIG.siteDescription,
        url: CONFIG.url,
        locale: CONFIG.lang,
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            className={`${inclusiveSans.variable} ${newsreader.variable} ${jetBrainsMono.variable} font-sans`}
            lang={CONFIG.lang}
            suppressHydrationWarning
        >
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
            <Script
                async
                src="https://us.umami.is/script.js"
                data-website-id="80b9e23d-c5ef-463d-9f8a-fca203abdc5a"
            />
            <body className="bg-light dark:bg-dark min-h-screen">
                <ThemeProviders>
                    <div
                        className="z-10 min-h-screen bg-gradient-to-tr from-green-50 to-neutral-200 bg-fixed px-4 dark:from-slate-950 dark:to-slate-800"
                        style={{ position: 'relative', zIndex: '20' }}
                    >
                        <Navbar className="mx-auto pt-6 md:pt-8 lg:max-w-5xl lg:pt-14" />
                        {children}
                    </div>
                    <div
                        className="absolute h-2/5 w-4/12 max-w-full overflow-clip rounded-full bg-white opacity-25 blur-6xl dark:bg-slate-800"
                        style={{
                            top: '0',
                            right: '0',
                            zIndex: '0',
                        }}
                    />
                    <div
                        className="absolute z-10 h-3/4 w-4/12 max-w-full overflow-clip rounded-full bg-green-100 opacity-25 blur-6xl dark:bg-slate-900 dark:opacity-10"
                        style={{
                            bottom: '0',
                            left: '0',
                            zIndex: '0',
                        }}
                    />
                </ThemeProviders>
            </body>
        </html>
    )
}
