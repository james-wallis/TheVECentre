import Image from 'next/image'
import logo from '../../images/logo.png'

interface IProps {
    large?: boolean;
}

const TheVECentreTitle = ({ large = false }: IProps) => (
    <div className="text-center">
        <Image
            src={logo}
            alt="The VECentre logo"
            width="140"
            height="140"
        />
        <h1 className={`font-light ${large ? 'text-4xl md:text-5xl mt-6 md:mt-8' : 'text-3xl md:text-4xl'}`}>
            <span className="block">The VECentre</span>
        </h1>
        <p className={`${large ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-extralight text-gray-400 mt-2`}>Guestbook</p>
    </div>
)

export default TheVECentreTitle;
