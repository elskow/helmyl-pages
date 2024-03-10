'use client'

import { useState } from 'react'
import Image from 'next/image'

const BlurImage = (props: { src: string; alt: string; className?: string }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={`${props.className} relative h-full w-full`}>
            <Image
                alt={props.alt}
                src={props.src}
                layout="fill"
                objectFit="cover"
                className={`
              duration-1000 ease-in-out
              ${isLoaded ? 'scale-100 rounded-2xl blur-0 grayscale-0' : 'scale-105 blur-lg grayscale-[100%]'})`}
                onLoadingComplete={() => setIsLoaded(true)}
                loading={'lazy'}
                quality={100}
            />
        </div>
    )
}

export default BlurImage
