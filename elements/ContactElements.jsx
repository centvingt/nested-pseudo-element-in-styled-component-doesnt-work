import styled, { keyframes } from 'styled-components'
import { FlexibleAccentButtonWrapper } from 'elements'

const appearanceAnimation = keyframes`
  0% {
    /* opacity: 0; */
    backdrop-filter: blur(0) brightness(1);
    /* background-color: red; */
  }
  100% {
    /* opacity: 1; */
    backdrop-filter: blur(6px) brightness(0.7);
    /* background-color: red; */
  }
  `

export const ContactModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: ${({ theme }) => theme.containerPadding.lg};
  overflow: scroll;

  /* backdrop-filter: blur(0) brightness(1); */

  backdrop-filter: blur(6px) brightness(0.7);
  /* 
  animation: ${appearanceAnimation} ${({ theme }) =>
    theme.transitions} forwards;
  animation-duration: 1s; */

  opacity: ${({ disappearance }) => (disappearance ? 0 : 1)};
  transition: opacity 1s ease-out;

  /* if backdrop support: very transparent and blurred */
  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: #0008;
  }

  display: grid;
  align-items: center;
  justify-content: center;
`

export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 54px;
  padding: 54px;
  min-width: 500px;
  /* max-height: ${({ theme }) =>
    `calc(100% - ${theme.containerPadding.lg})`}; */
  /* max-height: 100%; */
  /* overflow: scroll; */

  h1 {
    font: ${props => props.theme.fonts.h2};
    line-height: 120%;
    margin: ${props => {
      let b = props.theme.spacings.medium
      return `0 0 ${b}`
    }};
    text-align: center;
  }

  input {
    background-color: #f1f1f1;
  }
`

export const ContactSubmitButton = styled(FlexibleAccentButtonWrapper)`
  margin-top: ${props => props.theme.spacings.medium};
`
