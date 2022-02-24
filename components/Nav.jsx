import Link from 'next/link'
import Image from 'next/image'

import {
  NavWrapper,
  NavLogo,
  NavAuthButtons,
  FixedWhiteButtonWrapper,
  FixedAccentButtonWrapper,
} from 'elements'
import logo from '../public/kj-plus-logo.svg'

export const Nav = ({ ioRatio }) => (
  <NavWrapper ioRatio={ioRatio}>
    <NavLogo ioRatio={ioRatio}>
      <Link href="/">
        <div>
          <Image src={logo} alt="Logo KJ+" />
        </div>
      </Link>
    </NavLogo>

    <NavAuthButtons ioRatio={ioRatio}>
      <Link href="/auth/signup">
        <FixedAccentButtonWrapper>S’inscrire</FixedAccentButtonWrapper>
      </Link>
      <Link href="/auth/signin">
        <FixedWhiteButtonWrapper>S’identifier</FixedWhiteButtonWrapper>
      </Link>
    </NavAuthButtons>
  </NavWrapper>
)
