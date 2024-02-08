'use client'

import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImageBanner = ({ image, title }) => {
    const { scrollYProgress } = useScroll()
    const height = useTransform(scrollYProgress, [0, 1], ['18rem', '8rem'])

    return (
        <motion.div
            style={{ height }}
            className="w-full overflow-hidden rounded-lg transition-all duration-700"
            transition={{ type: 'spring', stiffness: 10, damping: 30, mass: 1 }}
        >
            <Image
                src={image}
                alt={title}
                width={1200}
                height={600}
                className="h-full w-full object-cover"
                loading="lazy"
            />
        </motion.div>
    )
}

export default ImageBanner
