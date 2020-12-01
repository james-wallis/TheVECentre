import React, { useReducer } from "react";
import { SubmitButton, TextArea, TextInput } from "./FormInputs";
// import emailjs from "emailjs-com";

interface formDetails {
    name: string
    email: string
    company: string
    message: string
}

const initialState: formDetails = {
    name: '',
    email: '',
    company: '',
    message: '',
};

function reducer(state: formDetails, action: { type: string, value: string }) {
    if (!Object.keys(initialState).includes(action.type)) {
        throw new Error();
    }
    return { ...state, [action.type]: action.value };
}

const ContactForm = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);
    // const [showFormErr, setShowFormErr] = useState(false);
    // const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
    // const [showCaptcha, setShowCaptcha] = useState(false);
    const { name, email, company, message } = formState;

    // const submitFormAndShowCaptcha = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     setShowCaptcha(true);
    // };

    // const sendEmail = (captchaValue: any) => {
    //     if (name === '' || email === '' || company === '' || message === '') {
    //         setShowFormErr(true);
    //         return;
    //     }

    //     const params = {
    //         ...formState,
    //         'g-recaptcha-response': captchaValue,
    //     };

    //     setFormSubmitted({ title: 'Sending message...', paragraph: '' });
    //     emailjs.send(
    //         process.env.EMAIL_JS_SERVICE as string,
    //         process.env.EMAIL_JS_TEMPLATE as string,
    //         params,
    //         process.env.EMAIL_JS_USER as string,
    //     )
    //     .then(({ status }) => {
    //         if (status === 200) {
    //             setFormSubmitted({ title: 'Message has been sent', paragraph: 'Mike will be in contact with you soon.' });
    //         } else {
    //             setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Mish either by phone or email.' });
    //         }
    //     }, () => {
    //         setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Mish either by phone or email.' });
    //     });
    // };

    // console.log(formState);
    return (
        <form className="w-11/12 lg:w-full max-w-lg mt-12">
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextInput id="name" type="text" label="Name" value={name} onChange={(e) => dispatch({ type: 'name', value: e.target.value })} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextInput id="email" type="email" label="Email" value={email} onChange={(e) => dispatch({ type: 'email', value: e.target.value })} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextInput id="company" type="text" label="Company" value={company} onChange={(e) => dispatch({ type: 'company', value: e.target.value })} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextArea id="message" label="Message" value={message} onChange={(e) => dispatch({ type: 'message', value: e.target.value })} />
            </div>
            <div className="md:flex md:items-center md:justify-center w-full">
                <SubmitButton />
            </div>
        </form>
    )
}

export default ContactForm