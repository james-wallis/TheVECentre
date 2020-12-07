import React, { useEffect, useReducer, useState } from "react";
import { IContactFormDetails } from "../interfaces";
import { SubmitButton, TextArea, TextInput } from "./FormInputs";

const reContainsLetters = new RegExp('[a-zA-Z]');

const initialState: IContactFormDetails = {
    name: '',
    email: '',
    company: '',
    message: '',
};

function reducer(state: IContactFormDetails, action: { type: string, value: string }) {
    if (!Object.keys(initialState).includes(action.type)) {
        throw new Error('Invalid action type given to reducer');
    }

    return { ...state, [action.type]: action.value };
}

function validate(value: string) {
    return reContainsLetters.test(value);
}

function validateAllRequired(values: string[]) {
    for (const val of values) {
        if (!validate(val)) {
            return false;
        }
    }
    return true;
}

const ContactForm = ({ submitForm }: { submitForm: (formState: IContactFormDetails) => void }) => {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const { name, email, company, message } = formState;

    const [formStateHasChanged, setHasChanged] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        // Only set changed to true the first time that formState is changed or after a reset
        if (!formStateHasChanged && (name || email || company || message)) {
            setHasChanged(true);
        }

        const newFormIsValid = validateAllRequired([name, email, message]);
        if (formIsValid !== newFormIsValid) {
            setFormIsValid(newFormIsValid);
        }
    }, [formState]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form
        if (formIsValid) {
            submitForm(formState)
            Object.keys(formState).forEach(key => dispatch({ type: key, value: '' }))
            setHasChanged(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className="w-11/12 lg:w-full max-w-lg mt-12">
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextInput
                    id="name"
                    type="text"
                    label="Name*"
                    value={name}
                    onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                    error={formStateHasChanged && !validate(name)}
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextInput
                    id="email"
                    type="email"
                    label="Email*"
                    value={email}
                    onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                    error={formStateHasChanged && !validate(email)}
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextInput
                    id="company"
                    type="text"
                    label="Company"
                    value={company}
                    onChange={(e) => dispatch({ type: 'company', value: e.target.value })}
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <TextArea
                    id="message"
                    label="Message*"
                    value={message}
                    onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                    error={formStateHasChanged && !validate(message)}
                />
            </div>
            <div className="md:flex md:items-center md:justify-center w-full">
                <SubmitButton disabled={!formIsValid} />
            </div>
        </form>
    )
}

export default ContactForm