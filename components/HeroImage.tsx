import React, { ReactNode } from "react"
import Image from "next/image";
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
    <div className="mb-4 relative">
        {icon && (
            <div className={`absolute h-full w-full flex justify-center items-center lg:py-10 ${getIconPlacement(placement)}`}>
                <EnterTourIcon dark={dark} />
            </div>
        )}
        <Image className="h-hero-mobile object-cover md:h-auto min-h-hero-img" src={`/images/heros/${src}`} alt='hero image' layout="fill" />
    </div>
)

export default HeroImage
