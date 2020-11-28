import { useState } from 'react';
import Navigation from './Navigation'
import { Hamburger } from './NavigationIcons'
import SocialIcons from './SocialIcons'

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="bg-dark-blue fixed w-screen z-50 xl:h-56 h-52">
            <div className="header-slant flex items-center justify-between py-8 bg-white xl:h-24 h-20">
                <h1 className="2xl:text-5xl xl:text-4xl md:text-3xl ml-16 font-light block">
                    <span className="inline">The Virtual&nbsp;</span>
                    <span className="inline">Exhibition Centre</span>
                </h1>
                <Navigation isOpen={isOpen} closeMenu={() => setOpen(false)} />
                <Hamburger onClick={() => setOpen(true)}/>
            </div>
            <div className="flex justify-between item-center px-12 w-100 h-32">
                <div className="flex h-full">
                    <img className="max-h-full object-cover" src='/images/Header-logo@2x.jpg' alt='The VECentre Logo' />
                    <img className="max-h-full object-cover" src='/images/Header-360@2x.jpg' alt='360 logo' />
                </div>
                <SocialIcons />
            </div>
        </header>
    )
}

export default Header
