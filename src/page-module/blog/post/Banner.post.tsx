import Image from 'next/legacy/image'
import { useState } from 'react'

const BannerPost = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className="h-[18rem] w-full overflow-hidden rounded-lg pb-4 transition-all duration-700 lg:h-[20rem]">
            <div className="relative h-full w-full">
                <Image
                    src={src}
                    alt={alt}
                    layout={'fill'}
                    objectFit="cover"
                    className={`duration-1000 ease-in-out ${isLoaded ? 'scale-100 blur-0 grayscale-0' : 'scale-105 blur-lg grayscale-[100%]'})`}
                    onLoad={() => setIsLoaded(true)}
                    loading={'lazy'}
                    quality={100}
                    draggable={false}
                />
            </div>
        </div>
    )
}

export default BannerPost
