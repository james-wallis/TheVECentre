import { useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import Navigation from './Navigation'
import { Hamburger } from './NavigationIcons'
import SocialIcons from './SocialIcons'

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [scrollIsAtTop, setScroll] = useState(true);
    const { scrollY } = useViewportScroll()


    scrollY.onChange(x => {
        setScroll(x <= 70);
    })

    const fullClasses = 'xl:h-header-xl lg:h-header-lg h-header';
    const minimisedClasses = 'xl:h-header-xl-mini lg:h-header-lg-mini h-header-mini';
    const heightClass = scrollIsAtTop ? fullClasses : minimisedClasses;
    const headerTopHeight: string = scrollIsAtTop ? 'h-header-top' : 'h-1/2';
    const headerBottomHeight: string = scrollIsAtTop ? 'h-header-bottom' : 'h-1/2';

    return (
        <header className={`transition-all duration-300 ease-out bg-dark-blue fixed w-screen z-40 ${heightClass}`}>
            <div className={`header-slant flex items-center justify-between bg-white ${headerTopHeight}`}>
                <h1 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl ml-10 lg:ml-16 font-light block text-header-blue">
                    <span className="inline">The Virtual&nbsp;</span>
                    <span className="inline">Exhibition Centre</span>
                </h1>
                <Navigation isOpen={isOpen} closeMenu={() => setOpen(false)} />
                <Hamburger onClick={() => setOpen(true)}/>
            </div>
            <div className={`flex justify-between item-center px-4 lg:px-12 w-100 relative z-30 ${headerBottomHeight}`}>
                <div className="flex h-full">
                    <img className="max-h-full object-cover" src='/images/Header-logo@2x.jpg' alt='The VECentre Logo' />
                    <img className="max-h-full object-cover hidden lg:block" src='/images/Header-360@2x.jpg' alt='360 logo' />
                </div>
                <SocialIcons />
            </div>
        </header>
    )
}

export default Header
