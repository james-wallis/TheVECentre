import React, { ReactNode } from "react"

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

const HeroImage = ({ icon, placement }: IProps) => (
    <div className="mb-4 relative h-hero-mobile md:h-auto h-hero-img">
        {icon && (
            <div className={`absolute h-full w-full flex justify-center items-center lg:pt-8 ${getIconPlacement(placement)}`}>
            </div>
        )}
    </div>
)

export default HeroImage
