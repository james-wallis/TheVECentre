import { useEffect, useState } from "react";

export const useFullViewHeight = () => {
  const [iframeHeight, setIframeHeight] = useState('100vh');
  useEffect(() => {
    const windowSizeChanged = () => {
      typeof window !== 'undefined' && setIframeHeight(`${window.innerHeight}px`);
    }

    window.addEventListener('resize', windowSizeChanged);
    windowSizeChanged();
    return () => {
        window.removeEventListener('resize', windowSizeChanged)
    }
  }, [])

  return [iframeHeight];
}
