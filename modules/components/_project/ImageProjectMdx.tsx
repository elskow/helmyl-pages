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
                filter: 'blur(0px) grayscale(0%) brightness(100%)',
                opacity: 1,
                transition: { duration: 1, ease: 'easeOut' },
            })
        }
    }, [isLoaded, controls])

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                animate={controls}
                initial={{
                    filter: 'blur(10px) grayscale(100%) brightness(50%)',
                    opacity: 0,
                }}
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
                    placeholder={'blur'}
                    blurDataURL={
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/l'
                    }
                />
            </m.div>
        </LazyMotion>
    )
}

export default ImageProjectMdx
