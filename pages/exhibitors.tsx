import React from 'react'
import { EmailLink, TelephoneLink } from '../components/ExternalLinks'
import HeroImage from '../components/HeroImage'
import { EnterTourIcon } from '../components/Icons'
import Layout from '../components/Layout'
import { MainHeading, TextBlock } from '../components/PageElements'
import VideoPlayer from '../components/VideoPlayer'

const ExhibitorPage = () => (
    <Layout title="Exhibitors" description="See what it means to become an exhibitor at The VECentre">
        <HeroImage src='Mainpic-exhibitors@2x.jpg' icon />
        <MainHeading thin>
            Want to join us?
        </MainHeading>
        <EnterTourIcon dark />
        <TextBlock>
            <p>Your exhibitor experience begins with a virtual tour of the sample room.</p>
        </TextBlock>
        <TextBlock>
            <p>Here, we can video call to discuss your stand options and show you around the venue.</p>
        </TextBlock>
        <TextBlock>
            <p>Arrange a meeting or enquire about prices:</p>
            <p>Please call Mish on <TelephoneLink /> or email the office <EmailLink /></p>
        </TextBlock>
        <VideoPlayer videoId="ykcDbQB9ktI" />
  </Layout>
)

export default ExhibitorPage