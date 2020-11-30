import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { LinkToExternalSite } from './ExternalLinks';

const icons: any[] = [
    {
        Icon: RiFacebookBoxFill,
        href: '',
    },
    {
        Icon: FaInstagram,
        href: '',
    },,
    {
        Icon: FaYoutube,
        href: '',
    },,
]

const SocialIcons = () => (
    <div className="text-white text-3xl text-3xl xl:text-4xl flex justify-between items-center flex-row lg:flex-row lg:my-2">
        {icons.map(({ Icon, href }) => (
            <LinkToExternalSite href={href}>
                <Icon className="ml-0 mr-4 lg:mr-0 lg:ml-4" />
            </LinkToExternalSite>
        ))}
    </div>
)

export default SocialIcons
