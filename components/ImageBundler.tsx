import Image from 'next/image'

const ImageBundler = ({ src, alt }) => {
    return <Image src={src} alt={alt} width={500} height={300} layout="responsive" />
}

export default ImageBundler
