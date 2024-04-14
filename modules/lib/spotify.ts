const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env

const NowPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing'
const LastPlayedEndpoint = 'https://api.spotify.com/v1/me/player/recently-played'
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

const getLastPlayed = async () => {
    const { access_token } = await getAccessToken()

    return fetch(LastPlayedEndpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })
}

export { getLastPlayed, getNowPlaying }
