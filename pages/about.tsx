import React from 'react'
import HeroImage from '../components/HeroImage'
import Layout from '../components/Layout'
import { MainHeading, TextBlock, Placeholder, Row, PageBreak, SubHeading } from '../components/PageElements'

const keywordList: string[] = [
    'Authentic outdoor Christmas Markets',
    'Marquees to replicate county shows',
    'VIP rooms for private shows',
    'Unlimited exhibitors',
    'Custom-built 3D virtual tours',
    'Shell scheme stands',
    'Custom open space',
    '3D models',
    'Graphic panels',
    'Interactive hotspots',
    'Live chat within the tour',
];

const humanSkillsList: { mish: string[], jodi: string[] } = {
    mish: [
        'Event Organising',
        'Dance Instructor',
        'Promoter',
        'Consumer Sales',
        'Corporate Sales',
        'Art Consultation',
        'Client Contact',
    ],
    jodi: [
        '3D Build & Sculpt',
        'Graphic Design',
        'Interior Design',
        'Abstract Artist',
        'Resin Artist',
        'Creative all-rounder',
        'The one that wears the trousers',
    ],
};

const listElement = (item: string) => (
    <li className="my-6">{item}</li>
);

const AboutPage = () => (
    <Layout>
        <HeroImage src='Homepage-MainPic@2x.jpg' />
        <MainHeading thin>About TheVECentre</MainHeading>
        <TextBlock>
            <p>The VECentre is a creative concept which has evolved during the COVID-19 outbreak.</p>
        </TextBlock>
        <TextBlock>
            <p>We have felt the impact of COVID-19 as self-employed business owners within the arts.</p>
        </TextBlock>
        <TextBlock>
            <p>Many others in our field are also suffering the same consequences as us.</p>
        </TextBlock>
        <TextBlock>
            <p>A lack of exhibitions means a lack of exposure, which equates to a loss of income.</p>
        </TextBlock>
        <TextBlock>
            <p>The VECentre is</p>
            <p>A virtual venue unlike any other</p>
            <p>Designed with user experience in mind to reflect a live show</p>
            <p>Isles and stands and the products they hold</p>
            <p>Realistic user experience.</p>
            <p>By artists, for artists.</p>
        </TextBlock>
        <TextBlock>
            <p>OUR VISION</p>
            <p>Our vision is to reignite the ability for</p>
            <p>Creators to engage with their customers</p>
            <p>Uphold genuine human interaction.</p>
        </TextBlock>
        <TextBlock>
            <p>We have learnt first-hand that people buy from people, and they like it to be an experience.</p>
        </TextBlock>
        <TextBlock>
            <p>There is no better experience than a virtual show, unlike anything you've ever seen before.</p>
        </TextBlock>
        <TextBlock>
            <p>OUR SERVICES</p>
            <p>We offer a professional 3D service with engaging and interactive exhibitions,</p>
            <p>allowing artists to present their work online, locally and internationally.</p>
        </TextBlock>
        <TextBlock>
            <p>Exhibitions can simulate real-life shows, from the isles and stands to the products they hold,</p>
            <p>for an astonishingly realistic user experience.</p>
        </TextBlock>
        <TextBlock>
            <p>Bespoke build service</p>
            <p>for real venues, galleries and event organisers a virtual hall or space</p>
        </TextBlock>
        {keywordList.map(text => (
            <TextBlock>
                <p>{text}</p>
            </TextBlock>
        ))}
        <PageBreak />
        <SubHeading thin>THE HUMANS</SubHeading>
        <Row className="text-3xl text-gray-500 w-full justify-around">
            <ul className="text-right w-1/3">
                {humanSkillsList.mish.map(listElement)}
            </ul>
            <div className="mx-8 ">
                <img src='' alt='mish and jodi' />
            </div>
            <ul className="w-1/3">
                {humanSkillsList.jodi.map(listElement)}
            </ul>
        </Row>
        <TextBlock>
            <p>
                Jodi and Mish met in 1996 at a salsa class he was teaching.
                As a team for 20 years, they have been successfully selling
                Jodi's art to both trade and public at exhibitions and craft fairs,
                ranging from the NEC to Marquees. The pair gained sponsorships from significant companies
                including Epson, Adobe, Canon, Daler-Rowney, Fudi-Hunt, Hahnem&#xfc;hle,
                Innova Art and Wacom. Their combined experience of event organisation and
                promotion in both art and Latin dance makes them the ideal team for The VECentre.
            </p>
        </TextBlock>
        <TextBlock>
            <p>
                Jodi and Mish certainly did not take the easy road raising a child with no fixed, regular income.
            </p>
            <p>
                Though without their difficulties, they would not be who they are today; two tenacious,
                confident, committed people with a lot of experience in art, dance and event organisation.
            </p>
        </TextBlock>
        <TextBlock newline>
            <p>Their story reflects through their work.</p>
        </TextBlock>
        <TextBlock newline header={{ thin: true, children: 'Mish', uppercase: true }}>
            <p>Mish has worked with Jodi since her first exhibition.</p>
            <p>
                He has been at every show, setting them up and being the
                primary sales contact. Mish has dealt with private,
                trade and corporate clients, developing extensive experience
                in the field. He has also been responsible for pricing,
                framing, canvas stretching, sourcing materials, sales, marketing and sponsorships.
            </p>
        </TextBlock>
        <TextBlock>
            <p>
                After studying medicine in Egypt for six years, Mish chose to alter his path.
                Just before his final exams, he moved to the UK and he's never looked back.
            </p>
        </TextBlock>
        <TextBlock>
            <p>
                For the last ten years, Mish has also successfully run his own business,
                Salsa Mish, as a dance instructor and promotor.
            </p>
        </TextBlock>
        <TextBlock header={{ thin: true, children: 'Jodi', uppercase: true }}>
            <p>
                Jodi Phillips is a British artist who has spent the majority of her life based
                in Hertfordshire. Studying Typographic Design at Watford College let to a 12-year
                career as a designer, after which Jodi began to explore the freedom of
                expression through abstract art.
            </p>
        </TextBlock>
        <TextBlock>
            <p>
                The Prince's Trust aided Jodi by funding and mentoring her through her transition
                into becoming a professional artist. Jodi was one of the first artists to self-publish
                and hand embellish digital prints. She has worked closely with key trade manufacturers including
                Epson, Canon, Innova, Adobe, Wacom and Daler-Rowney.
            </p>
        </TextBlock>
        <TextBlock>
            <p>
                Jodi has sold work internationally, including Europe, Japan, Egypt, America, Singapore
                and widely throughout the United Kingdom.
            </p>
        </TextBlock>
        <TextBlock>
            <p>
                20 years later, Jodi is still creating and selling her work, constantly exploring new techniques and mediums.
                Her journey has been, and continues to be, an incredible adventure which has blessed her to work with her passion.
            </p>
        </TextBlock>
        <TextBlock>
            <p>
                Jodi, and her work, leave people feeling inspired.
            </p>
            <p>
                Full of emotion, her unique and versatile style can be recognised with her rich metallic touch.
            </p>
        </TextBlock>
  </Layout>
)

export default AboutPage