import { createContext, useContext, useEffect, useState } from 'react'

export const ViewportContext = createContext()

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext)
  return { width, height }
}
