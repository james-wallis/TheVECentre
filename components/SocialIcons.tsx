import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { LinkToExternalSite } from './ExternalLinks';

const icons: any[] = [
    {
        id: 1,
        Icon: RiFacebookBoxFill,
        href: 'https://www.facebook.com/thevecentre',
    },
    {
        id: 2,
        Icon: FaInstagram,
        href: 'https://www.instagram.com/thevecentre',
    },
    {
        id: 3,
        Icon: FaYoutube,
        href: 'https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA',
    },
]

const SocialIcons = () => (
    <div className="text-white text-3xl xl:text-4xl flex justify-between items-center flex-row lg:flex-row lg:my-2 mr-2 lg:mr-0">
        {icons.map(({ id, Icon, href }) => (
            <LinkToExternalSite key={id} href={href}>
                <Icon className="ml-0 mr-2 lg:mr-0 lg:ml-4" />
            </LinkToExternalSite>
        ))}
    </div>
)

export default SocialIcons
