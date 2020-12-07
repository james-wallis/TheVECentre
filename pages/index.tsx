import Link from 'next/link'
import React from 'react'
import HeroImage from '../components/HeroImage'
import { EnterTourIcon, RemoteIcon } from '../components/Icons'
import Layout from '../components/Layout'
import { Italic, MainHeading, TextBlock, Date, Row, Placeholder } from '../components/PageElements'
import VideoPlayer from '../components/VideoPlayer'

const christmasVideoId: string = 'IXU6adtXfMQ';

const IndexPage = () => (
    <Layout title="Home" description="The VECentre is a creative concept which has evolved during the COVID-19 outbreak.">
        <HeroImage src='Homepage-MainPic@2x.jpg' icon placement="top-left"/>
        <MainHeading>
            <Italic>Christmas@</Italic> TheVECentre
        </MainHeading>
        <Date>
            14 December - 7 January
        </Date>
        <EnterTourIcon dark />
        <TextBlock header={{ children: <Italic>Christmas Market</Italic> }}>
            <p>Immerse yourself in Christmas by walking around our interactive snowy log cabins.</p>
            <p>Each cabin will host a variety of art and crafts from the finest artisans.</p>
            <p>Find bespoke and unusual gifts for your loved ones, and support small businesses this Christmas.</p>
            <p>So grab a hot chocolate or mulled wine and explore the magic of our virtual wonderland.</p>
        </TextBlock>
        <VideoPlayer videoId={christmasVideoId} />
        <TextBlock header={{ children: 'Interactive Crafts and Baking' }}>
            <p>Watch instruction videos, download PDF instructions and templates to bring the festivities into your home.</p>
            <p>Fun for every age!</p>
        </TextBlock>
        <Row className="items-center">
            <Placeholder>VIDEO HERE</Placeholder>
            <EnterTourIcon>
                Teleport straight to the fun stuff!
            </EnterTourIcon>
            <Placeholder>VIDEO HERE</Placeholder>
        </Row>
        <Link href="/tour-guide">
            <a className="flex justify-center items-center">
                <TextBlock header={{ children: "Tour Guide" }}>
                    <p>View the instructions for navigating, viewing and learn how to use the interactive hotspots.</p>
                </TextBlock>
            </a>
        </Link>
        <RemoteIcon />
  </Layout>
)

export default IndexPage
