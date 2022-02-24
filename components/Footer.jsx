import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import instagram from 'public/icon-instagram.svg'
import facebook from 'public/icon-facebook.svg'
import twitter from 'public/icon-twitter.svg'

import {
  FooterWrapper,
  FooterH2,
  FooterNavWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  FooterCopyrightWrapper,
  Footer120Ref,
} from 'elements'

export const Footer = ({ scrollIsSnapped, setDisplayContactForm }) => {
  return (
    <FooterWrapper scrollIsSnapped={scrollIsSnapped}>
      <FooterH2>
        Des questions ? Appelez le (
        <a href="tel: +339 70 44 70 07">+339 70 44 70 07</a>)
      </FooterH2>
      <FooterNavWrapper>
        <Link href="/">FAQ</Link>
        <Link href="/">Mentions légales</Link>
        <Link href="/">CGV</Link>
        <Link href="/">Confidentialité</Link>
        <a onClick={() => setDisplayContactForm(true)}>Nous contacter</a>
      </FooterNavWrapper>
      <FooterCopyrightWrapper>
        <p>© 2021 Klesis France</p>
        <FooterSocialWrapper>
          <FooterSocialIcons>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebook} alt="Icône de Facebook" />
            </a>
          </FooterSocialIcons>
          <FooterSocialIcons>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="Icône de Twitter" />
            </a>
          </FooterSocialIcons>
          <FooterSocialIcons>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagram} alt="Icône d’Instagram" />
            </a>
          </FooterSocialIcons>
        </FooterSocialWrapper>
      </FooterCopyrightWrapper>
      <Footer120Ref>Site développé par 120.design</Footer120Ref>
    </FooterWrapper>
  )
}
