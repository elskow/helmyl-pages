import getPlaceholder from '@/hook/get-placeholder'
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Images = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [placeholder, setPlaceholder] = useState('')
    const controls = useAnimation()

    const srcSet = '/blog/' + src

    useEffect(() => {
        const fetchPlaceholder = async () => {
            const placeholderData = await getPlaceholder(srcSet)
            setPlaceholder(placeholderData)
        }
        fetchPlaceholder().then((r) => r)
    }, [srcSet])

    useEffect(() => {
        if (isLoaded) {
            controls
                .start({
                    scale: 1,
                    filter: 'blur(0px) grayscale(0%)',
                    transition: { duration: 1, ease: 'easeOut' },
                })
                .then((r) => r)
        }
    }, [isLoaded, controls])

    return (
        <figure className="flex justify-center">
            <div className="mb:p-5 mb:px-10 relative z-0 w-fit rounded-lg bg-white p-2 dark:bg-slate-900">
                <div className="flex w-full justify-center">
                    <LazyMotion features={domAnimation}>
                        <m.div
                            animate={controls}
                            initial={{ scale: 1.05, filter: 'blur(10px) grayscale(100%)' }}
                        >
                            {placeholder && (
                                <Image
                                    src={srcSet}
                                    alt={alt}
                                    className="max-h-screen max-w-full rounded-lg object-cover object-center drop-shadow-lg md:max-h-[60vh] lg:max-h-[80vh] lg:rounded-xl"
                                    onLoad={() => setIsLoaded(true)}
                                    width={800}
                                    height={800}
                                    loading="lazy"
                                    quality={100}
                                    placeholder="blur"
                                    blurDataURL={placeholder}
                                />
                            )}
                        </m.div>
                    </LazyMotion>
                </div>
                <p className="py-5 text-center text-sm text-gray-500 dark:text-gray-400">{alt}</p>
            </div>
        </figure>
    )
}

export default Images
