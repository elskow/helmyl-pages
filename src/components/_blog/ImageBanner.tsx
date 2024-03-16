import BlurImage from '@/components/BlurImage'

const ImageBanner = ({ image, title }) => {
    return (
        <div className="h-[18rem] w-full overflow-hidden rounded-lg pb-4 transition-all duration-700 lg:h-[20rem]">
            <BlurImage src={image} alt={title} className="h-full w-full object-cover" />
        </div>
    )
}

export default ImageBanner
