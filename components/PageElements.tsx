import { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

interface ITextBlockProps extends IProps {
    title?: ReactNode
}

export const Placeholder = ({ children }: IProps) => (
    <p className="text-6xl my-12">{children}</p>
)

export const MainHeading = ({ children }: IProps) => (
    <h2 className="text-6xl my-6">{children}</h2>
)

export const SubHeading = ({ children }: IProps) => (
    <h3 className="text-5xl text-gray-600 my-4">{children}</h3>
)

export const TextBlock = ({ title, children }: ITextBlockProps) => (
    <div className="text-lg text-center my-3">
        {title && <SubHeading>{title}</SubHeading>}
        {children}
    </div>
)

export const Date = ({ children }: IProps) => (
    <h3 className="text-4xl text-gray-600 my-4">{children}</h3>
)

export const Italic = ({ children }: IProps) => (
    <span className="italic">
        {children}
    </span>
)

export const Row = ({ children }: IProps) => (
    <div className="flex flex-row my-4">
        {children}
    </div>
)
