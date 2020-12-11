import { useEffect, useState } from 'react'

const breakpoints = {
    // These are min-widths in px
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
}

const convertWidthToBreakpoint = (width: number) => {
    if (width >= breakpoints['2xl']) {
        return '2xl';
    } else if (width >= breakpoints['xl']) {
        return 'xl';
    } else if (width >= breakpoints['lg']) {
        return 'lg';
    } else if (width >= breakpoints['md']) {
        return 'md';
    } else if (width >= breakpoints['sm']) {
        return 'sm';
    } else {
        return '';
    }
}

const useTailwindBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('lg')

    const handleResize = () => {
        const newBreakpoint = convertWidthToBreakpoint(window.innerWidth);
        setBreakpoint(newBreakpoint)
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return breakpoint;
}

export default useTailwindBreakpoint;