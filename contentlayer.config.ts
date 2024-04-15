import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

/** @type {import('rehype-pretty-code'.Options} */
const rehypePrettyOptions = {
    theme: 'dracula-soft',
    keepBackground: true,
}

const computedFields: any = {
    readingTime: {
        type: 'json',
        resolve: (post: any) => readingTime(post.body.raw),
    },
    slug: {
        type: 'string',
        resolve: (post) => {
            const parts = post._raw.flattenedPath.split('/')
            return parts[parts.length - 1]
        },
    },
    url: {
        type: 'string',
        resolve: (post) => {
            const parts = post._raw.flattenedPath.split('/')
            const slug = parts[parts.length - 1]
            return `/blog/${slug}`
        },
    },
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'string', required: true },
        summary: { type: 'string', required: true },
        draft: { type: 'boolean', required: true },
        banner: { type: 'string', required: false },
        tags: {
            type: 'list',
            of: { type: 'string' },
            required: false,
            default: [],
        },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [
            [rehypeKatex, { output: 'mathml' }],
            //@ts-ignore
            [rehypePrettyCode, rehypePrettyOptions],
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
            // @ts-ignore
            rehypePresetMinify,
        ],
        remarkPlugins: [remarkGfm, remarkMath],
    },
})
