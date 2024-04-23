import getLastPlayedSong from '@/hook/last-played-spotify'
import getCurrentSong from '@/hook/now-playing-spotify'
import { revalidatePath } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import { FaSpotify } from 'react-icons/fa'

export default async function SpotifyNowPlaying({ ...props }) {
    revalidatePath('/about', 'page')
    const currentSong = await getCurrentSong()
    const lastPlayed = await getLastPlayedSong()

    if (!currentSong || !lastPlayed) return <></>

    return (
        <div className="rounded-lg transition-colors duration-500" {...props}>
            <div className="mb-4 flex items-center gap-2">
                <FaSpotify className="text-green-500" />
                <h1 className="text-sm font-bold lg:text-lg">
                    {currentSong.is_playing ? 'Now Playing' : 'Last Played'}
                </h1>
            </div>
            <div
                className="flex flex-row justify-between justify-items-start gap-6 rounded-lg bg-gray-100 drop-shadow-md dark:bg-gray-800"
                style={{
                    backgroundImage: `url(${currentSong.is_playing ? currentSong.image : lastPlayed.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="flex h-full w-full flex-row items-center justify-between rounded-lg bg-teal-900 bg-opacity-60 px-4 py-4 md:px-6 md:py-6">
                    <div>
                        <h1 className="mb-1 line-clamp-1 items-center justify-self-center pt-2 text-sm font-bold text-gray-200 lg:text-lg">
                            {currentSong.is_playing ? currentSong.title : lastPlayed.title}
                        </h1>
                        <h2 className="mb-2 line-clamp-1 items-center justify-center text-sm font-medium text-gray-300 lg:text-base">
                            {currentSong.is_playing ? currentSong.artist : lastPlayed.artist}
                        </h2>
                    </div>
                    <div>
                        <Link
                            href={currentSong.is_playing ? currentSong.url : lastPlayed.url}
                            passHref
                        >
                            <Image
                                src={currentSong.is_playing ? currentSong.image : lastPlayed.image}
                                alt={currentSong.is_playing ? 'Now Playing' : 'Last Played'}
                                width={100}
                                height={100}
                                className={`rounded-lg shadow-lg filter transition-all duration-300 hover:shadow-xl hover:brightness-75 hover:saturated-125 hover:drop-shadow-md`}
                                loading="lazy"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
