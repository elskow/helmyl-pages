'use client'

import { useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { AiOutlineLoading } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

const SpotifyNowPlayin = () => {
    const [nowPlaying, setNowPlaying] = useState<any>({
        title: 'Not Playing',
        artist: 'Not Playing',
        image: '',
        is_playing: false,
    })
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch('/api/spotify')
                const data = await response.json()
                setNowPlaying(data)
                setLoading(false)
            } catch (error) {
                setNowPlaying({
                    title: 'Error',
                    artist: 'Error',
                    image: '',
                    is_playing: false,
                })
            }
        }

        fetchNowPlaying().then((r) => r)

        const interval = setInterval(() => {
            fetchNowPlaying().then((r) => r)
        }, 5000) // 5 secs

        return () => clearInterval(interval)
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <AiOutlineLoading className="animate-spin" />
            </div>
        )
    }

    if (!nowPlaying.is_playing) {
        return <></>
    }

    return (
        <div className="rounded-lg transition-colors duration-500">
            <div className="mb-4 flex items-center gap-2">
                <FaSpotify className="text-green-500" />
                <h1 className="text-sm font-bold lg:text-lg">Now Playing</h1>
            </div>
            <div
                className="flex flex-row justify-between justify-items-start gap-6 rounded-lg bg-gray-100 drop-shadow-md dark:bg-gray-800"
                style={{
                    backgroundImage: `url(${nowPlaying.image})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex h-full w-full flex-row items-center justify-between rounded-lg bg-green-900 bg-opacity-60 px-4 py-4 md:px-6 md:py-6">
                    <div>
                        <h1 className="mb-1 line-clamp-1 items-center justify-self-center pt-2 text-sm font-bold text-gray-200 lg:text-lg">
                            {nowPlaying.title}
                        </h1>
                        <h2 className="mb-2 line-clamp-1 items-center justify-center text-sm font-medium text-gray-300 lg:text-base">
                            {nowPlaying.artist}
                        </h2>
                    </div>
                    <div>
                        <Link href={nowPlaying.url} passHref>
                            <Image
                                src={nowPlaying.image}
                                alt="Now Playing"
                                width={100}
                                height={100}
                                className={`rounded-lg shadow-lg filter transition-all duration-300 hover:shadow-xl hover:brightness-90`}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotifyNowPlayin
