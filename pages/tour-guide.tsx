import React from 'react'
import Layout from '../components/Layout'
import { MainHeading, TextBlock, Row } from '../components/PageElements'

const TourGuidePage = () => (
    <Layout>
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
            <div className="mr-6 w-1/2">
                <TextBlock header={{ children: 'Entering a tour' }}>
                    <p>Just click on one of the icons to enter a tour!</p>
                </TextBlock>
                <img src="/images/Icon-Entertour.jpg" alt="enter tour icon" />
                <TextBlock header={{ children: 'Floorplan' }}>
                    <p>Click on the floor plan icon</p>
                    <p>View the show layout and choose where to go</p>
                </TextBlock>
                <img src="/images/Icon-Floorplan.jpg" alt="floorplan icon" />
            </div>
            <div className="ml-6 w-1/2">
                <TextBlock header={{ children: 'Navigation' }}>
                    <p>Using the VECentre Remote</p>
                    <p>Moving around</p>
                </TextBlock>
                <img src="/images/Icon-Remote.jpg" alt="remote icon" />
            </div>
        </Row>
        <Row>
            <div className="mr-6 w-1/2">
                <TextBlock header={{ children: 'Viewing' }}>
                    <p>How to use gestures, press and drag</p>
                    <p>Or use the arrow keys on your keyboard</p>
                </TextBlock>
                <TextBlock>
                    <p>Your viewpoint controls</p>
                </TextBlock>
                <img src="/images/Icon-Entertour.jpg" alt="enter tour icon" />
            </div>
            <div className="mr-6 w-1/2">
                <TextBlock header={{ children: 'Hotspots' }}>
                    <p>'Hotspots' allow you to interact with the tour.</p>
                    <p>You can watch videos, download PDFs, enlarge images, and even purchase items.</p>
                    <p>These hotsports appear whenever you hover over them.</p>
                </TextBlock>
                <img src="/images/Icon-Floorplan.jpg" alt="floorplan icon" />
            </div>
        </Row>
  </Layout>
)

export default TourGuidePage