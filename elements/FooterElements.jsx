import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  /* max-width: 1200px;
  width: 100%; */
  margin: ${({ theme }) => {
    const { spacings, containerPadding } = theme
    return `${spacings.large} ${containerPadding.lg}`
  }};
  padding-bottom: ${({ theme }) => theme.containerPadding.lg};

  color: ${props => props.theme.colors.discrete};
  font-family: ${props => props.theme.fontFamilies.title};
  font-weight: ${props => props.theme.fontWeights.titleRegular};
  font-style: italic;
  font-size: 15px;

  scroll-snap-align: ${({ scrollIsSnapped }) =>
    scrollIsSnapped ? 'end' : 'none'};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    scroll-snap-align: none;
  }
`

export const FooterH2 = styled.h2`
  color: ${props => props.theme.colors.black};
  font: ${props => props.theme.fonts.h2};
  margin-bottom: ${props => props.theme.spacings.small};
  font-size: 20px;

  a {
    color: ${props => props.theme.colors.black};
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 15px;
  }
`

export const FooterNavWrapper = styled.nav`
  display: flex;

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 11px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  a {
    transition: ${props => props.theme.transitions};
    text-decoration: none;
    color: ${props => props.theme.colors.discrete};
    margin-right: ${props => props.theme.spacings.medium};
    cursor: pointer;

    &:hover,
    &:focus {
      filter: brightness(50%);
    }
  }
`

export const FooterSocialWrapper = styled.div`
  /* max-width: 1200px;
  margin: auto; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* text-align: center; */
  /* justify-content: center; */
`

export const FooterCopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => props.theme.spacings.small};
  p {
    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 11px;
    }
  }
`

export const Footer120Ref = styled.p`
  &:last-child {
    font-size: 12px;
    margin-top: ${props => props.theme.spacings.xSmall};
    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 9px;
    }
  }
`

export const FooterSocialIcons = styled.div`
  margin: ${props => {
    let h = props.theme.spacings.xxSmall
    return `0 ${h}`
  }};

  img {
    transition: ${props => props.theme.transitions};
    width: 15px;

    &:hover,
    &:focus {
      filter: brightness(50%);
    }
  }
`
