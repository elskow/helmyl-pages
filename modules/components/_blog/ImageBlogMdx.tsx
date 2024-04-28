import getPlaceholder from '@/hook/get-placeholder'
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Images = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [placeholder, setPlaceholder] = useState('')

    const controls = useAnimation()

    const srcSet = src.startsWith('/blog') ? src : '/blog/' + src

    useEffect(() => {
        const fetchPlaceholder = async () => {
            const placeholderData = await getPlaceholder(srcSet)
            setPlaceholder(placeholderData)
        }
        fetchPlaceholder().then((r) => r)
    }, [srcSet])

    useEffect(() => {
        if (isLoaded) {
            controls.start({
                filter: 'blur(0px) grayscale(0%) brightness(100%)',
                transition: { duration: 1, ease: 'easeOut' },
            })
        }
    }, [isLoaded, controls])

    return (
        <>
            {placeholder && (
                <figure className="flex justify-center">
                    <div className="mb:p-5 mb:px-10 relative z-0 w-fit rounded-lg bg-white p-2 dark:bg-slate-900">
                        <div className="flex w-full justify-center">
                            <LazyMotion features={domAnimation}>
                                <m.div
                                    animate={controls}
                                    initial={{
                                        filter: 'blur(10px) grayscale(100%) brightness(50%)',
                                    }}
                                    className="w-full"
                                >
                                    <Image
                                        src={srcSet}
                                        alt={alt}
                                        className="max-h-screen max-w-full rounded-lg object-cover object-center drop-shadow-lg md:max-h-[60vh] lg:max-h-[80vh] lg:rounded-xl px-8"
                                        onLoad={() => setIsLoaded(true)}
                                        width={800}
                                        height={800}
                                        loading="lazy"
                                        quality={100}
                                        placeholder="blur"
                                        blurDataURL={placeholder}
                                    />
                                </m.div>
                            </LazyMotion>
                        </div>
                        <p className="py-5 text-center text-sm text-gray-500 dark:text-gray-400">
                            {alt}
                        </p>
                    </div>
                </figure>
            )}
        </>
    )
}

export default Images
