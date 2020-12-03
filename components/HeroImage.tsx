import React, { ReactNode } from "react"
import { ResponsiveImage } from './Image'
import { EnterTourIcon } from "./Icons"

interface IProps {
    src: string
    icon?: ReactNode
    placement?: string
    dark?: boolean
}

const getIconPlacement = (placement: string | undefined) => {
    if (!placement) {
        return '';
    }

    return `header-${placement}`
}

const HeroImage = ({ src, icon, placement, dark }: IProps) => (
    <div className="mb-4 relative h-hero-mobile md:h-auto  h-hero-img">
        {icon && (
            <div className={`absolute h-full w-full flex justify-center items-center lg:py-10 ${getIconPlacement(placement)}`}>
                <EnterTourIcon dark={dark} />
            </div>
        )}
        <ResponsiveImage className="h-full object-cover h-full" src={require(`../images/heros/${src}?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048`)} alt='hero image' />
    </div>
)

export default HeroImage
