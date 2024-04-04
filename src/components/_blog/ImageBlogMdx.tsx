'use client'

import React, { memo, useState } from 'react'
import Image from 'next/image'

const Images = memo(({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const srcSet = '/blog/' + src

    return (
        <figure className="flex justify-center">
            <div className="mb:p-5 mb:px-10 relative z-0 w-fit rounded-lg bg-white p-2 dark:bg-slate-900">
                <div className="flex w-full justify-center">
                    <Image
                        src={srcSet}
                        alt={alt}
                        className={`max-h-screen max-w-full rounded-lg object-cover object-center drop-shadow-lg duration-1000 ease-in-out md:max-h-[60vh] lg:max-h-[80vh] lg:rounded-xl

                        ${isLoaded ? 'scale-100 blur-0 grayscale-0' : 'scale-105 blur-lg grayscale-[100%]'})`}
                        onLoad={() => setIsLoaded(true)}
                        width={800}
                        height={800}
                        loading="lazy"
                        blurDataURL={srcSet}
                        placeholder="blur"
                    />
                </div>
                <p className="py-5 text-center text-sm text-gray-500 dark:text-gray-400">{alt}</p>
            </div>
        </figure>
    )
})

Images.displayName = 'Images'

export default Images
