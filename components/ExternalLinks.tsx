import { ReactNode } from "react"

interface IProps {
    children: ReactNode
    href: string
}

export const LinkToExternalSite = ({ href, children }: IProps) => (
    // nofollow tells SEO crawlers to ignore this link
    // noopener and noreferrer protect users from phising attacks when using _blank
    <a href={href} rel="noopener noreferrer nofollow" target="_blank">{children}</a>
)

export const TelephoneLink = () => (
    <a href="tel:+447832359209">Call +44(0)7832359209</a>
)

export const EmailLink = () => (
    <a href="mailto:info@thevecentre.com">info@thevecentre.com</a>
)
