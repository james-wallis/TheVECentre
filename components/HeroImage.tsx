import React, { ReactNode } from "react"
import { EnterTourIcon } from "./Icons"

interface IProps {
    src: string
    icon?: ReactNode
    placement?: string
}

const HeroImage = ({ src, icon }: IProps) => (
    <div className="mb-4 relative">
        {icon && (
            <div className="absolute">
                <EnterTourIcon />
            </div>
        )}
        <img src={`/images/${src}`} alt='hero image' />
    </div>
)

export default HeroImage
