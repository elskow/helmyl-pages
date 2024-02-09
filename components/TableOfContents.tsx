'use client'

import { useEffect } from 'react'
import tocbot from 'tocbot'
import { MdFormatListBulleted } from 'react-icons/md'

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
        <div className="toc-card select-none">
            <div className="toc-head mb-2 flex items-center">
                <div className="toc-icon mr-2">
                    <MdFormatListBulleted size={24} />
                </div>
                <span className="text-lg font-bold">Table of Contents</span>
            </div>
            <div className="toc-content">
                <div className="js-toc list-inside text-lg" />
            </div>
        </div>
    )
}
