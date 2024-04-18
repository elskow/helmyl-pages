import Comments from '@/components/_blog/Comments'
import { MdxRenderer } from '@/components/_blog/Mdx'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { lazy } from 'react'

const Toc = lazy(() => import('@/components/_blog/TableOfContents'))

const ContentPost = ({ body, theme, controls }) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.article
                className="js-toc-content prose prose-base prose-neutral flex min-h-full w-full min-w-full flex-col font-sans font-light leading-relaxed prose-h1:prose-base prose-h2:prose-base prose-h3:prose-base prose-h4:prose-base prose-h5:prose-base prose-h6:prose-base prose-code:prose-sm dark:prose-invert sm:prose-sm sm:prose-code:prose-sm md:prose-lg md:prose-h1:prose-lg md:prose-h2:prose-lg md:prose-code:prose-base lg:prose-lg lg:prose-h1:prose-xl lg:prose-h2:prose-xl lg:prose-code:prose-base prose-p:text-black prose-code:font-code dark:prose-p:text-white lg:max-w-5xl xl:max-w-7xl lg:flex-row lg:space-x-4"
                animate={controls}
                initial={{ opacity: 0 }}
                custom={4}
            >
                <div className="lg:w-4/5">
                    <MdxRenderer code={body} />
                    <div className={`pt-14  lg:pt-24`} />
                    <Comments theme={(theme as string) == 'dark' ? 'dark_dimmed' : 'light'} />
                </div>
                <div className="hidden lg:block lg:w-1/5">
                    <Toc />
                </div>
            </m.article>
        </LazyMotion>
    )
}

ContentPost.displayName = 'ContentPost'
export default ContentPost
