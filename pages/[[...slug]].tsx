import { GetStaticPaths, GetStaticProps } from 'next';
import DefaultErrorPage from 'next/error'
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ITour } from '../interfaces';
import { getTourURLs } from '../lib/utils';

import Tours from '../tours';

async function shouldRedirect(): Promise<boolean> {
    // const ua = (function() { return window.navigator.userAgent.toLowerCase(); })();
    // const inUA = function(value: string) { return (ua.search(value.toLowerCase()) >= 0); };
    // const mobile: boolean = inUA('android') || inUA('ios') || inUA('iphone') || inUA('ipod') || inUA('ipad');

    // if (mobile) {
    //     return true;
    // } else if (navigator.getVRDisplays) {
    //     try {
    //         const displays: any = await navigator.getVRDisplays();
    //         if (displays.length > 0)
    //             return true;
    //         else
    //             return false;
    //     } catch(err) {
    //         return false;
    //     }
    // }
    return false;
}

async function redirectIfMobile(router: NextRouter, url: string) {
    const redirect: boolean = typeof window !== 'undefined' ? await shouldRedirect() : false;
    if (redirect) {
        router.push(url);
    }
}

const Tour = ({ tour }: { tour: ITour }) => {
    // If tour isn't given, show 404 page
    if (!tour) {
        return <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <DefaultErrorPage statusCode={404} />
        </>
    }

    const router = useRouter();
    const slug = router.query.slug;
    const { title, description } = tour;
    const { indexHtml: url, socialThumbnail, favicon, manifest, browserConfig, miscDir } = getTourURLs(slug as string[]);

    useEffect(() => {
        redirectIfMobile(router, url);
    }, [router, url]);

    const windowSizeChanged = () => {
        typeof window !== 'undefined' && setIframeHeight(`${window.innerHeight}px`);
    }

    const [iframeHeight, setIframeHeight] = useState('100vh');
    useEffect(() => {
        window.addEventListener('resize', windowSizeChanged);
        windowSizeChanged();
        return () => {
            window.removeEventListener('resize', windowSizeChanged)
        }
    }, [])

    return (
        <div className="w-screen" style={{ height: iframeHeight }}>
            <Head>
                <link rel="shortcut icon" href={favicon} />
                <link rel="icon" sizes="48x48 32x32 16x16" href={favicon} />
                <link rel="apple-touch-icon" type="image/png" sizes="180x180" href={`${miscDir}/icon180.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`${miscDir}/icon16.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${miscDir}/icon32.png`} />
                <link rel="icon" type="image/png" sizes="192x192" href={`${miscDir}/icon192.png`} />
                <link rel="manifest" href={manifest} />
                <meta name="msapplication-TileColor" content="#333333" />
	            <meta name="msapplication-config" content={browserConfig} />
            </Head>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url,
                    description,
                    site_name: 'The VECentre',
                    images: [
                        {
                          url: socialThumbnail,
                          width: 1200,
                          height: 630,
                          alt: 'Tour Icon',
                        },
                    ],
                }}
            />
            {/* https://beta.3dvista.com/en/wiki/how-to-customize-the-url-of-your-tours-to-your-own-domain/ */}
            <iframe
                width="100%"
                height="100%"
                src={url}
                scrolling="auto"
                frameBorder="0"
                allowFullScreen
                allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
            />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Tours.map((tour: ITour) => ({
        params: {
            slug: [tour.path],
        }
    }));

    paths.push({
        params: {
            slug: []
        }
    });

    return {
        // Only `/`, `/main` and `/spring` are generated at build time
        paths,
        // Enable statically generating additional pages, use blocking so no loading page
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string[];
    // Default to main tour when a slug isn't given (home page)
    const tourPath = slug && slug.length > 0 ? slug[0] : "main";
    const tour = Tours.find((tour) => tour.path === tourPath) || false;
    return {
        props: { tour },
        // revalidate: 1,
    }
}

export default Tour;
