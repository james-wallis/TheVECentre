import { ReactNode } from "react"

interface IProps {
    children: ReactNode,
    className?: string,
}

interface IHeaderProps extends IProps {
    thin?: boolean
    uppercase?: boolean
}

interface ITextBlockProps extends IProps {
    newline?: boolean
    header?: IHeaderProps
}

export const Placeholder = ({ children }: IProps) => (
    <p className="text-6xl my-12">{children}</p>
)

export const MainHeading = ({ children, thin, uppercase }: IHeaderProps) => (
    <h2 className={`text-5xl md:text-6xl text-center mt-6 md:mt-12 lg:mt-16 mb-6 ${thin ? 'font-light' : 'font-normal'} ${uppercase && 'uppercase'}`}>{children}</h2>
)

export const SubHeading = ({ children, thin, uppercase }: IHeaderProps) => (
    <h3 className={`text-3xl md:text-5xl text-center text-gray-600 my-4 ${thin ? 'font-light' : 'font-normal'} ${uppercase && 'uppercase'}`}>{children}</h3>
)

export const TextBlock = ({ newline, children, header }: ITextBlockProps) => (
    <div className={`xl:text-2xl text-xl text-center my-3 text-gray-900 font-light w-4/5 lg:w-3/5 ${newline && 'mb-10'}`}>
        {header && <SubHeading {...header}>{header.children}</SubHeading>}
        {children}
    </div>
)

export const Date = ({ children }: IProps) => (
    <h3 className="text-4xl text-gray-600 my-4">{children}</h3>
)

export const Italic = ({ children }: IProps) => (
    <span className="italic text-7xl font-cursive">
        {children}
    </span>
)

export const Row = ({ children, className }: IProps) => (
    <div className={`flex flex-col lg:flex-row my-4 ${className || ''}`}>
        {children}
    </div>
)


export const PageBreak = () => (
    <span className="block my-8" />
)
