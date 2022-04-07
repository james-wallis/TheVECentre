import React from 'react'
import { NextSeo } from 'next-seo'
import { getTourURLs } from '../lib/utils'
import { allVecTours } from '../tours'

const VrPage = () => {
    return (
        <div
            className="flex flex-col pt-20 text-white text-center pb-20 md:pb-32"
        >
            <NextSeo
                title="VR"
                description="Quick links to all VECentre virtual environments"
            />
            <h2
                className='text-5xl uppercase font-semibold'
            >
                VR Links
            </h2>
            <p className='mt-4 px-4'>
                Direct links to tours without the navigation bar. For the best VR experience.
            </p>
            <div className="flex flex-row justify-center items-start lg:px-24 xl:px-32 2xl:px-48 flex-wrap mt-10">
                {allVecTours.map(({ title, path }) => {
                    const { indexHtml, socialThumbnail } = getTourURLs([path]);
                    return (
                        <div
                            key={`link-to-${title}-tour`}
                            className="w-full md:w-1/2 my-10"
                        >
                            <a
                                href={indexHtml} rel="noopener noreferrer"
                                target="_blank"
                                className="flex flex-col w-full px-4 xl:px-10 2xl:px-20"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={socialThumbnail} alt={title} width="100%" />
                                <p className='text-2xl uppercase font-bold mt-5'>{title}</p>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VrPage
