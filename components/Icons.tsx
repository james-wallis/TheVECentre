import { ReactNode } from 'react'

interface IProps {
    dark?: boolean
    children?: ReactNode
}

export const EnterTourIcon = ({ dark = false, children }: IProps) => (
    <div className="flex flex-col w-72 items-center m-4">
        <img className="pb-4 w-3/5" src="/images/Icon-Entertour-1@2x.jpg" alt="enter tour icon" />
        {
            children
                ? <p className="text-center text-lg">{children}</p>
                : <img className="w-4/5" src={`/images/takeme-${dark ? 'dark' : 'light'}.jpg`} alt="take me there icon" />
        }
    </div>
)

export const RemoteIcon = () => (
    <div className="flex flex-col w-48 items-center m-4">
        <img className="pb-4" src="/images/Icon-remote@2x.jpg" alt="remote icon" />
    </div>
)