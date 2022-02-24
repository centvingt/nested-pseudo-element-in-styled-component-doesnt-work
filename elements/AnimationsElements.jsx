import { css } from 'styled-components'

export const AnimationCSS = css`
  opacity: 0;
  animation: ${props => {
    let transition = props.theme.transitions
    return `elementAppearance ${transition} forwards`
  }};
`
