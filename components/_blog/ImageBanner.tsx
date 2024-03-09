import Image from 'next/image'

const ImageBanner = ({ image, title }) => {
    return (
        <div className="h-[18rem] w-full overflow-hidden rounded-lg pb-4 transition-all duration-700 lg:h-[20rem]">
            <Image
                src={image}
                alt={title}
                width={1080}
                height={400}
                className="h-full w-full object-cover"
                loading="lazy"
                quality={100}
            />
        </div>
    )
}

export default ImageBanner
