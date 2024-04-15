import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Images = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const controls = useAnimation()

    const srcSet = '/blog/' + src

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
        <figure className="flex justify-center">
            <div className="mb:p-5 mb:px-10 relative z-0 w-fit rounded-lg bg-white p-2 dark:bg-slate-900">
                <div className="flex w-full justify-center">
                    <LazyMotion features={domAnimation}>
                        <m.div
                            animate={controls}
                            initial={{
                                filter: 'blur(10px) grayscale(100%) brightness(50%)',
                                opacity: 0,
                            }}
                        >
                            <Image
                                src={srcSet}
                                alt={alt}
                                className="max-h-screen max-w-full rounded-lg object-cover object-center drop-shadow-lg md:max-h-[60vh] lg:max-h-[80vh] lg:rounded-xl"
                                onLoad={() => setIsLoaded(true)}
                                width={800}
                                height={800}
                                loading="lazy"
                                quality={100}
                                placeholder={'blur'}
                                blurDataURL={
                                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/l'
                                }
                            />
                        </m.div>
                    </LazyMotion>
                </div>
                <p className="py-5 text-center text-sm text-gray-500 dark:text-gray-400">{alt}</p>
            </div>
        </figure>
    )
}

export default Images
