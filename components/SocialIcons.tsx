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
    <div className="text-white text-3xl sm:text-4xl flex justify-between items-center flex-row lg:flex-col lg:my-3">
        {icons.map(({ Icon, href }) => (
            <LinkToExternalSite href={href}>
                <Icon className="mx-2 lg:mx-0" />
            </LinkToExternalSite>
        ))}
    </div>
)

export default SocialIcons
