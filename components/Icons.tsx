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

interface IClickableProps {
    onClick: any
}

interface IClickableCrossProps extends IClickableProps {
    className?: string
    length: number
    thickness: number
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

export const NavigationHamburger = ({ onClick }: IClickableProps) => {
    const hamburger = [];
    for (let i = 0; i < 3; i += 1) {
        hamburger.push(
          <span key={`hamburger-${i}`} className="bg-navigation-gray w-8 h-1 my-1" />,
        );
    }

    return (
        <div
          onClick={onClick}
          role="button"
          tabIndex={0}
          className="lg:hidden z-40 h-14 w-14 top-0 right-0 m-4 bg-opacity-nav bg-white flex flex-col justify-center items-center outline-none"
        >
            {hamburger}
        </div>
    );
}

export const Cross = ({ onClick, className, length, thickness }: IClickableCrossProps) => (
    <div role="button" tabIndex={0} onClick={onClick} className={`z-50 top-0 right-0 flex flex-col justify-center items-center outline-none ${className}`}>
        <span className={`bg-navigation-gray w-${length} h-${thickness} transform rotate-45`} />
        <span className={`bg-navigation-gray w-${length} h-${thickness} transform -rotate-45`} style={{ marginTop: '-4px' }} />
    </div>
)

export const NavigationCross = ({ onClick }: IClickableProps) => (
    <Cross onClick={onClick} className="fixed lg:hidden h-14 w-14 m-4 bg-opacity-nav bg-white" length={10} thickness={1} />
)