import Link from 'next/link'
import React from 'react';
import { ILink } from '../interfaces'
import { LinkToExternalSite, TelephoneLink, EmailLink } from './ExternalLinks'
import { Image } from './Image'
import { Row } from './PageElements'

const FooterGif = require('../images/vecfooterlogo.gif');

const links: ILink[] = [
    { text: 'FAQ', href: '/' },
    { text: 'Press Office', href: '/press-office' },
    { text: 'Privacy Policy', href: '/' },
    { text: 'Terms & Conditions', href: '/' },
]

const Footer = () => (
    <footer className="bg-footer w-screen flex flex-col justify-between text-white bottom-0 p-2 xl:text-xl text-lg mt-12 lg:mt-16 z-40 relative">
        <Row className='lg:justify-between my-0'>
            <div className="flex items-center lg:items-end flex-col lg:flex-row">
                <div className="text-center">
                    <Image className="w-48" src={FooterGif} alt="360 virtual tour logo" />
                    <p>TOURS</p>
                </div>
                <div className="flex flex-col text-center lg:text-left lg:ml-4 mt-6 lg:mt-auto">
                    {links.map(({ text, href }: ILink) => (
                        <Link href={href} key={text}>
                            <a className="my-1">
                                {text}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="text-center lg:text-right md:mx-12 lg:mx-0 lg:mr-12 flex flex-col justify-between mt-5 md:mb-2 lg:my-0 lg:mt-10 lg:w-3/5">
                <p className="text-3xl my-2 lg:my-0">
                    Call <TelephoneLink />
                </p>
                <p className="text-3xl my-2 lg:my-0">
                    <EmailLink />
                </p>
                <p className="my-2 lg:my-0">
                    The COVID-19 pandemic has lead to cancelled shows leaving artists few options to exhibit their work.
                </p>
                <p className="my-2 lg:my-0">
                    The VECentre is a virtual venue designed with user experience in mind to reflect a live show, by artists for artists.
                </p>
            </div>
        </Row>
        <Row>
            <div className="lg:ml-4 text-base text-center lg:text-left">
                <p>&copy;2020 Designed by Inner Sancum Design, <LinkToExternalSite href="https://wallis.dev?ref=vec">Website built by James.</LinkToExternalSite></p>
                <p>All rights reserved.</p>
            </div>
        </Row>
    </footer>
)

export default Footer
