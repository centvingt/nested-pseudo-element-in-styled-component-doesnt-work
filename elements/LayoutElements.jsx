import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  & ::selection {
    background-color: pink;
  }

  color: ${props => props.theme.colors.black};

  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;

  scroll-snap-type: ${({ scrollIsSnapped }) =>
    scrollIsSnapped ? 'y mandatory' : 'none'};
`
