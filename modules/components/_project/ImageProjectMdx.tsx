import Image from 'next/legacy/image'
import { useState } from 'react'

const ImageProjectMdx = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={`relative h-full w-full`}>
            <Image
                src={src}
                alt={alt}
                layout={'fill'}
                objectFit="cover"
                className={`duration-1000 ease-in-out no-select rounded-lg ${isLoaded ? '' : 'blur-sm grayscale filter'}`}
                onLoad={() => setIsLoaded(true)}
                loading={'lazy'}
                quality={100}
                draggable={false}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4="
            />
        </div>
    )
}

export default ImageProjectMdx
