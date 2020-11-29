import React from 'react'
import { EmailLink, TelephoneLink } from '../components/ExternalLinks'
import HeroImage from '../components/HeroImage'
import { EnterTourIcon } from '../components/Icons'
import Layout from '../components/Layout'
import { MainHeading, TextBlock, Placeholder } from '../components/PageElements'

const ExhibitorPage = () => (
    <Layout>
        <HeroImage src='Mainpic-exhibitors@2x.jpg' icon />
        <MainHeading>
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
        <Placeholder>
            IMAGE HERE
        </Placeholder>
  </Layout>
)

export default ExhibitorPage