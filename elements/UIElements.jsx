import styled, { css } from 'styled-components'

const CSS = css`
  height: 50px;
  font-family: ${props => props.theme.fontFamilies.body};
  border-radius: 25px;
  box-shadow: ${props => props.theme.shadows.shadow1};
  transition: ${props => props.theme.transitions};

  &:hover,
  &:focus,
  &:active {
    box-shadow: ${props => props.theme.shadows.shadow2};
  }
`

const ButtonCSS = css`
  border: none;
  font-weight: ${props => props.theme.fontWeights.mainExtraBold};
  font-size: 20px;
  text-align: center;

  &:active {
    transform: scale(0.98);
    filter: brightness(0.95);
  }
`

const AccentBackgroundCSS = css`
  ${CSS}
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
`

const WhiteBackgroundCSS = css`
  ${CSS}
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.accent};
`

const AccentButtonWrapper = styled.button`
  ${ButtonCSS}
  ${AccentBackgroundCSS}
  &:disabled {
    background-color: ${props => props.theme.colors.discrete};
    filter: brightness(1.4);
    cursor: not-allowed;
  }
`

const WhiteButtonWrapper = styled.button`
  ${ButtonCSS}
  ${WhiteBackgroundCSS}
`

const FixedButtonCSS = css`
  width: 174px;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 122px;
    height: 35px;
    font-size: 12px;
  }
`

const InputCSS = css`
  ${WhiteBackgroundCSS}
  font-weight: ${props => props.theme.fontWeights.mainRegular};
  font-size: 12px;
  text-align: left;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
  }
`

export const InputWrapper = styled.input`
  ${InputCSS}
  padding: 0 21px;
`

export const TextareaWrapper = styled.textarea`
  ${InputCSS}
  padding: 21px;
  resize: vertical;
  min-height: 150px;
`

export const SelectWrapper = styled.select`
  ${InputCSS}
  appearance: none;
  padding: 0 21px;
`

export const FixedAccentButtonWrapper = styled(AccentButtonWrapper)`
  ${FixedButtonCSS}
`

export const FixedWhiteButtonWrapper = styled(WhiteButtonWrapper)`
  ${FixedButtonCSS}
`

export const FlexibleAccentButtonWrapper = styled(AccentButtonWrapper)`
  width: 100%;
`

export const FlexibleWhiteButtonWrapper = styled(WhiteButtonWrapper)`
  width: 100%;
`

export const AccordionItem = styled.article`
  ${WhiteBackgroundCSS}

  cursor: pointer;

  /* height: ${props => (props.isOpened ? 'auto' : '50px')}; */
  /* height: auto;
  max-height: ${props => (props.isOpened ? '600px' : '50px')}; */
  height: auto;
  max-height: ${props =>
    props.isOpened ? `${props.maxHeight + 60}px` : '50px'};
  transition: max-height 0.6s ease,
    box-shadow ${props => props.theme.transitions};

  overflow: hidden;

  color: ${({ theme }) => theme.colors.accent};

  max-width: 468px;

  margin: ${({ theme }) => {
    let b = theme.spacings.small

    return `0 auto ${b}`
  }};
  padding: 8px 25px;

  position: relative;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    /* height: ${props => (props.isOpened ? 'auto' : '46px')}; */
    max-height: ${props =>
      props.isOpened ? `${props.maxHeight + 40}px` : '44px'};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    /* height: ${props => (props.isOpened ? 'auto' : '46px')}; */
    max-height: ${props =>
      props.isOpened ? `${props.maxHeight + 30}px` : '40px'};
  }

  &::before,
  &::after {
    position: absolute;
    font-size: 40px;
    font-style: italic;
    font-family: ${({ theme }) => theme.fontFamilies.fontTitle};
    font-weight: ${({ theme }) => theme.fontWeights.titleRegular};
    top: -10px;
    right: 25px;
    /* transition: 0.2s ease; */

    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 36px;
      right: 21px;
    }
  }

  &::before {
    content: '+';
    opacity: ${props => (props.isOpened ? 0 : 1)};
  }
  &::after {
    content: '–';
    opacity: ${props => (props.isOpened ? 1 : 0)};
  }

  h3 {
    font-family: ${({ theme }) => theme.fontFamilies.fontTitle};
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeights.titleBold};
    margin-bottom: ${({ theme }) => theme.spacings.small};

    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 16px;
    }
    @media ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 14px;
    }
  }

  h3 ~ p {
    font-family: ${({ theme }) => theme.fontFamilies.fontBody};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeights.mainRegular};

    @media ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 10px;
    }
  }
`
