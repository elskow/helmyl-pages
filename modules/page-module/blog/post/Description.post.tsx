import dynamic from 'next/dynamic'
import React from 'react'

const FormatDate = dynamic(() => import('@/components/_blog/FormatDate'), { ssr: false })

const DescriptionPost = ({ date, readingTime }: { date: string; readingTime: string }) => (
    <div className="pt-2 text-sm text-[#858585]">
        <span>
            <FormatDate dateString={date} />
        </span>
        <span className="mx-2">·</span>
        <span>{readingTime}</span>
    </div>
)

export default DescriptionPost