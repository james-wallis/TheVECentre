import { ReactNode } from 'react'
import Image from 'next/image'

interface IProps {
    dark?: boolean
    children?: ReactNode
}

const takeMeThereIcon = (dark: boolean) => {
    const className: string = 'w-4/5';
    const alt: string = 'take me there icon';
    const LightIcon = <Image className={className} src="/images/takeme-light.png" alt={alt} layout="intrinsic" width={500} height={500} />
    const DarkIcon = <Image className={className} src="/images/takeme-dark.png" alt={alt} layout="intrinsic" width={500} height={500} />
    return dark ? DarkIcon : LightIcon;
}

export const EnterTourIcon = ({ dark = false, children }: IProps) => (
    <div className="flex flex-col w-48 md:w-56 lg:w-64 xl:w-72 items-center m-4">
        <Image className="pb-4 w-3/5" src="/images/Icon-Entertour-1@2x.png" alt="enter tour icon" layout="fill" />
        {
            children
                ? <p className="text-center text-lg">{children}</p>
                : takeMeThereIcon(dark)
        }
    </div>
)

export const RemoteIcon = () => (
    <div className="flex flex-col w-48 items-center m-4">
        <Image className="pb-4" src="/images/Icon-remote@2x.jpg" alt="remote icon" layout="fill" />
    </div>
)