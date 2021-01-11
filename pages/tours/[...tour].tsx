import { NextSeo } from 'next-seo';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect } from 'react';

const AWS_PREFIX='https://thevecentre.s3.eu-west-2.amazonaws.com';

const panoramas: { [key: string ]: { [key: string]: number } } = {
    christmas: {
        baking: 19,
        craft: 18,
        santa: 22,
        market: 7,
    },
    main: {
        outside: 1,
        reception: 3,
        lift: 30,

        // Office tour idk why it's main/
        office: 1,
        'press-office': 14,
        artistjodi: 22,
    },
}

function getTourURL(tour: string[]): string {
    let urlPrefix: string = '';
    let panoramaIndex: number = -1;

    const name: string = tour && tour[0] ? tour[0].toLowerCase() : '';
    const area: string = tour && tour[1] ? tour[1].toLowerCase() : '';

    switch (name) {
        case 'main':
            if (area === 'office' || area === 'press-office' || area === 'artistjodi') {
                urlPrefix = `${AWS_PREFIX}/office/index.htm`;
            } else {
                urlPrefix = `${AWS_PREFIX}/main/index.htm`;
            }
            break;
        case 'christmas':
            urlPrefix = `${AWS_PREFIX}/christmas/index.htm`;
            break;
    }

    if (area) {
        panoramaIndex = panoramas[name.toLowerCase()][area.toLowerCase()];
    }

    const url: string = panoramaIndex && panoramaIndex !== -1 ? `${urlPrefix}?media-index=${panoramaIndex}` : urlPrefix;
    return url;
}

async function shouldRedirect(): Promise<boolean> {
    const ua = (function() { return window.navigator.userAgent.toLowerCase(); })();
    const inUA = function(value: string) { return (ua.search(value.toLowerCase()) >= 0); };
    const mobile: boolean = inUA('android') || inUA('ios') || inUA('iphone') || inUA('ipod') || inUA('ipad');

    if (mobile) {
        return true;
    } else if (navigator.getVRDisplays) {
        try {
            const displays: any = await navigator.getVRDisplays();
            if (displays.length > 0)
                return true;
            else
                return false;
        } catch(err) {
            return false;
        }
    }
    return false;
}

async function redirectIfMobile(router: NextRouter, url: string) {
    const redirect: boolean = typeof window !== 'undefined' ? await shouldRedirect() : false;
    if (redirect) {
        router.push(url);
    }
}

const Tour = () => {
    const router = useRouter();
    const { tour } = router.query;
    console.log(tour);

    const redirectToMainTour = () => {
        typeof window !== 'undefined' && router.push('/tours/main');
    }

    const url = getTourURL(tour as string[]);

    // Only redirect to main tour if tour is not found
    if (tour && !url) {
        redirectToMainTour();
    }

    useEffect(() => {
        redirectIfMobile(router, url);
    }, [router, url]);

    const tourName: string = tour && tour[0] ? tour[0].charAt(0).toUpperCase() + tour[0].toLowerCase().slice(1) : 'Main';
    return (
        <div className="h-screen w-screen">
            <NextSeo
                title={`${tourName} tour`}
                description={`The immersive ${tourName} 3D tour brought to you by TheVECentre`}
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
                          alt: 'Tour Icon',
                        },
                    ],
                }}
            />
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

export default Tour;