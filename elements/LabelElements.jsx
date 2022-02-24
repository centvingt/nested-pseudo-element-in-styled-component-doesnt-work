import styled from 'styled-components'

export const LabelWrapper = styled.span`
  display: inline-grid;
  justify-content: center;
  margin-right: ${props => props.theme.spacings.medium};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-right: ${props => props.theme.spacings.small};
  }

  & > p {
    font: ${props => props.theme.fonts.label} !important;
    margin: ${props => {
      let t = props.theme.spacings.xxSmall
      let h = 0
      let b = 0
      return `${t} ${h} ${b}`
    }};
  }
`
