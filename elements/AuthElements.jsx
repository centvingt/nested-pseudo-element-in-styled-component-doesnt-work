import styled from 'styled-components'
import { FlexibleAccentButtonWrapper } from 'elements'

export const AuthContainer = styled.div`
  padding: ${({ theme }) => {
    const t = theme.spacings.xLarge
    const h = theme.containerPadding.lg

    return `${t} ${h} 0`
  }};

  margin-bottom: ${({ theme }) => -theme.spacings.large};

  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 0 12vw;

  & > :first-child {
    padding-top: ${({ theme }) => theme.containerPadding.lg};
    margin-bottom: ${({ theme }) => theme.spacings.xxLarge};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 300px;
    justify-content: center;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export const AuthH1 = styled.h1`
  margin-top: ${props => props.theme.spacings.large};
  margin-bottom: ${props => props.theme.spacings.medium};
  margin-left: ${props => props.theme.spacings.medium};
  margin-right: ${props => props.theme.spacings.medium};
`

export const AuthH2 = styled.h2`
  font: ${props => props.theme.fonts.h3};
  margin: ${props => {
    let h = props.theme.spacings.medium
    return `0 ${h}`
  }};
  padding-top: ${props => props.theme.spacings.xxSmall};
`

export const AuthH2Payment = styled.h2`
  font-family: ${props => props.theme.fontFamilies.title};
  font-weight: ${props => props.theme.fontWeights.titleExtraBold};
  font-style: italic;
  font-size: 26px;
  line-height: 1.2;
  margin: ${props => {
    let h = props.theme.spacings.medium
    let b = props.theme.spacings.medium
    return `0 ${h} ${b}`
  }};
  padding-top: ${props => props.theme.spacings.xxSmall};
`

export const AuthFinalSubmitButton = styled.h2`
  font: ${props => props.theme.fonts.h4};
  color: ${props => props.theme.colors.accent};
  margin: ${props => {
    let { spacings } = props.theme
    let t = spacings.small
    let h = spacings.medium
    return `${t} ${h} 0`
  }};
  cursor: pointer;
`

export const AuthSubmitButton = styled(FlexibleAccentButtonWrapper)`
  margin-top: ${props => props.theme.spacings.medium};
`

export const AuthPreviousLink = styled.a`
  color: ${props => props.theme.colors.accent};
  text-decoration: underline;
  cursor: pointer;
`

export const AuthMainLogo = styled.div`
  width: ${({ theme }) => theme.logoWidth.small};
  margin: auto;
  cursor: pointer;
`

export const AuthBackgroundLogo = styled.div`
  width: 100%;
  filter: drop-shadow(0px 0px 1.2px rgba(0, 0, 0, 0.07))
    drop-shadow(0.3px 0.4px 2.8px rgba(0, 0, 0, 0.059))
    drop-shadow(1.1px 1.4px 5px rgba(0, 0, 0, 0.056))
    drop-shadow(2.6px 3.4px 8.3px rgba(0, 0, 0, 0.051))
    drop-shadow(5.7px 7.7px 14px rgba(0, 0, 0, 0.04))
    drop-shadow(15px 20px 26px rgba(0, 0, 0, 0.024));

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }
`

export const AuthTwoColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacings.small};
  align-items: end;
`

export const SigninH1 = styled.h1`
  font: ${props => props.theme.fonts.h2};
  line-height: 120%;
  margin: ${props => {
    const t = props.theme.spacings.large
    const b = props.theme.spacings.medium
    return `${t} 0 ${b}`
  }};
  text-align: center;
`

export const AuthErrorMessage = styled.p`
  color: ${props => props.theme.colors.accent};
  font: ${props => props.theme.fonts.main};
  margin: ${props => {
    let { spacings } = props.theme
    let v = spacings.small
    let h = spacings.medium
    return `${v} ${h}`
  }};
  a {
    font-family: ${props => props.theme.fontFamilies.fontTitle};
    font-weight: ${props => props.theme.fontWeights.mainExtraBold};
    color: ${props => props.theme.colors.accent};
  }
`

export const AuthSupplementaryLink = styled.p`
  font-size: 15px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fontFamilies.body};
  margin: ${props => {
    let { spacings } = props.theme
    let t = spacings.small
    let h = spacings.medium
    return `${t} ${h} 0`
  }};
  a {
    font-family: ${props => props.theme.fontFamilies.fontTitle};
    font-weight: ${props => props.theme.fontWeights.mainExtraBold};
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
  }
`

export const AuthSuccessMessage = styled.p`
  font: ${props => props.theme.fonts.h4};
  margin: ${props => {
    const t = props.theme.spacings.large
    const b = props.theme.spacings.medium
    return `${t} 0 ${b}`
  }};
  text-align: center;
`

export const SubscriptionH1 = styled.h1`
  font: ${props => props.theme.fonts.h2};
  line-height: 120%;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  text-align: center;
`

export const SubscriptionH2 = styled.h2`
  font: ${props => props.theme.fonts.h3};
  line-height: 120%;
  margin: ${({ theme }) => {
    const { spacings } = theme
    const t = spacings.medium
    const b = spacings.small
    return `${t} 0 ${b}`
  }};
  text-align: center;
`

export const SubscriptionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.shadow2};

  .note {
    font: ${props => {
      const family = props.theme.fontFamilies.body
      const weight = props.theme.fontWeights.mainLight

      return `normal ${weight} 10px ${family}`
    }};

    margin: ${({ theme }) => {
      const { spacings } = theme
      const t = spacings.xSmall

      return `${t} 20px 0`
    }};
  }

  ul {
    padding-left: 20px;
  }
  li {
    list-style: disc;
    margin-top: ${({ theme }) => theme.spacings.xSmall};
    &::marker {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`

export const SubscriptionButton = styled(FlexibleAccentButtonWrapper)`
  margin-top: ${props => props.theme.spacings.medium};
`

export const SubscriptionH3 = styled.h3`
  font: ${props => {
    const family = props.theme.fontFamilies.title
    const weight = props.theme.fontWeights.titleBold

    return `normal ${weight} 17px ${family}`
  }};

  line-height: 120%;

  margin-bottom: ${props => props.theme.spacings.small};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 16px;
  }

  strong {
    color: ${props => props.theme.colors.accent};

    em {
      font: ${props => {
        const family = props.theme.fontFamilies.title
        const weight = props.theme.fontWeights.titleExtraBold

        return `italic ${weight} 21px ${family}`
      }};

      @media ${({ theme }) => theme.breakpoints.mobile} {
        font-size: 20px;
      }
    }
  }
`

export const SubscriptionSupplementaryLink = styled(AuthSupplementaryLink)`
  text-align: center;
`
