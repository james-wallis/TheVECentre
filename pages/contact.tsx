import React from 'react'
import ContactForm from '../components/ContactForm'
import { EmailLink, TelephoneLink } from '../components/ExternalLinks'
import HeroImage from '../components/HeroImage'
import Layout from '../components/Layout'
import { MainHeading, TextBlock } from '../components/PageElements'

const ContactPage = () => (
    <Layout title="Contact" description="Contact page for The VECentre. Call, email or use the built-in contact form" canonical="/contact">
        <HeroImage src='Mainpic-exhibitors@2x.jpg' icon />
        <MainHeading thin uppercase>
            <span className="block mt-8 mb-4">There is no address</span>
            The VEC is virtual
        </MainHeading>
        <TextBlock newline>
            <p>Use this form or contact details below</p>
        </TextBlock>
        <TextBlock>
            {
                [
                    'Call Text or Message',
                    <TelephoneLink />,
                    <EmailLink />,
                ].map(el => (
                    <p className="text-3xl lg:text-5xl text-bold my-2">{el}</p>
                ))
            }
        </TextBlock>
        <ContactForm />
  </Layout>
)

export default ContactPage
