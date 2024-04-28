'use server'

import fs from 'fs'
import * as path from 'node:path'
import * as process from 'node:process'
import { getPlaiceholder } from 'plaiceholder'

const getPlaceholder = async (imageUrl: string) => {
    /**
     * Get the base64 image from the image URL, its support both local and remote image
     * @param {string} imageUrl - The image URL
     * @returns {Promise<string>} The base64 image
     *
     * @example
     * const imageUrl = '/images/image.jpg'
     * const base64 = await getPlaceholder(imageUrl)
     *
     * @example
     * const imageUrl = 'https://example.com/image.jpg'
     * const base64 = await getPlaceholder(imageUrl)
     */

    const imageBuffer = imageUrl.startsWith('http')
        ? await fetch(imageUrl).then(async (res) => Buffer.from(await res.arrayBuffer()))
        : // : await fs.readFile(`./public${imageUrl}`)
          fs.readFileSync(path.join(process.cwd(), `public${imageUrl}`))

    const { base64 } = await getPlaiceholder(imageBuffer)

    return base64
}

export default getPlaceholder
