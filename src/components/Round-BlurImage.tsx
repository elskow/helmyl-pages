'use client'

import { useState } from 'react'
import Image from 'next/image'

const RoundBlurImage = ({ src, alt, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className={`
              object-cover duration-1000 ease-in-out
              ${isLoaded ? 'scale-100 blur-0 grayscale-0' : 'scale-105 blur-lg grayscale-[100%]'}`}
            {...props}
            onLoad={() => setIsLoaded(true)}
            loading={'lazy'}
            quality={100}
            draggable={false}
            {...props}
        />
    )
}

export default RoundBlurImage
