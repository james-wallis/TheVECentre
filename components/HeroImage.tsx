import React, { ReactNode } from "react"
import { ResponsiveImage } from './Image'
import { EnterTourIcon } from "./Icons"

interface IProps {
    src: string
    icon?: ReactNode
    placement?: string
    dark?: boolean
    href?: string
}

const getIconPlacement = (placement: string | undefined) => {
    if (!placement) {
        return '';
    }

    return `header-${placement}`
}

const HeroImage = ({ src, icon, placement, dark, href }: IProps) => (
    <div className="mb-4 relative h-hero-mobile md:h-auto h-hero-img">
        {icon && (
            <div className={`absolute h-full w-full flex justify-center items-center lg:pt-8 ${getIconPlacement(placement)}`}>
                <EnterTourIcon dark={dark} href={href || ''} />
            </div>
        )}
        <ResponsiveImage className="w-screen h-full md:h-hero-img object-cover" src={require(`../images/heros/${src}?sizes[]=250,sizes[]=500,sizes[]=750,sizes[]=1000,sizes[]=1250,sizes[]=1500,sizes[]=1750,sizes[]=2000`)} alt='hero image' />
    </div>
)

export default HeroImage
