'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75, type: 'tween' }}
            exit={{ y: 0, opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}
