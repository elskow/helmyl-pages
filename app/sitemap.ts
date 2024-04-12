import { allPosts } from 'contentlayer/generated'
import { slug } from 'github-slugger'

type SitemapEntry = {
    url: string
    lastModified: Date | string
    changeFrequency: string
    priority: number
}

function createSitemapEntry(
    url: string,
    lastModified: Date | string,
    changeFrequency: string,
    priority: number
): SitemapEntry {
    return {
        url,
        lastModified,
        changeFrequency,
        priority,
    }
}

function createPostEntries(posts: any[]): SitemapEntry[] {
    return posts.map((post) =>
        createSitemapEntry(`https://helmyl.com/blog/${slug(post.slug)}`, post.date, 'daily', 1)
    )
}

export default function sitemap(): Promise<SitemapEntry[]> {
    const postsEntries = createPostEntries(allPosts)

    const staticEntries: SitemapEntry[] = [
        createSitemapEntry('https://helmyl.com/', new Date(), 'daily', 1),
        createSitemapEntry('https://helmyl.com/blog', new Date(), 'daily', 0.8),
        createSitemapEntry('https://helmyl.com/projects', new Date(), 'daily', 0.8),
        createSitemapEntry('https://helmyl.com/about', new Date(), 'daily', 0.8),
    ]

    return Promise.resolve([...staticEntries, ...postsEntries])
}
