import { Image } from './Image';
const Tag = require('../images/Icon-Swipe@2x.png?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048')

const ScrollToViewTag = () => (
    <div className="fixed z-30 -right-8 lg:-right-10 bottom-2 h-36 md:h-42 lg:h-48">
        <Image className="h-full object-fit" src={Tag} alt="press and drag to scroll icon" />
    </div>
)

export default ScrollToViewTag