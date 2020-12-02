interface IProps {
    onClick: any
}

export const Hamburger = ({ onClick }: IProps) => {
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

export const Cross = ({ onClick }: IProps) => {
    return (
        <div role="button" tabIndex={0} onClick={onClick} className="fixed lg:hidden z-50 h-14 w-14 top-0 right-0 m-4 bg-opacity-nav bg-white flex flex-col justify-center items-center outline-none">
          <span className="bg-navigation-gray w-10 h-1 transform rotate-45" />
          <span className="bg-navigation-gray w-10 h-1 transform -rotate-45" style={{ marginTop: '-3px' }} />
        </div>
    );
}