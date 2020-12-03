import React from 'react'
import { Image } from '../components/Image';
import { EmailLink, TelephoneLink } from '../components/ExternalLinks'
import HeroImage from '../components/HeroImage'
import { EnterTourIcon } from '../components/Icons'
import Layout from '../components/Layout'
import { MainHeading, TextBlock, Row } from '../components/PageElements'
import VideoPlayer from '../components/VideoPlayer'

const Newspaper1 = require('../images/newspaper-1.jpg');
const Newspaper2 = require('../images/newspaper-2.jpg');
const Newspaper3 = require('../images/newspaper-3.jpg');

const PressOfficePage = () => (
    <Layout title="Press Office" description="Arrange a press meeting or enquire about The VECentre">
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
            <Image className="px-4 py-4" src={Newspaper1} alt="newspaper 1" />
            <Image className="px-4 py-4" src={Newspaper2} alt="newspaper 2" />
            <Image className="px-4 py-4" src={Newspaper3} alt="newspaper 3" />
        </Row>
        <VideoPlayer videoId="bcT5Mtqze38" />
  </Layout>
)

export default PressOfficePage