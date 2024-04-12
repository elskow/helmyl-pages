import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'

const ImageProjectMdx = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const srcSet = src
    const controls = useAnimation()

    useEffect(() => {
        if (isLoaded) {
            controls.start({
                scale: 1,
                filter: 'blur(0px) grayscale(0%)',
                transition: { duration: 1, ease: 'easeOut' },
            })
        }
    }, [isLoaded, controls])

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                animate={controls}
                initial={{ scale: 1.05, filter: 'blur(10px) grayscale(100%)' }}
                className={`relative h-full w-full`}
            >
                <Image
                    src={srcSet}
                    alt={alt}
                    layout={'fill'}
                    objectFit="cover"
                    className={`duration-1000 ease-in-out no-select rounded-lg`}
                    onLoad={() => setIsLoaded(true)}
                    loading={'lazy'}
                    quality={100}
                    draggable={false}
                />
            </m.div>
        </LazyMotion>
    )
}

export default ImageProjectMdx
