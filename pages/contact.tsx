import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'
import { EmailLink, TelephoneLink } from '../components/ExternalLinks'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import { MainHeading, TextBlock } from '../components/PageElements'
import emailjs from 'emailjs-com';
import { IContactFormDetails } from '../interfaces'
import { Recaptcha } from '../components/FormInputs'

const constructEmailJSResponseMessage = (isError: boolean, name: string, email: string, company: string, message: string) => {
    if (isError) {
        return <p>Error sending message through contact form, please contact Mish directly on <TelephoneLink />.</p>
    }
    return (
        <>
            <p className="font-semibold my-2 text-xl">Message sent!</p>
            <p className="my-2">We aim to respond within 24 hours, if you have an urgent query please phone or message us on <TelephoneLink />.</p>
            <p className="font-semibold mt-4 mb-2 text-lg">Your message:</p>
            {
                [name, email, company, message].map(str => (
                    <p className="my-2 whitespace-pre-line" key={str}>{str}</p>
                ))
            }
        </>
    );
}

const ContactPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [showCaptcha, setShowCaptcha] = useState(false)
    const [sending, setSending] = useState(true)
    const [emailError, setEmailError] = useState(false)
    const [{ name, email, company, message }, setFormData] = useState({ name: '', email: '', company: '', message: '' })

    const submitFormAndShowCaptcha = (formData: IContactFormDetails): void => {
        setFormData(formData)
        setShowModal(true)
        setShowCaptcha(true)
    };

    const sendEmail = (captchaValue: string | null) => {
    setShowCaptcha(false)
    setSending(true)

    const params = {
        name,
        email,
        company,
        message,
        'g-recaptcha-response': captchaValue,
    };

    // Display submitting message
    emailjs.send(
        process.env.EMAIL_JS_SERVICE as string,
        process.env.EMAIL_JS_TEMPLATE as string,
        params,
        process.env.EMAIL_JS_USER as string,
    )
    .then(({ status }: { status: number }) => {
        setSending(false)
        if (status !== 200) {
            setEmailError(true)
        }
    }, () => {
        setSending(false)
        setEmailError(true)
    });
};

    return (
        <Layout title="Contact" description="Contact page for The VECentre. Call, email or use the built-in contact form">
            {/* <HeroImage src='Mainpic-exhibitors@2x.jpg' icon /> */}
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
                        { id: 1, el: 'Call, Text or Message' },
                        { id: 2, el: <TelephoneLink /> },
                        { id: 3, el: <EmailLink /> },
                    ].map(({ id, el }) => (
                        <p key={id} className="text-3xl lg:text-5xl text-bold my-2">{el}</p>
                    ))
                }
            </TextBlock>
            <ContactForm submitForm={submitFormAndShowCaptcha} />
            {showModal && <Modal title="Contact Form" closeModal={() => setShowModal(false)}>
                {showCaptcha
                    ? <>
                        <p className="pb-5">Thanks for contacting TheVECentre, we just need to make sure you&apos;re not a robot!</p>
                        <Recaptcha onChange={sendEmail} className="py-10" />
                    </> : <>
                        {sending
                            ? <></>
                            :
                            <div className="text-left overflow-y-scroll">
                                {constructEmailJSResponseMessage(emailError, name, email, company, message)}
                            </div>
                        }
                    </>
                }
            </Modal>}
        </Layout>
    )
}

export default ContactPage
