import { GetStaticPaths, GetStaticProps } from 'next';
import DefaultErrorPage from 'next/error'
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ITour } from '../interfaces';
import { getTourURLs } from '../lib/utils';

import Tours from '../tours';

const Tour = ({ tour }: { tour: ITour }) => {
    const router = useRouter();

    // If tour isn't given, show 404 page
    if (!tour) {
        return <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <DefaultErrorPage statusCode={404} />
        </>
    }

    const slug = router.query.slug;
    const { title, description } = tour;
    const { indexHtml: url, socialThumbnail, favicon, manifest, browserConfig, miscDir } = getTourURLs(slug as string[]);

    return (
        <div
            className="flex-1"
        >
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
    const tourPath = slug && slug.length > 0 ? slug[0].toLowerCase() : "main";
    const tour = Tours.find((tour) => tour.path === tourPath) || false;
    return {
        props: { tour },
        // revalidate: 1,
    }
}

export default Tour;
