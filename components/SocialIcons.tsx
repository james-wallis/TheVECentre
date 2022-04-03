import { IconType } from 'react-icons';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { LinkToExternalSite } from './ExternalLinks';

const icons: { Icon: IconType, href: string }[] = [
    {
        Icon: FaTwitter,
        href: 'https://twitter.com/TheVECentre',
    },
    {
        Icon: RiFacebookBoxFill,
        href: 'https://www.facebook.com/thevecentre',
    },
    {
        Icon: FaInstagram,
        href: 'https://www.instagram.com/thevecentre',
    },
]

const SocialIcons = () => (
    <div className="text-white text-3xl xl:text-4xl flex justify-between items-center flex-row lg:flex-row lg:my-2 mr-2 lg:mr-0">
        {icons.map(({ Icon, href }) => (
            <LinkToExternalSite key={href} href={href}>
                <Icon className="mx-2 lg:mx-4" />
            </LinkToExternalSite>
        ))}
    </div>
)

export default SocialIcons
