import getPlaceholder from '@/hook/get-placeholder'
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'

const ImageProjectMdx = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [placeholder, setPlaceholder] = useState('')

    const controls = useAnimation()

    useEffect(() => {
        if (isLoaded) {
            controls.start({
                filter: 'blur(0px) grayscale(0%) brightness(100%)',
                transition: { duration: 1, ease: 'easeOut' },
            })
        }
    }, [isLoaded, controls])

    useEffect(() => {
        const fetchPlaceholder = async () => {
            const placeholderData = await getPlaceholder(src)
            setPlaceholder(placeholderData)
        }
        fetchPlaceholder().then((r) => r)
    }, [src])

    return (
        <LazyMotion features={domAnimation}>
            {placeholder && (
                <m.div
                    animate={controls}
                    initial={{
                        filter: 'blur(10px) grayscale(100%) brightness(50%)',
                    }}
                    className={`relative h-full w-full`}
                >
                    <Image
                        src={src}
                        alt={alt}
                        layout={'fill'}
                        objectFit="cover"
                        className={`duration-1000 ease-in-out no-select rounded-lg`}
                        onLoad={() => setIsLoaded(true)}
                        loading={'lazy'}
                        quality={100}
                        draggable={false}
                        placeholder={'blur'}
                        blurDataURL={placeholder}
                    />
                </m.div>
            )}
        </LazyMotion>
    )
}

export default ImageProjectMdx
