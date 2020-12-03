import { ReactNode } from 'react'
import { Image } from './Image'

const EnterTourImage = require('../images/Icon-Entertour-1@2x.png')
const RemoteImage = require('../images/Icon-remote@2x.jpg')
const TakeMeThereDark = require('../images/takeme-dark.png')
const TakeMeThereLight = require('../images/takeme-light.png')

interface IProps {
    dark?: boolean
    children?: ReactNode
}

const takeMeThereIcon = (dark: boolean) => {
    const className: string = 'w-4/5';
    const alt: string = 'take me there icon';
    const LightIcon = <Image className={className} src={TakeMeThereLight} alt={alt} />
    const DarkIcon = <Image className={className} src={TakeMeThereDark} alt={alt} />
    return dark ? DarkIcon : LightIcon;
}

export const EnterTourIcon = ({ dark = false, children }: IProps) => (
    <div className="flex flex-col w-48 md:w-56 lg:w-64 xl:w-72 items-center m-4">
        <Image className="pb-4 w-3/5" src={EnterTourImage} alt="enter tour icon" />
        {
            children
                ? <p className="text-center text-lg">{children}</p>
                : takeMeThereIcon(dark)
        }
    </div>
)

export const RemoteIcon = () => (
    <div className="flex flex-col w-48 items-center m-4">
        <Image className="pb-4" src={RemoteImage} alt="remote icon" />
    </div>
)