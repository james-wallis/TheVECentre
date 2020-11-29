import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiFacebookBoxFill } from 'react-icons/ri';

const SocialIcons = () => (
    <div className="text-white text-3xl sm:text-4xl flex justify-between items-center flex-row lg:flex-col lg:my-3">
        <RiFacebookBoxFill className="mx-2 lg:mx-0" />
        <FaInstagram className="mx-2 lg:mx-0" />
        <FaYoutube className="mx-2 lg:mx-0" />
    </div>
)

export default SocialIcons
