import React, { useState } from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../styles/index.css'
import Navigation from '../components/Navigation';
import { Hamburger } from '../components/NavigationIcons';

function MyApp({ Component, pageProps, router }: AppProps) {
    const url: string = `https://thevecentre.com${router.route}`;
    const [open, setOpen] = useState(false);
    return <>
        <DefaultSeo
            titleTemplate='%s @ The VECentre'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url,
                description: 'The VECentre - Virtual exhibition for NFTs.',
                site_name: 'The VECentre',
                images: [
                    {
                      url: 'https://thevecentre.com/icons/thevec.jpg',
                      width: 512,
                      height: 512,
                      alt: 'The VECentre logo',
                    },
                ],
            }}
            canonical={url}
        />
        <Hamburger onClick={() => setOpen(true)} />
        <div className="h-screen flex flex-col">
            <Navigation isOpen={open} closeMenu={() => setOpen(false)} />
            <Component {...pageProps} canonical={url} />
        </div>
    </>
}

export default MyApp
