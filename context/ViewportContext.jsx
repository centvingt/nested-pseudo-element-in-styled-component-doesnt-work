import React, { createContext, useState } from 'react'

const ViewportContext = createContext({})

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(null)
  const [height, setHeight] = React.useState(null)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  )
}
