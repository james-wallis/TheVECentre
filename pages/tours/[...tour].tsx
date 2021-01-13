import { NextSeo } from 'next-seo';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ITour } from '../../interfaces';

import Tours from '../../tours';

const AWS_PREFIX='https://thevecentre.s3.eu-west-2.amazonaws.com';

function getTourURLs(tour: string[], mediaIndex: number): string[] {
    let urlPrefix: string = '';

    const name: string = tour && tour[0] ? tour[0].toLowerCase() : '';
    const area: string = tour && tour[1] ? tour[1].toLowerCase() : '';

    switch (name) {
        case 'main':
            if (area === 'office' || area === 'press-office' || area === 'artistjodi') {
                urlPrefix = `${AWS_PREFIX}/office`;
            } else {
                urlPrefix = `${AWS_PREFIX}/main`;
            }
            break;
        case 'christmas':
            urlPrefix = `${AWS_PREFIX}/christmas`;
            break;
        case 'artistjodi':
            urlPrefix = `${AWS_PREFIX}/gallery`;
            break;
    }

    if (!urlPrefix) {
        return [];
    }

    const url: string = mediaIndex > 0 ? `${urlPrefix}/index.htm?media-index=${mediaIndex}` : `${urlPrefix}/index.htm`;
    const socialThumbnailUrl: string = `${urlPrefix}/socialThumbnail.jpg`;
    return [url, socialThumbnailUrl];
}

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

interface IProps {
    title: string;
    description: string;
    tour: string[];
    mediaIndex: number;
}

const Tour = ({ title, description, tour, mediaIndex }: IProps) => {
    const router = useRouter();

    const redirectToMainTour = () => {
        typeof window !== 'undefined' && router.push('/tours/main');
    }

    const [url, socialThumbnailUrl] = getTourURLs(tour as string[], mediaIndex);

    // Only redirect to main tour if tour is not found
    if (tour && !url) {
        redirectToMainTour();
    }

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
        <div className=" w-screen" style={{ height: iframeHeight }}>
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
                          url: socialThumbnailUrl,
                          width: 1196,
                          height: 627,
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

export async function getStaticProps({ params }: { params: { tour: string[] } }) {
    // If tour not found (fallback) default to main
    const { title, description, subpaths }: ITour = Tours.find((tour) => tour.path === params.tour[0]) || Tours[0];
    const mediaIndex: number = subpaths[params.tour[1]] || 1;
    const props: IProps = { title, description, tour: params.tour, mediaIndex };
    return { props };
}

export async function getStaticPaths() {
    const paths: { params: { tour: string[] } }[] = [];
    Tours.forEach(({ path, subpaths }: ITour) => {
        // Push index
        paths.push({ params: { tour: [path] } });

        // Push all subpaths
        Object.keys(subpaths).forEach(subpath => {
            paths.push({ params: { tour: [path, subpath] } });
        });
    });

    return {
        paths,
        fallback: true,
    };
  }

export default Tour;
