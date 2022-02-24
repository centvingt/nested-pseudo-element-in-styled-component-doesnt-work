import styled, { keyframes } from 'styled-components'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`
export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Dot = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 3px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`
