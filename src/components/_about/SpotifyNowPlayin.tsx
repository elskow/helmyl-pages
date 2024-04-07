'use client'

import { FaSpotify } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { getCurrentSong } from '@/components/_about/action-now-playin'
import { useEffect, useState } from 'react'

type Song = {
    is_playing: boolean
    response: number
    error: any
    title: string
    artist: string
    image: string
    url: string
} | null

export default function SpotifyNowPlayin() {
    const [nowPlaying, setNowPlaying] = useState<Song>(null)

    useEffect(() => {
        const fetchSong = async () => {
            const song = await getCurrentSong()
            setNowPlaying({
                is_playing: song.is_playing ?? false,
                response: song.response ?? 0,
                error: song.error ?? null,
                title: song.title ?? '',
                artist: song.artist ?? '',
                image: song.image ?? '',
                url: song.url ?? '',
            })
        }

        fetchSong() // Fetch once immediately
        const intervalId = setInterval(fetchSong, 10000)

        return () => clearInterval(intervalId)
    }, [])

    if (!nowPlaying || !nowPlaying.is_playing) return <></>

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
