import 'styles/globals.css'
import 'styles/prism.css'

import Navbar from '@/components/Navbar'
import { inclusiveSans, newsreader, jetBrainsMono } from '@/lib/fonts'
import { ThemeProviders } from './providers'

import CONFIG from '../../blog.config'

import type { Metadata } from 'next'
import Footer from '@/components/Footer'

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
            <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/favicons/android-icon-192x192.png"
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
            <script
                async
                src="https://us.umami.is/script.js"
                data-website-id="80b9e23d-c5ef-463d-9f8a-fca203abdc5a"
            />
            <body className="min-h-screen bg-gradient-to-tr from-green-50 to-neutral-200 dark:bg-gradient-to-tr dark:from-slate-800 dark:to-slate-800">
                <ThemeProviders>
                    <div
                        className={`bg-dot-large-neutral-500/[0.2] dark:bg-dot-large-slate-100/[0.07]`}
                    >
                        <div
                            className="z-10 min-h-screen px-4 sm:px-8 lg:py-2"
                            style={{ position: 'relative', zIndex: '20' }}
                        >
                            <Navbar className="mx-auto pt-6 md:pt-8 lg:max-w-5xl lg:pt-14" />
                            {children}
                            <Footer className="mx-auto pb-6 pt-6 lg:max-w-5xl lg:pb-12 lg:pt-14" />
                        </div>
                    </div>
                </ThemeProviders>
            </body>
        </html>
    )
}
