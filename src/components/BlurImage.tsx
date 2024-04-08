'use client'

import { useState } from 'react'
import Image from 'next/image'

const BlurImage = ({ src, alt, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div {...props.className} className={`relative h-full w-full`}>
            <Image
                src={src}
                alt={alt}
                layout={'fill'}
                objectFit="cover"
                className={`
              duration-1000 ease-in-out
              ${isLoaded ? 'scale-100 blur-0 grayscale-0' : 'scale-105 blur-lg grayscale-[100%]'})`}
                onLoad={() => setIsLoaded(true)}
                loading={'lazy'}
                quality={100}
                placeholder={'blur'}
                blurDataURL={src}
                draggable={false}
            />
        </div>
    )
}

export default BlurImage
