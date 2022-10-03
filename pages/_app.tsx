import React, { useState } from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../styles/index.css'
import Navigation from '../components/Navigation';
import { Hamburger } from '../components/NavigationIcons';
import { useFullViewHeight } from '../hooks/useFullViewHeight';
import { tours } from "../tours";

const routesWithoutNav = ["/guestbooks/thevecentre", "/guestbooks/artistjodi"];

function MyApp({ Component, pageProps, router: { asPath } }: AppProps) {
    const url: string = `https://thevecentre.com${asPath}`;
    const [open, setOpen] = useState(false);
    const [fullViewHeight] = useFullViewHeight();
    const setContainerHeight = asPath === "/" || tours.find(({ path }) => asPath.startsWith(`/${path}`));
    const showNav = !routesWithoutNav.includes(asPath);
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
        {showNav && <Hamburger onClick={() => setOpen(true)} />}
        <div
            className="h-screen flex flex-col font-default"
            style={setContainerHeight && { height: fullViewHeight }}
        >
            {showNav && <Navigation isOpen={open} closeMenu={() => setOpen(false)} />}
            <Component {...pageProps} canonical={url} />
        </div>
    </>
}

export default MyApp
