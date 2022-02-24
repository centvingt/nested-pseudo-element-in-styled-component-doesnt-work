// import styled from 'styled-components'
// import { FlexibleAccentButtonWrapper, H2 } from 'elements'

// export const SignupContainer = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding-top: ${props => props.theme.spacings.xLarge};
//   display: grid;
//   grid-template-columns: 300px 1fr;
//   gap: 0 ${props => props.theme.spacings.xxLarge};
//   align-items: center;

//   @media ${props => props.theme.breakpoints.tablet} {
//     grid-template-columns: 300px;
//     justify-content: center;
//   }

//   @media ${props => props.theme.breakpoints.mobile} {
//     grid-template-columns: 1fr;
//   }
// `
// export const SignupH1 = styled.h1`
//   margin-top: ${props => props.theme.spacings.large};
//   margin-bottom: ${props => props.theme.spacings.medium};
//   margin-left: ${props => props.theme.spacings.medium};
//   margin-right: ${props => props.theme.spacings.medium};
// `

// export const SignupH2 = styled.h2`
//   font: ${props => props.theme.fonts.h2};
//   margin: ${props => {
//     let h = props.theme.spacings.medium
//     return `0 ${h}`
//   }};
//   padding-top: ${props => props.theme.spacings.xxSmall};
// `

// export const SignupH2Payment = styled.h2`
//   font-family: ${props => props.theme.fontFamilies.title};
//   font-weight: ${props => props.theme.fontWeights.titleExtraBold};
//   font-style: italic;
//   font-size: 26px;
//   line-height: 1.2;
//   margin: ${props => {
//     let h = props.theme.spacings.medium
//     let b = props.theme.spacings.medium
//     return `0 ${h} ${b}`
//   }};
//   padding-top: ${props => props.theme.spacings.xxSmall};
// `

// export const SignupFinalSubmitButton = styled(H2)`
//   color: ${props => props.theme.colors.accent};
//   margin: ${props => {
//     let { spacings } = props.theme
//     let t = spacings.small
//     let h = spacings.medium
//     return `${t} ${h} 0`
//   }};
//   cursor: pointer;
// `

// export const SignupSubmitButton = styled(FlexibleAccentButtonWrapper)`
//   margin-top: ${props => props.theme.spacings.large};
// `

// export const SignupPreviousLink = styled.a`
//   color: ${props => props.theme.colors.accent};
//   text-decoration: underline;
//   cursor: pointer;
// `

// export const SignupMainLogo = styled.div`
//   width: 118px;
//   margin: auto;
// `

// export const SignupBackgroundLogo = styled.div`
//   width: 100%;
//   /* filter: drop-shadow(0 2.8px 2.2px rgba(0, 0, 0, 0.008))
//     drop-shadow(0 6.7px 5.3px rgba(0, 0, 0, 0.012))
//     drop-shadow(0 12.5px 10px rgba(0, 0, 0, 0.015))
//     drop-shadow(0 22.3px 17.9px rgba(0, 0, 0, 0.018))
//     drop-shadow(0 41.8px 33.4px rgba(0, 0, 0, 0.022))
//     drop-shadow(0 100px 80px rgba(0, 0, 0, 0.03)); */
//   filter: drop-shadow(0 2.8px 2.2px rgba(0, 0, 0, 0.02))
//     drop-shadow(0 6.7px 5.3px rgba(0, 0, 0, 0.028))
//     drop-shadow(0 12.5px 10px rgba(0, 0, 0, 0.035))
//     drop-shadow(0 22.3px 17.9px rgba(0, 0, 0, 0.042))
//     drop-shadow(0 41.8px 33.4px rgba(0, 0, 0, 0.05))
//     drop-shadow(0 100px 80px rgba(0, 0, 0, 0.07));

//   @media ${props => props.theme.breakpoints.tablet} {
//     display: none;
//   }
// `

// export const SignupTwoColumnsContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: ${props => props.theme.spacings.small};
//   align-items: end;
// `

// export const SignupErrorMessage = styled(H2)`
//   color: ${props => props.theme.colors.accent};
//   margin: ${props => {
//     let { spacings } = props.theme
//     let v = spacings.small
//     let h = spacings.medium
//     return `${v} ${h}`
//   }};
// `
