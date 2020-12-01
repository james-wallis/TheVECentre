import React from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps) {
    const url: string = `https://thevecentre.com${router.route}`;
    return <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
        </Head>
        <DefaultSeo
            titleTemplate='%s @ The VECentre'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url,
                description: 'The VECentre - The perfect venue to host your virtual event or trade show.',
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