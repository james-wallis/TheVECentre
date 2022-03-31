import React from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps, router }: AppProps) {
    const url: string = `https://thevecentre.com${router.route}`;
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
        <Component {...pageProps} canonical={url} />
    </>
}

export default MyApp
