import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ILink } from '../interfaces'
import { motion } from 'framer-motion'
import useTailwindBreakpoint from '../hooks/useTailwindBreakpoint'

import logo from '../images/logo.png'
import SocialIcons from './SocialIcons'
import { Cross } from './NavigationIcons'

interface IProps {
    isOpen: boolean
    closeMenu: () => void
}

const links: ILink[] = [
    { text: 'Home', href: '/' },
    { text: 'Spring', href: '/spring' },
    { text: 'VR Links', href: '/vr' },
    // { text: 'About', href: '/about' },
    // { text: 'Contact', href: '/contact' },
]

const variants = {
    open: {
        opacity: 1,
        x: 0,
        display: 'flex',
    },
    closed: {
        opacity: 0,
        x: '100%',
        transitionEnd: {
            display: 'none',
        },
    },
};

const transition = {
    type: 'spring',
    mass: 0.7,
    damping: 12,
    delay: 0,
};

const Navigation = ({ isOpen, closeMenu }: IProps) => {
    const { asPath } = useRouter();
    const twBreakpoint = useTailwindBreakpoint();
    const isMobileNav = ['', 'sm'].includes(twBreakpoint);
    const activeClasses: string = 'text-mint';
    const logoSize = isMobileNav ? 150 : 80;
    return (
        <motion.nav
            initial={isMobileNav ? 'closed' : 'open'}
            animate={!isOpen && isMobileNav ? 'closed' : 'open'}
            variants={isMobileNav ? variants : { open: variants.open }}
            transition={transition}
            className={`
                z-top inset-0 bg-black font-default md:px-10 lg:px-14
                hidden fixed w-screen h-full flex-col justify-center items-center
                md:flex md:w-auto md:h-24 md:relative md:flex-row
                py-10 md:py-0
            `}
        >
            <Cross onClick={closeMenu} />
            <Image
                src={logo}
                alt="The VECentre logo"
                width={logoSize}
                height={logoSize}
            />
            <h1 className={`text-white text-4xl md:ml-4 lg:ml-6 font-medium mt-6 md:mt-0`}>The VECentre</h1>
            <div className="flex-1 flex flex-col md:flex-row justify-center md:justify-end items-center mx-4">
                {links.map(({ text, href }) => (
                    <Link href={href} key={text}>
                        <a className={`
                                md:text-base text-2xl xl:mx-4 md:mx-3 my-2 md:my-0 text-center
                                text-white uppercase font-semibold hover:text-mint transition-colors
                                ${(href === "/" ? (asPath === "/" || asPath.startsWith("/home") || asPath.startsWith("/main")) : asPath.startsWith(href)) && activeClasses}
                            `}
                            onClick={closeMenu}
                        >
                            {text}
                        </a>
                    </Link>
                ))}
            </div>
            <SocialIcons />
        </motion.nav>
    )
}

export default Navigation
