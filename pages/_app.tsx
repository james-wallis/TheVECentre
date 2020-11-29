import React from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <DefaultSeo
            titleTemplate='%s @ The VECentre'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: 'https://www.url.ie/',
                site_name: 'The VECentre',
            }}
        />
        <Component {...pageProps} />
    </>
}

export default MyApp