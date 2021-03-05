import React from 'react'
import Layout from '../components/Layout'
import { MainHeading, TextBlock } from '../components/PageElements'

import Tours from '../tours';
import { getTourURLs } from '../lib/utils';
import Link from 'next/link';

interface ITour {
    title: string;
    description: string;
    path: string;
    socialImageURL: string;
}

interface IProps {
    tours: ITour[]
}

const ToursPage = ({ tours }: IProps) => {
    return (
    <Layout title="Tours" description="From here you can access any of the tours at TheVECentre">
        <MainHeading>
            Tours
        </MainHeading>
        <TextBlock>
            <p className="mb-8">Click on a tour to enter.</p>
        </TextBlock>
        {tours.map(({ title, description, path, socialImageURL }: ITour) => (
            <React.Fragment key={title}>
                <TextBlock header={{ children: title, uppercase: true, thin: true }} newline>
                    {description}
                    <Link href={`/tours/${path}`}>
                        <a>
                            <img
                                src={socialImageURL}
                                alt={`Screenshot of the ${title} tour`}
                                className="mt-8 mb-20 px-2 md:px-12 lg:px-10 xl:px-14 max-h-tgi"
                            />
                        </a>
                    </Link>
                </TextBlock>
            </React.Fragment>
        ))}
  </Layout>
)}

export async function getStaticProps() {
    const props: IProps = { tours: Tours.map(tour => {
        const { socialThumbnail } = getTourURLs([tour.path, ''], 1);

        return {
            title: tour.title,
            description: tour.description,
            path: tour.path,
            socialImageURL: socialThumbnail,
        }
    }) };
    return { props };
}

export default ToursPage;