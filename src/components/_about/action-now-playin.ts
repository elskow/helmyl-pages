'use server'

import { getNowPlaying } from '@/lib/spotify'

export async function getCurrentSong() {
    const response = await getNowPlaying()

    if (response.status === 204) return { is_playing: false }

    const data = await response.json()

    if (response.status !== 200) return { response: response.status, error: data.error.message }
    else if (!data.item) return { is_playing: false }

    const { item } = data

    const { name: title, artists, album, external_urls } = item
    const artist = artists.map(({ name }) => name).join(', ')
    const image = album.images[0].url
    const url = external_urls.spotify

    return { title, artist, image, url, is_playing: true }
}
