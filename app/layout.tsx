import 'styles/globals.css'
import 'styles/prism.css'

import { assistant, jetBrainsMono, newsreader } from '@/lib/fonts'
import { ThemeProviders } from './providers'

import ProgressbarProvider from '@/components/Progressbar-Provider'
import type { Metadata } from 'next'
import Script from 'next/script'
import * as process from 'node:process'

export const metadata: Metadata = {
    metadataBase: new URL(`https://helmyl.com`),
    title: {
        default: 'Helmy Luqmanulhakim',
        template: `%s | Helmy Luqmanulhakim`,
    },
    description: 'A personal website.',
    openGraph: {
        title: 'Helmy Luqmanulhakim',
        description: 'A personal website.',
        url: 'https://helmyl.com',
        locale: 'en_US',
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            className={`${assistant.variable} ${newsreader.variable} ${jetBrainsMono.variable} font-sans`}
            lang={`en_US`}
            suppressHydrationWarning
        >
            <Favicon />
            <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
            <Script
                src={`https://us.umami.is/script.js`}
                data-website-id={process.env.UMAMI_DATA_WEBSITE_ID}
                async
            />
            <body suppressHydrationWarning>
                <ThemeProviders>
                    <ProgressbarProvider>{children}</ProgressbarProvider>
                </ThemeProviders>
            </body>
        </html>
    )
}

const Favicon = () => {
    return (
        <>
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
        </>
    )
}
