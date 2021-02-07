interface IProps {
    large?: boolean;
}

const GuestBookPageTitle = ({ large = false }: IProps) => (
    <div className="uppercase text-center text-gray-700">
        <h1 className={`font-light ${large ? 'text-5xl mt-64' : 'text-4xl'}`}>
            <span className="block">The old</span>
            <span className="block">millhouse</span>
        </h1>
        <p className={`${large ? 'text-3xl' : 'text-2xl'} font-extralight text-gray-500`}>Gallery</p>
    </div>
)

export default GuestBookPageTitle;
