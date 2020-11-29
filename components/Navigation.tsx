import Link from 'next/link'
import React from 'react'
import { ILink } from '../interfaces'
import { Cross } from './NavigationIcons'

interface IProps {
    isOpen: boolean
    closeMenu: any
}

const links: ILink[] = [
    { text: 'Home', href: '/' },
    { text: 'Tour Guide', href: '/tour-guide' },
    { text: 'Gallery', href: '/gallery' },
    { text: 'Exhibitors', href: '/exhibitors' },
    { text: 'Venue Hire', href: '/hire' },
    { text: 'About The VECentre', href: '/about' },
    { text: 'Contact', href: '/contact' },
]

const Navigation = ({ isOpen, closeMenu }: IProps) => (
    <nav className={`${isOpen ? 'fixed' : 'hidden'} flex lg:flex lg:mr-8 lg:w-auto lg:h-auto lg:relative lg:flex-row w-screen h-screen z-50 inset-0 bg-white flex-col justify-center items-center`}>
        <Cross onClick={closeMenu} />
        {links.map(({ text, href }) => (
            <Link href={href}>
                <a className="lg:text-base text-2xl 2xl:mx-6 xl:mx-4 lg:mx-3 my-3 lg:my-0 text-center">{text}</a>
            </Link>
        ))}
    </nav>
)

export default Navigation
