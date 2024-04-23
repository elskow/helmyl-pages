import { Inclusive_Sans, JetBrains_Mono, Newsreader, Assistant } from 'next/font/google'

/**
 * Inclusive Sans font configuration
 *
 * Example usage:
 * In your Tailwind CSS classes, use `font-sans` to apply this font.
 * For example: `<div class="font-sans">This is Inclusive Sans</div>`
 */
export const inclusiveSans = Inclusive_Sans({
    weight: '400',
    subsets: ['latin-ext'],
    display: 'swap',
    variable: '--font-sans',
})

/**
 * Assistant font configuration
 *
 * Example usage :
 * In your Tailwind CSS classes, use `font-sans` to apply this font.
 * For example: `<div class="font-sans">This is Assistant</div>`
 */
export const assistant = Assistant({
    subsets: ['latin-ext'],
    variable: '--font-sans'
})

/**
 * Newsreader font configuration
 *
 * Example usage:
 * In your Tailwind CSS classes, use `font-newsreader` to apply this font.
 * For example: `<div class="font-newsreader">This is Newsreader</div>`
 */
export const newsreader = Newsreader({
    weight: ['400', '200', '300', '500', '600', '700', '800'],
    subsets: ['latin-ext'],
    display: 'swap',
    variable: '--font-newsreader',
})

/**
 * JetBrains Mono font configuration
 *
 * Example usage:
 * In your Tailwind CSS classes, use `font-code` to apply this font.
 * For example: `<div class="font-code">This is JetBrains Mono</div>`
 */
export const jetBrainsMono = JetBrains_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin-ext'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
})
