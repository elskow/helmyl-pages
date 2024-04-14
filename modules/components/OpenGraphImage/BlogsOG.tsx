const OpenGraphImage = ({ title, tags, readingTime }) => {
    return (
        <div
            style={{ borderBottom: '40px solid #2C7A7B' }}
            tw="flex w-full items-start h-full flex-col bg-[#e8ece9] text-black p-[80px]"
        >
            <div tw="flex flex-col w-full justify-between h-full">
                <div tw="flex w-full">
                    <div
                        tw="flex text-slate-800 font-bold text-2xl leading-normal"
                        style={{
                            fontFamily: "'Inclusive Sans', sans-serif",
                        }}
                    >
                        {tags.join(', ')}
                    </div>
                </div>
                <div tw="flex w-full items-start pb-8">
                    <div
                        tw="flex font-bold text-6xl leading-none"
                        style={{
                            fontFamily: "'Inclusive Sans', sans-serif",
                            fontWeight: 'bolder',
                        }}
                    >
                        {title}
                    </div>
                </div>
                <div tw="flex w-full items-start">
                    <div
                        tw="flex text-3xl leading-normal pr-10"
                        style={{
                            fontFamily: "'Inclusive Sans', sans-serif",
                        }}
                    >
                        {readingTime.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenGraphImage
