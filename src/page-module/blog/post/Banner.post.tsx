import getPlaceholder from '@/hook/get-placeholder'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'

const BannerPost = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [placeholder, setPlaceholder] = useState('')

    useEffect(() => {
        const fetchPlaceholder = async () => {
            const placeholderData = await getPlaceholder(src)
            setPlaceholder(placeholderData)
        }
        fetchPlaceholder().then((r) => r)
    }, [src])

    return (
        <div className="h-[18rem] w-full overflow-hidden rounded-lg pb-4 transition-all duration-700 lg:h-[20rem]">
            <div className="relative h-full w-full">
                {placeholder && (
                    <Image
                        src={src}
                        alt={alt}
                        className={`duration-1000 ease-in-out ${isLoaded ? 'scale-100 blur-0 grayscale-0' : 'scale-105 blur-lg grayscale-[100%]'})`}
                        onLoad={() => setIsLoaded(true)}
                        loading={'lazy'}
                        quality={100}
                        layout={'fill'}
                        objectFit={'cover'}
                        draggable={false}
                        placeholder="blur"
                        blurDataURL={placeholder}
                    />
                )}
            </div>
        </div>
    )
}

export default BannerPost
