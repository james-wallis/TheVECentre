import React, { ReactNode } from "react"
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

    const [yAxis, xAxis] = placement.split('-');
    let xPlacement: string = '';
    let yPlacement: string = '';

    switch (yAxis) {
        case 'top':
            yPlacement = 'items-start';
            break;
        case 'bottom':
            yPlacement = 'items-end';
            break;
        default:
            yPlacement = 'items-center';
            break;
    }

    switch (xAxis) {
        case 'left':
            xPlacement = 'justify-start';
            break;
        case 'right':
            xPlacement = 'justify-end';
            break;
        default:
            xPlacement = 'justify-center';
            break;
    }

    return `lg:${yPlacement} lg:${xPlacement}`;
}

const HeroImage = ({ src, icon, placement, dark }: IProps) => (
    <div className="mb-4 relative">
        {icon && (
            <div className={`absolute h-full w-full flex justify-center items-center ${getIconPlacement(placement)}`}>
                <EnterTourIcon dark={dark} />
            </div>
        )}
        <img className="h-hero-mobile object-cover md:h-auto min-h-hero-img" src={`/images/${src}`} alt='hero image' />
    </div>
)

export default HeroImage
