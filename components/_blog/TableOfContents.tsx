'use client'

import { useEffect } from 'react'
import tocbot from 'tocbot'

export default function Toc() {
    useEffect(() => {
        tocbot.init({
            tocSelector: '.js-toc',
            contentSelector: '.js-toc-content',
            headingSelector: 'h2, h3',
            scrollSmoothOffset: -100,
            scrollSmooth: true,
            orderedList: false,
        })

        return () => tocbot.destroy()
    }, [])

    return (
        <div className="toc-card">
            <div className="toc-content">
                <div className="js-toc" />
            </div>
        </div>
    )
}
