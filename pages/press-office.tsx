import React from 'react'
import { EmailLink, TelephoneLink } from '../components/ExternalLinks'
import HeroImage from '../components/HeroImage'
import { EnterTourIcon } from '../components/Icons'
import Layout from '../components/Layout'
import { MainHeading, TextBlock, Placeholder, Row } from '../components/PageElements'

const PressOfficePage = () => (
    <Layout>
        <HeroImage src='VecPressoffice.jpg' icon placement='mid-left' />
        <MainHeading>
           Press Office
        </MainHeading>
        <EnterTourIcon dark />
        <TextBlock>
            <p>We encourage press contact to spread the word about The VECentre.</p>
            <p>We can arrage a meeting in the virtual Press Office where we can video call and show you around the centre.</p>
            <p>Arrange a meeting or enquire about The VECentre.</p>
        </TextBlock>
        <TextBlock>
            <p>If you want to arrange a meeting or enquire about the centre:</p>
            <p>Please call Mish on <TelephoneLink /> or email the office <EmailLink /></p>
        </TextBlock>
        <Row>
            {
                ['newspaper-1.jpg', 'newspaper-2.jpg', 'newspaper-3.jpg'].map((imgSrc: string) => (
                    <img className="px-4 py-4 lg:w-1/3" src={`/images/${imgSrc}`} alt={imgSrc} />
                ))
            }
        </Row>
        <Placeholder>
            VIDEO HERE
        </Placeholder>
  </Layout>
)

export default PressOfficePage