import Pre from '@/components/_blog/CopyBtn'
import Image from '@/components/_blog/ImageBlogMdx'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { memo } from 'react'

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

const components: MDXComponents = {
    Image: Image,
    img: Image,
    images: Image,
    pre: Pre,
    a: CustomLink,
}

const MdxRenderer = ({ code }: { code: string }) => {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}

export { MdxRenderer }
