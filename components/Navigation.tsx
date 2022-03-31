import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import { ILink } from '../interfaces'
import { motion } from 'framer-motion'
import useTailwindBreakpoint from '../hooks/useTailwindBreakpoint'

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

const Navigation = ({ isOpen }: IProps) => {
    const { pathname } = useRouter();
    const twBreakpoint = useTailwindBreakpoint();
    const isMobileNav = ['', 'sm', 'md'].includes(twBreakpoint);
    const activeClasses: string = 'border-dark-blue border-opacity-30 ';
    return (
        <motion.nav
            initial={isMobileNav ? 'closed' : 'open'}
            animate={!isOpen && isMobileNav ? 'closed' : 'open'}
            variants={isMobileNav ? variants : { open: variants.open }}
            transition={transition}
            className={`hidden fixed lg:flex lg:mr-8 lg:w-auto lg:h-auto lg:relative lg:flex-row w-screen h-screen z-top inset-0 bg-white flex-col justify-center items-center`}
        >
            {/* <NavigationCross onClick={closeMenu} /> */}
            {links.map(({ text, href }) => (
                <Link href={href} key={text}>
                    <a className={`lg:text-base text-2xl 2xl:mx-6 xl:mx-4 lg:mx-3 my-3 lg:my-0 text-center text-navigation-gray border-b-4 border-transparent ${pathname === href && activeClasses}`}>{text}</a>
                </Link>
            ))}
        </motion.nav>
    )
}

export default Navigation
