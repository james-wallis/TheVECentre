import React from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps, router }: AppProps) {
    console.log(router.route);
    const url: string = `https://thissite.com${router.route}`;
    return <>
        <DefaultSeo
            titleTemplate='%s @ The VECentre'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url,
                site_name: 'The VECentre',
            }}
            canonical={url}
        />
        <Component {...pageProps} canonical={url} />
    </>
}

export default MyApp