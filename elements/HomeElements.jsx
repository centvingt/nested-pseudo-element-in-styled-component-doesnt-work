import styled, { css } from 'styled-components'

const CenteredContent = css`
  display: grid;
  align-items: center;
  min-height: 100vh;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    min-height: auto;
  }
`

export const HomeContainer = styled.main`
  padding: ${({ theme }) => {
    const h = theme.containerPadding.lg
    return `0 ${h}`
  }};

  & > header,
  & > section {
    scroll-snap-align: start;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      scroll-snap-align: none;
    }
  }

  p {
    font: ${props => props.theme.fonts.headerText};

    font-size: 21px;
    margin-bottom: ${props => props.theme.spacings.small};

    strong {
      font-weight: ${({ theme }) => theme.fontWeights.mainExtraBold};
    }

    @media ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 13px;
    }
  }
`

export const HomeHeader = styled.header`
  ${CenteredContent}

  & > .video-container {
    grid-area: 1 / 1 / 2 / 2;
    height: 100vh;
    width: 110vh;
    margin-right: -${({ theme }) => theme.containerPadding.lg};
    justify-self: end;

    z-index: -1;

    display: flex;
    justify-content: end;

    clip-path: polygon(0 14%, 100% 1%, 100% 99%, 0 86%);

    @media ${({ theme }) => theme.breakpoints.mobile} {
      width: 100vw;
      height: 46vw;
      align-items: start;
      align-self: flex-start;
      margin: 0 -${({ theme }) => theme.containerPadding.lg};
      clip-path: none;
    }

    & > iframe {
      width: 100%;
      height: 100%;
    }
  }
  & > img {
    grid-area: 1 / 1 / 2 / 2;
    height: 100%;
    max-width: 100%;
    margin-right: -${({ theme }) => theme.containerPadding.lg};
    justify-self: end;
    object-fit: cover;
  }
`

export const HomeHeaderContent = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  max-width: 680px;

  h1 {
    margin: ${({ theme }) => {
      let { spacings } = theme
      let t = spacings.medium
      let b = spacings.medium
      return `${t} 0 ${b}`
    }};

    @media ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 22px;
    }
  }
  h2 {
    font: ${props => props.theme.fonts.headerText};

    @media ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 15px;
    }
  }
  h3 {
    font: ${props => {
      const family = props.theme.fontFamilies.title
      const weight = props.theme.fontWeights.titleBold

      return `normal ${weight} 26px ${family}`
    }};

    margin-top: ${props => props.theme.spacings.small};

    @media ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 16px;
    }

    strong {
      color: ${props => props.theme.colors.accent};

      em {
        font: ${props => {
          const family = props.theme.fontFamilies.title
          const weight = props.theme.fontWeights.titleExtraBold

          return `italic ${weight} 40px ${family}`
        }};

        @media ${({ theme }) => theme.breakpoints.mobile} {
          font-size: 20px;
        }
      }
    }
  }

  p {
    margin-bottom: ${props => props.theme.spacings.large};

    @media ${({ theme }) => theme.breakpoints.mobile} {
      margin-bottom: ${props => props.theme.spacings.medium};
    }
  }

  .note {
    font: ${props => {
      const family = props.theme.fontFamilies.body
      const weight = props.theme.fontWeights.mainLight

      return `normal ${weight} 10px ${family}`
    }};

    margin-top: ${props => props.theme.spacings.medium};

    @media ${({ theme }) => theme.breakpoints.mobile} {
      margin-top: ${props => props.theme.spacings.small};
      /* font-size: 8px; */
    }
  }

  footer {
    @media ${({ theme }) => theme.breakpoints.mobile} {
      text-align: center;
    }
  }
