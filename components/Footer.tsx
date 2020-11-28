import Link from 'next/link'
import { ILink } from '../interfaces'
import { LinkToExternalSite, TelephoneLink, EmailLink } from './ExternalLinks'

const links: ILink[] = [
    { text: 'FAQ', href: '' },
    { text: 'Press Office', href: '' },
    { text: 'Privacy Policy', href: '' },
    { text: 'Terms & Conditions', href: '' },
]

const Footer = () => (
    <footer className="bg-black  w-screen flex justify-between text-white bottom-0 p-2 xl:text-xl text-lg mt-12">
        <div className="ml-4">
            <div className="flex items-end mb-2">
                <div className="text-center">
                    <img className="w-48" src='/images/Footer-Video@2x.jpg' alt='360 virtual tour logo' />
                    <p>TOURS</p>
                </div>
                <div className="flex flex-col ml-4">
                    {links.map(({ text, href }: ILink) => (
                        <Link href={href}>
                            <a className="my-1">
                                {text}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="ml-4 text-base">
                <p>&copy;2020 Designed by Inner Sancum Design, <LinkToExternalSite href="https://wallis.dev?ref=vec">Built by Jamesy</LinkToExternalSite></p>
                <p>All rights reserved</p>
            </div>
        </div>
        <div className="text-right mr-12 flex flex-col justify-between my-10">
            <p className="text-3xl">
                <TelephoneLink />
            </p>
            <p className="text-3xl">
                <EmailLink />
            </p>
            <p>
                The Covid-19 pandemic has lead to cancelled shows leaving artists few options to exhibit their work.
            </p>
            <p>
                The VECentre is a virtual venue designed with user experience in mind to reflect a live show, by artists for artists.
            </p>
        </div>
    </footer>
)

export default Footer
