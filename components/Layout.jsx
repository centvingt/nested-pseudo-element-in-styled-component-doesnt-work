import { useState, cloneElement, useEffect } from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

import { Nav, Footer, GlobalStyles } from 'components'
import { LayoutWrapper, ContentWrapper } from 'elements'
import { Contact } from 'components'

export const Layout = ({ children }) => {
  const [scrollIsSnapped, setScrollIsSnapped] = useState(true)
  const [ioRatio, setIORatio] = useState(1)
  const [displayContactForm, setDisplayContactForm] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/gyn8hzm.css" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <LayoutWrapper scrollIsSnapped={scrollIsSnapped}>
        <Nav ioRatio={ioRatio} />
        {cloneElement(children, { setScrollIsSnapped, setIORatio })}
        <Footer
          scrollIsSnapped={scrollIsSnapped}
          setDisplayContactForm={setDisplayContactForm}
        />
        {displayContactForm && (
          <Contact setDisplayContactForm={setDisplayContactForm} />
        )}
      </LayoutWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
