import fs from 'fs'
import RSS from 'rss'
import { allPosts } from '../.contentlayer/generated/index.mjs'
import CONFIG from '../blog.config.js'

const site_url = process.env.NODE_ENV === 'production' ? CONFIG.url : 'http://localhost:3000'

const currentDate = new Date();

const feedOptions = {
    title: CONFIG.title,
    description: CONFIG.siteDescription,
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: currentDate,
    copyright: `All rights reserved ${currentDate.getFullYear()} ${CONFIG.author}`,
}

const feed = new RSS(feedOptions)

const filteredPosts = allPosts.filter((post) => !post.draft)
const currentPosts = filteredPosts.sort((a, b) => b.date.localeCompare(a.date))

currentPosts.map((post) => {
    feed.item({
        title: post.title,
        description: post.description,
        url: `${site_url}/blog/${post.slug}`,
        date: post.date,
    })
})

fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }))
