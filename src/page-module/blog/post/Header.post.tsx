import { LazyMotion, domAnimation, m } from 'framer-motion'

import BannerPost from '@/page-module/blog/post/Banner.post'
import DescriptionPost from '@/page-module/blog/post/Description.post'
import TagsPost from '@/page-module/blog/post/Tags.post'

const HeaderPost = ({ post, controls }) => {
    return (
        <LazyMotion features={domAnimation}>
            <div className="space-y-4 pb-5">
                {post.banner && <BannerPost image={post.banner} title={post.title} />}
                <m.h1
                    className="font-newsreader text-4xl font-bold text-primary dark:text-primary"
                    animate={controls}
                    initial={{ opacity: 0 }}
                    custom={0}
                >
                    {post.title}
                </m.h1>
                <m.div
                    className="font-newsreader text-base text-primary dark:text-primary md:text-lg lg:text-xl"
                    animate={controls}
                    initial={{ opacity: 0 }}
                    custom={1}
                >
                    {post.summary}
                </m.div>
                <m.div animate={controls} initial={{ opacity: 0 }} custom={2}>
                    <TagsPost tags={post.tags} />
                </m.div>
                <m.div animate={controls} initial={{ opacity: 0 }} custom={3}>
                    <DescriptionPost date={post.date} readingTime={post.readingTime.text} />
                </m.div>
            </div>
        </LazyMotion>
    )
}

export default HeaderPost
