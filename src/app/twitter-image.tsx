import { ImageResponse } from 'next/og'
import { loadGoogleFont } from '@/lib/load-google-font'
import OpenGraphImage from '@/components/OpenGraphImage/RootOG'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    const inclusiveSans = await loadGoogleFont({ family: 'Inclusive Sans' })

    return new ImageResponse(<OpenGraphImage />, {
        ...size,
        fonts: [
            {
                name: 'Inclusive Sans',
                data: inclusiveSans,
            },
        ],
    })
}
