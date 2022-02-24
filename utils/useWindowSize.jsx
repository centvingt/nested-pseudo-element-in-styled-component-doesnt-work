import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: undefined,
    windowHeight: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        heiwindowHeightght: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
// https://newbedev.com/how-to-get-a-react-component-s-size-height-width-before-render
// https://dev.to/anxinyang/easy-lazy-loading-with-react-intersection-observer-api-1dll
