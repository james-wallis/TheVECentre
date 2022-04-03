interface IProps {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Hamburger = ({ onClick }: IProps) => {
    const hamburger = [];
    for (let i = 0; i < 3; i += 1) {
        hamburger.push(
          <span key={`hamburger-${i}`} className="bg-mint w-5 h-0.5 my-0.5 rounded" />,
        );
    }

    return (
        <div
          onClick={onClick}
          role="button"
          tabIndex={0}
          className="fixed md:hidden z-40 h-12 w-12 top-0 left-0 m-4 bg-opacity-nav bg-black flex flex-col justify-center items-center outline-none rounded-full border-2 border-mint"
        >
            {hamburger}
        </div>
    );
}

export const Cross = ({ onClick }: IProps) => {
    return (
        <div role="button" tabIndex={0} onClick={onClick} className="fixed md:hidden z-50 h-12 w-12 top-0 left-0 m-4 bg-opacity-nav bg-black flex flex-col justify-center items-center outline-none">
          <span className="bg-white w-10 h-1 transform rotate-45" />
          <span className="bg-white w-10 h-1 transform -rotate-45" style={{ marginTop: '-3px' }} />
        </div>
    );
}
