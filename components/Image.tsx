interface IProps {
    src: any
    alt: string
    className?: string
}

interface IWebpProps extends IProps {
    webp: any
}

export const Image = ({ src, alt, className }: IProps) => {
    return (
        <img src={src} alt={alt} className={className} />
    )
}

export const ResponsiveImage = ({ src: responsiveImage, alt, className }: IProps) => (
    <picture className="w-full h-full">
        <img srcSet={responsiveImage.srcSet} src={responsiveImage.src} alt={alt} className={className} />
    </picture>
)

export const WebpJpegImage = ({ src, webp, alt, className }: IWebpProps) => (
    <picture className="w-full h-full">
        <source srcSet={webp} type="image/webp" />
        <source srcSet={src} type="image/jpeg" />
        <Image src={src} alt={alt} className={className} />
    </picture>
)