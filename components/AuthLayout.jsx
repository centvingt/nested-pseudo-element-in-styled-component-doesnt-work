import Image from 'next/image'
import Link from 'next/link'

import { AuthContainer, AuthMainLogo, AuthBackgroundLogo } from 'elements'

import logo from '../public/kj-plus-logo.svg'
import logoBackground from '../public/kj-plus-logo-background.svg'
import { useEffect } from 'react'

export const AuthLayout = ({ children, setScrollIsSnapped }) => {
  useEffect(() => {
    setScrollIsSnapped(false)
  })

  return (
    <AuthContainer>
      <div>
        <AuthMainLogo>
          <Link href="/">
            <div>
              <Image src={logo} alt="Logo KJ+" />
            </div>
          </Link>
        </AuthMainLogo>
        {children}
      </div>
      <AuthBackgroundLogo>
        <Image src={logoBackground} alt="Logo KJ+" layout="responsive" />
      </AuthBackgroundLogo>
    </AuthContainer>
  )
}
