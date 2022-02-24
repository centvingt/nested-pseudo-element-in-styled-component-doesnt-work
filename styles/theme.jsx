const rem = 14

const maxWidth = '1200px'

const fontBody = 'ibm-plex-sans, sans-serif'
const fontTitle = 'proxima-soft, sans-serif'

const fontWeightyMainLight = '300'
const fontWeightyMainRegular = '400'
const fontWeightyMainExtraBold = '800'
const fontWeightyTitleRegular = '400'
const fontWeightyTitleBold = '700'
const fontWeightyTitleExtraBold = '800'

const colorAccent = '#E3261F'
const colorWhite = '#F7F7F7'
const colorBlack = '#141313'
const colorDiscrete = '#5D5D5D'
const colorGradient1 = '#F2F2F2'
const colorGradient2 = '#C8C8C8'

const mobileBreakpoint = 500
const tabletBreakpoint = 900

const logoXXSmallWidth = '36px'
const logoXSmallWidth = '74px'
const logoSmallWidth = '118px'
const logoLargeWidth = '154px'

export const theme = {
  rem: {
    value: `${rem}px`,
  },
  maxWidth,
  containerPadding: {
    lg: `5vw`,
  },
  logoWidth: {
    xxSmall: logoXXSmallWidth,
    xSmall: logoXSmallWidth,
    small: logoSmallWidth,
    large: logoLargeWidth,
  },
  fonts: {
    main: `normal 400 1rem ${fontBody}`,
    headerText: `normal 400 26px ${fontBody}`,
    h1: `italic 800 46px/1.2 ${fontTitle}`,
    h2: `italic 800 34px ${fontTitle}`,
    h3: `italic 800 20px ${fontTitle}`,
    h4: `italic 800 15px ${fontTitle}`,
    label: `italic 800 10px ${fontTitle}`,
  },
  fontWeights: {
    mainLight: fontWeightyMainLight,
    mainRegular: fontWeightyMainRegular,
    mainExtraBold: fontWeightyMainExtraBold,
    titleRegular: fontWeightyTitleRegular,
    titleBold: fontWeightyTitleBold,
    titleExtraBold: fontWeightyTitleExtraBold,
  },
  fontFamilies: {
    body: fontBody,
    title: fontTitle,
  },
  colors: {
    accent: colorAccent,
    black: colorBlack,
    white: colorWhite,
    discrete: colorDiscrete,
    gradient1: colorGradient1,
    gradient2: colorGradient2,
  },
  gradients: {
    main: `linear-gradient(135deg, ${colorGradient1} 0%, ${colorGradient2} 100%)`,
  },
  breakpoints: {
    mobile: `(max-width: ${mobileBreakpoint}px)`,
    tablet: `(max-width: ${tabletBreakpoint}px)`,
  },
  breakpointsRawValues: {
    mobile: mobileBreakpoint,
    tablet: tabletBreakpoint,
  },
  spacings: {
    xxSmall: '.25rem',
    xSmall: '.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    xLarge: '4rem',
    xxLarge: '6rem',
  },
  animations: {
    button: 'box-shadow 0.3s ease',
    link: 'color 0.2s ease',
  },
  transitions: 'cubic-bezier(0.075, 0.82, 0.165, 1) 1s',
  shadows: {
    shadow1:
      '0 2.8px 2.2px rgba(0, 0, 0, 0.008), 0 6.7px 5.3px rgba(0, 0, 0, 0.012), 0 12.5px 10px rgba(0, 0, 0, 0.015), 0 22.3px 17.9px rgba(0, 0, 0, 0.018), 0 41.8px 33.4px rgba(0, 0, 0, 0.022), 0 100px 80px rgba(0, 0, 0, 0.03)',
    shadow2:
      '0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)',
  },
}
