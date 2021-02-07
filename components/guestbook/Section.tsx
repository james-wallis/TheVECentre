import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    rightSide?: boolean;
}

const Section = ({ children, rightSide = false }: IProps) => (
    <div className={`
        h-full w-full sm:w-1/2 py-20
        ${rightSide
            ? 'md:pr-12 lg:pr-24 xl:pr-28 md:pl-28 lg:pl-32'
            : 'md:pl-12 lg:pl-24 xl:pl-28 md:pr-28 lg:pr-32'
        }
    `}>
        <div className="h-full w-full">
            {children}
        </div>
    </div>
)

export default Section;
