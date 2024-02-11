import { ImageResponse } from 'next/server'
import { loadGoogleFont } from '@/lib/load-google-font'
import OpenGraphImage from '@/components/OpenGraphImage/PageOG'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }) {
    const inclusiveSans = await loadGoogleFont({ family: 'Inclusive Sans' })
    const { tag } = params

    const titlePage = `Tag: ${tag
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}`

    return new ImageResponse(<OpenGraphImage titlePage={titlePage} />, {
        ...size,
        fonts: [
            {
                name: 'Inclusive Sans',
                data: inclusiveSans,
            },
        ],
    })
}