`

export const HomeMainLogo = styled.div`
  width: ${({ theme }) => theme.logoWidth.large};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: ${({ theme }) => {
      const { spacings } = theme
      let t = spacings.large
      let b = spacings.large
      return `${t} 0 ${b}`
    }};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: ${({ theme }) => theme.logoWidth.small};
    margin: ${({ theme }) => {
      const { spacings } = theme
      let t = spacings.xxLarge
      let b = spacings.large
      return `${t} auto ${b}`
    }};
  }
`

export const HomeH2 = styled.h2`
  font: ${({ theme }) => {
    const { fontFamilies } = theme
    return `normal 800 46px/1.2 ${fontFamilies.title}`
  }};

  margin-bottom: ${({ theme }) => theme.spacings.small};

  margin-top: -8px;

  grid-area: 1 / 1 / 2 / -1;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 22px;
    margin-bottom: ${({ theme }) => theme.spacings.xSmall};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: left;
  }
`

const HomeSection = styled.section`
  ${CenteredContent}

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: ${({ theme }) => theme.spacings.xxLarge};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: ${({ theme }) => theme.spacings.large};
  }
`

const HomeTwoColumns = css`
  display: grid;
  gap: ${({ theme }) => theme.spacings.xLarge};

  h2 {
    text-align: left;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: ${({ theme }) => theme.spacings.small};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    p {
      margin-bottom: ${({ theme }) => theme.spacings.xSmall};
    }
  }
`

export const HomeDiscoverySection = styled(HomeSection)`
  & > div {
    ${HomeTwoColumns}
    grid-template-columns: 1fr 1.5fr;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      grid-template-columns: 1fr;
    }
  }
`

export const HomeSuperParents = styled(HomeSection)`
  & > div {
    ${HomeTwoColumns}
    grid-template-columns: 1.5fr 1fr;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      grid-template-columns: 1fr;
    }
  }
`
export const HomeSolution = styled(HomeSection)`
  & > div {
    display: grid;
    gap: ${({ theme }) => theme.spacings.medium};
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => {
      const { spacings } = theme
      return `${spacings.medium} ${spacings.medium}`
    }};

    @media ${({ theme }) => theme.breakpoints.tablet} {
      grid-template-columns: 1fr;
      gap: ${({ theme }) => theme.spacings.small};
    }
  }
`

export const HomeProfilesSection = styled(HomeSection)`
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacings.medium};

    @media ${({ theme }) => theme.breakpoints.tablet} {
      grid-template-columns: 1fr 1fr;
      gap: ${({ theme }) => theme.spacings.small};
    }
    @media ${({ theme }) => theme.breakpoints.mobile} {
      grid-template-columns: 1fr;
    }

    figure {
      display: grid;
      align-items: center;
      color: ${({ theme }) => theme.colors.accent};

      div,
      figcaption {
        grid-area: 1 / 1 / 2 / 2;
      }

      figcaption {
        z-index: 1;

        font-family: ${({ theme }) => theme.fontFamilies.title};
        font-weight: ${({ theme }) => theme.fontWeights.titleExtraBold};
        text-align: center;
        color: ${({ theme }) => theme.colors.white};

        padding: ${({ theme }) => {
          const { spacings } = theme
          let h = spacings.small

          return `0 ${h}`
        }};

        /* text-shadow: 0px 0px 42.1px rgba(0, 0, 0, 0.026),
          0px 0px 58.3px rgba(0, 0, 0, 0.045),
          0px 0px 67.3px rgba(0, 0, 0, 0.056), 0px 0px 73px rgba(0, 0, 0, 0.062),
          0px 0px 77px rgba(0, 0, 0, 0.067), 0px 0px 80px rgba(0, 0, 0, 0.07); */
      }

      h3 {
        font-size: 36px;
        font-style: italic;

        margin-bottom: ${({ theme }) => theme.spacings.small};
      }
      h4 {
        font-size: 18px;
      }

      img {
        filter: brightness(0.6);
      }
    }
  }
`

export const HomeFAQSection = styled(HomeSection)`
  margin-bottom: ${({ theme }) => theme.spacings.large};

  h2 {
    text-align: center;
  }
`
