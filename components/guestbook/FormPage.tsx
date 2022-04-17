import React, { SyntheticEvent, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import Section from './Section';
import { GuestBookVariant, IGuestBookEntry } from '../../interfaces/GuestBook';
import { Recaptcha } from '../FormInputs';
import TheVECentreTitle from './TheVECentreTitle';
import OldMillhousePageTitle from './OldMillhousePageTitle';

interface IProps {
    range: string
    rightSide?: boolean
    variant: GuestBookVariant
}

const FormPage = ({ range, variant, rightSide = false }: IProps) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [showCaptcha, setShowCaptcha] = useState(false);

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        setShowCaptcha(true);
    }

    const sendCreateRequest = async (captchaValue: string | null) => {
        if (!captchaValue) {
            setResponseMessage('Invalid response returned from reCaptcha. Try again later.');
            return;
        }

        const date = moment().toISOString();
        const newEntry: IGuestBookEntry = {
            name,
            date,
            message,
        }

        const res = await axios.post(`/api/guestbook/${range}`, newEntry);
        if (res.status !== 200) {
            setResponseMessage('Error adding guestbook entry. Try again later.');
            return;
        }

        setResponseMessage('Successfully added to the guestbook! It can take a few minutes for new entries to be displayed.');
        setName('');
        setMessage('');
        setShowCaptcha(false);
    }

    return (
        <Section rightSide={rightSide} variant={variant}>
            <div className="flex flex-col h-full w-full text-white">
                {variant === "thevecentre" && <TheVECentreTitle large />}
                {variant === "artistjodi" && <OldMillhousePageTitle large />}
                <form onSubmit={submit} className={`text-base lg:text-lg mt-8 h-full flex flex-col justify-items-start items-center ${variant === "artistjodi" ? "text-gray-500 font-light" : "text-gray-300 font-normal"}`}>
                    <input
                        className="
                            appearance-none block w-full text-gray-700 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-400
                            p-3 pt-4 lg:p-5 bg-white my-3 lg:my-4 border border-gray-300 rounded-sm
                        "
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <textarea
                        className="
                            block w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 h-48
                            p-3 lg:p-5 bg-white my-3 lg:my-4 md:my-4 border border-gray-300 flex-1 flex-grow rounded-sm
                        "
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    {!responseMessage && !showCaptcha && (
                        <button
                            className="
                                bg-white text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400
                                border border-gray-300 inline-block transition-colors ease-in duration-150
                                w-full md:w-2/3 xl:w-1/3 disabled:opacity-50 disabled:bg-gray-200
                                py-3 my-3 lg:my-4 rounded-sm
                            "
                            disabled={!name || !message}
                        >
                            Submit
                        </button>
                    )}
                    {responseMessage && !showCaptcha && (
                        <p className="text-xl my-4">
                            {responseMessage}
                        </p>
                    )}
                    {showCaptcha && (
                        <Recaptcha onChange={sendCreateRequest} />
                    )}
                </form>
            </div>
        </Section>
    )
}

export default FormPage;
