'use client'

import getBase64Image from '@/hook/get-base64-image'
import Image from 'next/image'
import HelmyAvatar from 'public/helmy-avatar-bw.webp'
import { useEffect, useState } from 'react'

const AvatarAbout = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [placeholder, setPlaceholder] = useState('')

    useEffect(() => {
        getBase64Image(HelmyAvatar.src).then((data) => {
            setPlaceholder(data)
        })
    }, [])

    return (
        <div className="lg:pl-32 xl:pl-36 max-w-xs px-2.5 lg:max-w-none pr-10">
            <Image
                src={HelmyAvatar}
                alt="Profile Picture"
                width={500}
                height={500}
                className={`aspect-square rotate-2 rounded-2xl transition duration-1000 ${isLoaded ? 'scale-100 blur-0 grayscale-0 shadow-lg shadow-emerald-950 drop-shadow-2xl dark:shadow-teal-900 dark:drop-shadow-2xl dark:backdrop-contrast-200 dark:shadow-2xl object-cover backdrop-contrast-200 opacity-100' : 'scale-105 blur-lg opacity-0'}`}
                draggable={false}
                onLoad={() => setIsLoaded(true)}
                placeholder="blur"
                blurDataURL={placeholder}
                loading={'lazy'}
                quality={100}
            />
        </div>
    )
}

export default AvatarAbout
