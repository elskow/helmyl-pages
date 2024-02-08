'use client'
import { ThemeProvider } from 'next-themes'
export function ThemeProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            {children}
        </ThemeProvider>
    )
}
