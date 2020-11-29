import React from 'react'
import HeroImage from '../components/HeroImage'
import { EnterTourIcon, RemoteIcon } from '../components/Icons'
import Layout from '../components/Layout'
import { Italic, MainHeading, TextBlock, Date, Row, Placeholder } from '../components/PageElements'

const IndexPage = () => (
    <Layout>
        <HeroImage src='Homepage-MainPic@2x.jpg' icon placement="top-left"/>
        <MainHeading>
            <Italic>Christmas@</Italic> TheVECentre
        </MainHeading>
        <Date>
            30 Nov - 20 Dec 2020
        </Date>
        <EnterTourIcon dark />
        <TextBlock header={{ children: <Italic>Christmas Market</Italic> }}>
            <p>Immerse yourself in Christmas by walking around our interactive snowy log cabins.</p>
            <p>Each cabin will host a variety of art and crafts from the finest artisans.</p>
            <p>Find bespoke and unusual gifts for your loved ones, and support small businesses this Christmas.</p>
            <p>So grab a hot chocolate or mulled wine and explore the magic of our virtual wonderland.</p>
        </TextBlock>
        <Placeholder>VIDEO HERE</Placeholder>
        <TextBlock header={{ children: 'Interactive Crafts and Baking' }}>
            <p>Watch instruction videos, download PDF instructions and templates to bring the festivities into your home.</p>
            <p>Fun for every age!</p>
        </TextBlock>
        <Row>
            <Placeholder>VIDEO HERE</Placeholder>
            <EnterTourIcon>
                Teleport straight to the fun stuff!
            </EnterTourIcon>
            <Placeholder>VIDEO HERE</Placeholder>
        </Row>
        <TextBlock header={{ children: "Tour Guide" }}>
            <p>Watch instruction videos, download PDF instructions and templates to bring the festivities into your home.</p>
            <p>Fun for every age!</p>
        </TextBlock>
        <RemoteIcon />
  </Layout>
)

export default IndexPage
