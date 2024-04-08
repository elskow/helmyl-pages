import Giscus from '@giscus/react'

const Comments = ({ theme, ...props }) => {
    return (
        <div {...props}>
            <Giscus
                repo="elskow/helmyl-pages"
                category="Q&A"
                categoryId="DIC_kwDOLPkEEc4CefZ6"
                mapping="pathname"
                loading={'lazy'}
                lang={'en'}
                theme={theme}
                repoId={'R_kgDOLPkEEQ'}
                reactionsEnabled="1"
                inputPosition={'bottom'}
                strict="0"
                emitMetadata="0"
            />
        </div>
    )
}

export default Comments
