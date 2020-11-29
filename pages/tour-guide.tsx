import React, { ReactNode } from 'react'
import Layout from '../components/Layout'
import { MainHeading, TextBlock, Row } from '../components/PageElements'

const TextAndImage = ({ children, header, src, alt }: { children: ReactNode, header: string, src: string, alt: string }) => (
    <>
        <TextBlock header={{ children: header }}>
            {children}
        </TextBlock>
        <img className="xl:px-48 px-4 md:px-16 lg:px-32 max-h-tgi" src={`/images/${src}`} alt={alt} />
    </>
)

const TourGuidePage = () => (
    <Layout title="Tour Guide" description="How to navigate The VECentre's online exhibitions" canonical="/tour-guide">
        <MainHeading>
            Tour Guide
        </MainHeading>
        <TextBlock>
            <p>Navigate the tour by click around the space</p>
        </TextBlock>
        <TextBlock>
            <p>Hover around the tours exhibits and screens to reveal action and infographics</p>
        </TextBlock>
        <TextBlock>
            <p>Click on 'hotspots' to activate the interaction.</p>
        </TextBlock>
        <Row>
            <div className="lg:mr-6 w-full lg:w-1/2 flex flex-col items-center">
                <TextAndImage header="Entering a tour" src="Icon-Entertour@2x.png" alt="enter tour icon">
                    <p>Just click on one of the icons to enter a tour!</p>
                </TextAndImage>
                <TextAndImage header="Floorplan" src="Icon-Floorplan@2x.png" alt="floorplan icon">
                    <p>Click on the floor plan icon</p>
                    <p>View the show layout and choose where to go</p>
                </TextAndImage>
            </div>
            <div className="lg:ml-6 w-full lg:w-1/2 flex flex-col items-center">
                <TextAndImage header="Navigation" src="Icon-Remote-Explained@2x.png" alt="remote icon">
                    <p>Using the VECentre Remote</p>
                    <p>Moving around</p>
                </TextAndImage>
            </div>
        </Row>
        <Row>
            <div className="lg:mr-6 w-full lg:w-1/2 flex flex-col items-center">
                <TextAndImage header="Viewing" src="Icon-Viewing@2x.png" alt="viewing icon">
                    <p>How to use gestures, press and drag</p>
                    <p>Or use the arrow keys on your keyboard</p>
                </TextAndImage>
            </div>
            <div className="lg:ml-6 w-full lg:w-1/2 flex flex-col items-center">
                <TextAndImage header="Hotspots" src="Icon-Hotspots@2x.png" alt="hotspots icon">
                    <p>'Hotspots' allow you to interact with the tour.</p>
                    <p>You can watch videos, download PDFs, enlarge images, and even purchase items.</p>
                    <p>These hotsports appear whenever you hover over them.</p>
                </TextAndImage>
            </div>
        </Row>
  </Layout>
)

export default TourGuidePage