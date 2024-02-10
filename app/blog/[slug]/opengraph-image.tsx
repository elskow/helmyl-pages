import { ImageResponse } from 'next/server'
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
    const { title, tags, summary: description, readingTime } = post
    return new ImageResponse(
        (
            <div
                style={{ borderBottom: '40px solid #2C7A7B' }}
                tw="flex w-full items-start h-full flex-col bg-[#e8ece9] text-black p-[80px]"
            >
                <div tw="flex flex-col w-full pt-[6px]">
                    <div tw="flex w-full">
                        <div tw="flex text-slate-800 font-bold text-lg leading-normal">
                            {tags.join(', ')}
                        </div>
                    </div>
                    <div tw="flex w-full mt-12 items-start">
                        <div
                            tw="flex font-bold text-7xl leading-none"
                            style={{
                                fontWeight: 'bolder',
                                fontFamily: "'Inclusive Sans ExtraBold', sans-serif",
                            }}
                        >
                            {title}
                        </div>
                    </div>
                    <div tw="flex w-full mt-14 items-start">
                        <div tw="flex text-lg leading-normal pr-10">{description}</div>
                    </div>
                    <div tw="flex w-full mt-14 items-start">
                        <div tw="flex text-lg leading-normal pr-10">{readingTime.text}</div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
