import React, { lazy } from 'react'
import { MdxRenderer } from '@/components/_blog/Mdx'
import Comments from '@/components/_blog/Comments'

const Toc = lazy(() => import('@/components/_blog/TableOfContents'))

const Article = React.memo(({ body, theme }: { body: string; theme: any }) => (
    <article className="js-toc-content prose prose-base prose-neutral flex min-h-full w-full min-w-full flex-col font-sans font-light leading-relaxed prose-h1:prose-base prose-h2:prose-base prose-h3:prose-base prose-h4:prose-base prose-h5:prose-base prose-h6:prose-base prose-code:prose-sm dark:prose-invert sm:prose-sm sm:prose-code:prose-sm md:prose-lg md:prose-h1:prose-lg md:prose-h2:prose-lg md:prose-code:prose-base lg:prose-lg lg:prose-h1:prose-xl lg:prose-h2:prose-xl lg:prose-code:prose-base prose-p:text-black prose-code:font-code dark:prose-p:text-white lg:max-w-5xl lg:flex-row lg:space-x-4">
        <div className="lg:w-4/5">
            <MdxRenderer code={body} />
            <div className={`mt-8  lg:mt-16`} />
            <Comments theme={(theme as string) == 'dark' ? 'dark' : 'light'} />
        </div>
        <div className="hidden lg:block lg:w-1/5">
            <Toc />
        </div>
    </article>
))

Article.displayName = 'Article'
export default Article
