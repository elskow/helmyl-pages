import { NextResponse } from 'next/server'

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env

const NowPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing'
const TokenEndpoint = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
    if (!SPOTIFY_REFRESH_TOKEN) {
        throw new Error('Refresh token is not defined')
    }

    const response = await fetch(TokenEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    })

    return response.json()
}

const getNowPlaying = async () => {
    const { access_token } = await getAccessToken()

    return fetch(NowPlayingEndpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
}

export async function GET() {
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
