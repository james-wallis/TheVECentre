import Image from 'next/image'

const ScrollToViewTag = () => (
    <div className="fixed z-30 -right-8 lg:-right-10 bottom-2 h-36 md:h-42 lg:h-48">
        <Image layout="fill" className="h-full object-fit" src="/images/Icon-Swipe@2x.png" alt="press and drag to scroll icon" />
    </div>
)

export default ScrollToViewTag