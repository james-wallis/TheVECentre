import React from 'react'
import { EmailLink, TelephoneLink } from '../components/ExternalLinks'
import HeroImage from '../components/HeroImage'
import { EnterTourIcon } from '../components/Icons'
import Layout from '../components/Layout'
import { MainHeading, TextBlock } from '../components/PageElements'
import VideoPlayer from '../components/VideoPlayer'

const HirePage = () => (
    <Layout title="Hire Venue" description="The VECentre is the perfect venue to host your event, during the pandemic and beyond." canonical="/hire">
        <HeroImage src='Mainpic-Venuehire.jpg' icon placement="top-left" />
        <MainHeading thin>
            Venue Hire The VECentre
        </MainHeading>
        <EnterTourIcon dark />
        <VideoPlayer videoId="cqzBbm9Aeho" />
        <TextBlock>
            <p>We would love to discuss your event and tell you about the VECentre.</p>
        </TextBlock>
        <TextBlock>
            <p>Let's arrange a meeting at our virtual office, within the tour.</p>
        </TextBlock>
        <TextBlock newline>
            <p>Here, we can video call and show you around the centre.</p>
        </TextBlock>
        <TextBlock newline>
            <p>OUR SERVICES INCLUDE:</p>
            <p>Design and build of your event, from individual stands, right up to large functions,</p>
            <p>Interactive hotspots</p>
            <p>Audio and live chat</p>
            <p>Bespoke 3D sculpted models</p>
            <p>Public or restricted entry to the tour</p>
            <p>(For trade shows and private group events)</p>
        </TextBlock>
        <TextBlock>
            <p>The VECentre is the perfect venue to host your event, during the pandemic and beyond.</p>
        </TextBlock>
        <TextBlock newline>
            <p>Energy Live states that 'A virtual exhibition will create less than 1&#37; of the carbon emissions of a live event'.</p>
            <p>If you care about the environment, a virtual exhibition is perfect for you, offering:</p>
            <p>Reduced carbon footprint</p>
            <p>Saving energy, money, travel and so on.</p>
        </TextBlock>
        <TextBlock newline>
            <p>POST-PANDEMIC WHEN THE WORLD IS BACK TO NORMAL</p>
            <p>A virtual event can be run in tandem with a live event opening up your exhibition to:</p>
            <p>International visitors</p>
            <p>International exhibitors</p>
            <p>Hybrid show.</p>
        </TextBlock>
        <TextBlock>
            <p>If you want to arrange a meeting or enquire about the centre:</p>
            <p>Please call Mish on <TelephoneLink /> or email the office <EmailLink /></p>
        </TextBlock>
  </Layout>
)

export default HirePage