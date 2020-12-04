interface IProps {
    src: any
    alt: string
    className?: string
}

interface IWebpProps extends IProps {
    webp: any
    containerClassName?: string
}

export const Image = ({ src, alt, className }: IProps) => {
    return (
        <img src={src} alt={alt} className={className} />
    )
}

export const ResponsiveImage = ({ src: responsiveImage, alt, className }: IProps) => {
    console.log(responsiveImage);
    return (
    <picture className="w-full h-full">
        <img srcSet={responsiveImage.srcSet} sizes="(min-width: 780px) 100vw, 79.35vw" src={responsiveImage.src} alt={alt} className={className} />
    </picture>
)}

export const WebpJpegImage = ({ src, webp, alt, className, containerClassName }: IWebpProps) => (
    <picture className={`h-full w-full ${containerClassName}`}>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={src} type="image/jpeg" />
        <Image src={src} alt={alt} className={className} />
    </picture>
)