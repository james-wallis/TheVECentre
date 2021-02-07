import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    rightSide?: boolean;
}

const Section = ({ children, rightSide = false }: IProps) => (
    <div className={`
        h-full w-3/4 md:w-1/2 py-20
        ${rightSide
            ? 'hidden md:block md:pr-8 lg:pr-24 xl:pr-28 md:pl-20 lg:pl-32'
            : 'md:pl-8 lg:pl-24 xl:pl-28 md:pr-20 lg:pr-32'
        }
    `}>
        <div className="h-full w-full">
            {children}
        </div>
    </div>
)

export default Section;
