import { ImageResponse } from 'next/server'
import OpenGraphImage from '@/components/OpenGraphImage/BlogsOG'
import { loadGoogleFont } from '@/lib/load-google-font'
import { allPosts } from '@/.contentlayer/generated'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
        return
    }
    const { title, tags, readingTime } = post
    const inclusiveSans = await loadGoogleFont({ family: 'Inclusive Sans' })

    return new ImageResponse(
        <OpenGraphImage title={title} tags={tags} readingTime={readingTime} />,
        {
            ...size,
            fonts: [
                {
                    name: 'Inclusive Sans',
                    data: inclusiveSans,
                },
            ],
        }
    )
}
