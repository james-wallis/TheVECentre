import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type Props = {
    title: string
    description: string
}

const TourLayout = ({ title, description }: Props) => {
    const router = useRouter()
    const url: string = 'https://thevecentre.s3.eu-west-2.amazonaws.com/christmas/index.htm';


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

    useEffect(() => {
        redirectIfMobile();
    }, [])

    return (
        <div className="h-screen w-screen">
            <NextSeo
                title={title}
                description={description}
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

export default TourLayout;