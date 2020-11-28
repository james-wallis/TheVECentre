import Navigation from './Navigation'
import SocialIcons from './SocialIcons'

const Header = () => (
    <header className="bg-black fixed w-screen z-50 xl:h-56 h-52">
        <div className="flex items-center justify-between py-8 bg-white this-thing relative xl:h-24 h-20">
            <h1 className="xl:text-5xl lg:text-3xl ml-16 font-light">The Virtual Exhibition Centre</h1>
            <Navigation />
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

export default Header
