import Img from 'react-optimized-image';
import Tag from '../public/images/Icon-Swipe@2x.png'

const ScrollToViewTag = () => (
    <div className="fixed z-30 -right-8 lg:-right-10 bottom-2 h-36 md:h-42 lg:h-48">
        <Img type="scrollToViewTag" className="h-full object-fit" src={Tag} alt="press and drag to scroll icon" />
    </div>
)

export default ScrollToViewTag