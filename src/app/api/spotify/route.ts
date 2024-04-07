import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getNowPlaying } from '@/lib/spotify'

export async function GET(req: NextRequest) {
    const path = req.nextUrl.searchParams.get('path') || '/'
    revalidatePath(path, 'page')

    const response = await getNowPlaying()

    if (response.status === 204) {
        return NextResponse.json({
            is_playing: false,
        })
    }

    const data = await response.json()

    if (response.status !== 200) {
        return NextResponse.json({
            response: response.status,
            error: data.error.message,
        })
    }

    const { item } = data

    const { name: title, artists, album, external_urls } = item
    const artist = artists.map(({ name }) => name).join(', ')
    const image = album.images[0].url
    const url = external_urls.spotify

    return NextResponse.json({ title, artist, image, url, is_playing: true })
}
