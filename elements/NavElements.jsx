import styled, { keyframes } from 'styled-components'

const appeareanceAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const disparitionAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  z-index: 2;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: ${({ theme }) => theme.spacings.small};
`

export const NavLogo = styled.div`
  width: ${({ theme }) => theme.logoWidth.xSmall};
  cursor: pointer;
  display: ${({ ioRatio }) => (ioRatio >= 0.1 ? 'none' : 'block')};
  position: absolute;
  top: ${({ theme }) => theme.spacings.small};
  left: ${({ theme }) => theme.spacings.small};

  display: ${({ ioRatio }) => (ioRatio >= 0.1 ? 'none' : 'inline-block')};
  opacity: ${({ ioRatio }) => (ioRatio >= 0.1 ? 1 : 0)};
  animation: 2s 0.4s ${appeareanceAnimation} forwards;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    /* width: ${({ theme }) => theme.logoWidth.xxSmall}; */
    display: none;
  }
`

export const NavAuthButtons = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacings.small};
  right: ${({ theme }) => theme.spacings.small};

  & > button {
    margin-left: ${({ theme }) => theme.spacings.small};

    /* @media ${({ theme }) => theme.breakpoints.tablet} {
      margin-left: ${({ theme }) => theme.spacings.small};
    } */
  }
  & > button:first-child {
    display: ${({ ioRatio }) => (ioRatio >= 0.1 ? 'none' : 'inline-block')};
    opacity: ${({ ioRatio }) => (ioRatio >= 0.1 ? 1 : 0)};
    animation: 2s 0.2s ${appeareanceAnimation} forwards;
  }
`
