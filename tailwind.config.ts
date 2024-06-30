import type { Config } from 'tailwindcss'

require('tailwindcss/defaultTheme')
require('tailwindcss/colors')

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './modules/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
            },

            fontFamily: {
                sans: ['var(--font-sans)'],
                newsreader: ['var(--font-newsreader)'],
                code: ['var(--font-jetbrains-mono)'],
            },
            letterSpacing: {
                'extra-wide': '0.2em',
                'extra-tight': '-0.12em',
            },
            height: {
                128: '32rem',
                192: '48rem',
                256: '64rem',
            },
            width: {
                128: '32rem',
                192: '48rem',
                256: '64rem',
            },
            blur: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
    ],
} satisfies Config

export default config
