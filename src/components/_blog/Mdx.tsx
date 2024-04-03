import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import Pre from '@/components/_blog/CopyBtn'
import React, { memo } from 'react'

const CustomLink = memo((props: any) => {
    const href = props.href

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props} draggable={false} unselectable={'on'}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
})

CustomLink.displayName = 'CustomLink'

const Images = memo(({ src, alt }: { src: string; alt: string }) => {
    const srcSet = '/blog/' + src
    console.log(srcSet)
    return (
        <div className="flex justify-center">
            <figure className="mb:p-5 relative z-0 w-fit rounded-lg bg-white p-2 px-10 dark:bg-slate-900">
                <div className="flex w-full justify-center">
                    <Image
                        src={srcSet}
                        alt={alt}
                        className="max-h-[90vh] max-w-full rounded-lg object-cover object-center drop-shadow-lg md:max-h-[60vh] lg:max-h-[80vh] lg:rounded-xl"
                        width={800}
                        height={800}
                        loading="lazy"
                    />
                </div>
                <p className="py-5 text-center text-sm text-gray-500 dark:text-gray-400">{alt}</p>
            </figure>
        </div>
    )
})

Images.displayName = 'Images'

const components: MDXComponents = {
    Image: Images,
    img: Images,
    images: Images,
    pre: Pre,
    a: CustomLink,
}

const MdxRenderer = ({ code }: { code: string }) => {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}

export { MdxRenderer }
