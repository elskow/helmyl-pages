'use server'

import { getLastPlayed } from '@/lib/spotify'

const getLastPlayedSong = async () => {
    const response = await getLastPlayed()

    if (response.status !== 200) return { response: response.status }

    const data = await response.json()
    const { items } = data
    const lastPlayed = items[0]

    const { track } = lastPlayed
    const { name: title, artists, album, external_urls } = track
    const artist = artists.map(({ name }) => name).join(', ')
    const image = album.images[0].url
    const url = external_urls.spotify

    return { title, artist, image, url }
}

export default getLastPlayedSong
