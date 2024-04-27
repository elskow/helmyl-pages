'use client'
import ProgressbarProvider from '@/components/Progressbar-Provider'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            <ProgressbarProvider>{children}</ProgressbarProvider>
        </ThemeProvider>
    )
}
