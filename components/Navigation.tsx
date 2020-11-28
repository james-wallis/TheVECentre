import Link from 'next/link'
import { ILink } from '../interfaces'

const links: ILink[] = [
    { text: 'Home', href: '/' },
    { text: 'Tour Guide', href: '/tour-guide' },
    { text: 'Gallery', href: '/gallery' },
    { text: 'Exhibitors', href: '/exhibitors' },
    { text: 'Venue Hire', href: '/hire' },
    { text: 'About The VECentre', href: '/about' },
    { text: 'Contact', href: '/contact' },
]

const Navigation = () => (
    <nav className="mr-8">
        {links.map(({ text, href }) => (
            <Link href={href}>
                <a className="text-base xl:mx-6 lg:mx-3">{text}</a>
            </Link>
        ))}
    </nav>
)

export default Navigation
