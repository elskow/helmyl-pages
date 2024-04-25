import ContentTags from '@/page-module/tags/Content.tags'
import HeaderTags from '@/page-module/tags/Header.tags'
import NotFoundTags from '@/page-module/tags/NotFound.tags'

import MainLayout from '@/layouts/MainLayout'
import { Slide } from '@/page-transition/Slide'
import { allPosts } from 'contentlayer/generated'
import { useMemo } from 'react'

const posts = allPosts.filter((post) => !post.draft)
const TagsPage = () => {
    const tags = useMemo(() => {
        return posts
            .map((post) => post.tags)
            .flat()
            .filter((value, index, self) => {
                return self.indexOf(value) === index
            })
    }, [])

    if (posts.length === 0) {
        return <NotFoundTags />
    }

    return (
        <MainLayout className="mx-auto mb-10 mt-6 min-h-screen w-full justify-center space-y-8 md:mt-10 lg:max-w-5xl">
            <Slide>
                <HeaderTags />
            </Slide>
            <Slide>
                <ContentTags tags={tags} />
            </Slide>
        </MainLayout>
    )
}

export default TagsPage
