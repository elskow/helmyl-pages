const OpenGraphImage = ({ titlePage }) => {
    return (
        <div
            style={{ borderBottom: '40px solid #2C7A7B' }}
            tw="flex w-full items-start h-full flex-col bg-[#e8ece9] text-black p-[80px]"
        >
            <div tw="flex flex-col w-full justify-between h-full">
                <div tw="flex w-full items-start pt-24">
                    <div
                        tw="flex text-6xl font-bold leading-none"
                        style={{
                            fontFamily: "'Inclusive Sans', sans-serif",
                            fontWeight: 'bolder',
                        }}
                    >
                        {titlePage}
                    </div>
                </div>
                <div tw="flex w-full items-start">
                    <div
                        tw="flex text-3xl leading-normal"
                        style={{
                            fontFamily: "'Inclusive Sans', sans-serif",
                        }}
                    >
                        helmyl.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenGraphImage
