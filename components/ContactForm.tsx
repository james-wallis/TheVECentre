import React from "react";
import { SubmitButton, TextArea, TextInput } from "./FormInputs";

const ContactForm = () => (
    <form className="w-full max-w-lg mt-12">
        <div className="flex flex-wrap -mx-3 mb-6">
            <TextInput id="name" type="text" label="Name" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <TextInput id="email" type="email" label="Email" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <TextInput id="company" type="text" label="Company" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <TextArea id="message" label="Message" />
        </div>
        <div className="md:flex md:items-center md:justify-center w-full">
            <SubmitButton />
        </div>
    </form>
)

export default ContactForm