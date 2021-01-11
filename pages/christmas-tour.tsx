import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// import Layout from '../components/Layout';

const ChristmasTour = () => {
    const router = useRouter()
    const url: string = "https://thevecentre.s3.eu-west-2.amazonaws.com/christmas/index.htm";


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

    async function redirectIfMobile() {
        const redirect: boolean = typeof window !== 'undefined' ? await shouldRedirect() : false;
        if (redirect) {
            router.push(url);
        }
    }

    // if (mobile) {
    //     redirect();
    // } else if (navigator.getVRDisplays) {
    //     navigator.getVRDisplays().then(function(displays) {
    //         if (displays.length > 0)
    //             redirect();
    //         else
    //             embed();
    //     }).catch(function(err) {
    //         embed();
    //     });
    // } else {
    //     embed();
    // }

    useEffect(() => {
        redirectIfMobile();
    }, [])

    return (
                        // <script type="text/javascript" src="/js/tour.js" />
        // <Layout title="Christmas Tour" description="A selection of videos showing what is on offer at The VECentre">
            <div className="h-screen w-screen">
                <iframe
                    width="100%"
                    height="100%"
                    src={url}
                    scrolling="auto"
                    frameBorder="0"
                    allowFullScreen
                    allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
                />
                {/* <div className="h-screen w-screen" id="tour-container"></div> */}
                {/* https://beta.3dvista.com/en/wiki/how-to-customize-the-url-of-your-tours-to-your-own-domain/ */}
                {/* <script type="text/javascript" src="/js/tour.js" /> */}
            </div>
        // </Layout>
    )
}

export default ChristmasTour;