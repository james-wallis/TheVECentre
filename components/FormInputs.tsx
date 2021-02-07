import { ReactNode } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

interface IInputProps {
    label: string,
    type?: string,
    id: string,
    placeholder?: string,
    tip?: string,
    error?: boolean,
    onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
    value: string,
}

interface IElementProps {
    children: ReactNode
}

const Label = ({ children }: IElementProps) => (
    <label className="block tracking-wide text-gray-700 text-xs mb-2">
        {children}
    </label>
)

const Tip = ({ children }: IElementProps) => (
    <p className="text-gray-600 text-xs italic">
        {children}
    </p>
)

const Error = ({ show }: { show: boolean }) => (
    <p className="text-red-500 text-xs italic h-2">{show && 'Please fill out this field.'} </p>
)

export const TextInput = ({ label, tip, type, placeholder, id, error, onChange, value }: IInputProps) => (
    <div className="w-full px-3">
        <Label>{label}</Label>
        <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
        {tip && <Tip>{tip}</Tip>}
        {<Error show={!!error} />}
    </div>
)

export const TextArea = ({ label, tip, id, error, onChange, value }: IInputProps) => (
    <div className="w-full px-3">
        <Label>{label}</Label>
        <textarea
            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
            id={id}
            onChange={onChange}
            value={value}
        />
        {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
        {tip && <Tip>{tip}</Tip>}
        {<Error show={!!error} />}
    </div>
)

export const SubmitButton = ({ disabled }: { disabled: boolean }) => (
    <div className="md:w-1/3">
        <button
            disabled={disabled}
            className="shadow bg-dark-blue hover:bg-dark-blue focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded w-full disabled:opacity-50"
            type="submit"
        >
            Send
        </button>
    </div>
)

export const Recaptcha = ({ onChange, className = '' }: { onChange: (captchaValue: string | null) => void, className?: string }) => (
    // The ReCAPTCHA has a set height and width and two divs which can't be styled. Use style to allow it to be centered
    <div className={className} style={{ width: 304, height: 78, margin: '0 auto' }}>
        <ReCAPTCHA sitekey={process.env.CAPTCHA_SITE_KEY as string} onChange={onChange} />
    </div>
)
