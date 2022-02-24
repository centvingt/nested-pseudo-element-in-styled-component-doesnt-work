import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  AnimationCSS,
  InputWrapper,
  TextareaWrapper,
  SelectWrapper,
} from 'elements'

export const KJInput = ({
  label,
  name,
  type,
  placeholder,
  autoComplete,
  errorMessage,
  register,
  required,
  min,
  pattern,
  hidden,
}) => {
  return (
    <Container hidden={hidden}>
      {label && (
        <Label as="label" htmlFor={name}>
          <h2>{label}</h2>
        </Label>
      )}
      <div>
        <Input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          errorMessage={errorMessage}
          {...register(name, { required, pattern, min })}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </Container>
  )
}

export const KJTextarea = ({
  label,
  name,
  placeholder,
  errorMessage,
  register,
  required,
  pattern,
}) => {
  return (
    <Container>
      {label && (
        <Label as="label" htmlFor={name}>
          <h2>{label}</h2>
        </Label>
      )}
      <div>
        <Textarea
          name={name}
          id={name}
          placeholder={placeholder}
          errorMessage={errorMessage}
          {...register(name, { required })}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </Container>
  )
}

export const KJSelect = ({
  children,
  name,
  label,
  register,
  errorMessage,
  validate,
}) => (
  <Container>
    {label && (
      <Label as="label" htmlFor={name}>
        <h2>{label}</h2>
      </Label>
    )}
    <div>
      <SelectContainer>
        <Select
          name={name}
          id={name}
          errorMessage={errorMessage}
          {...register(name, { validate })}
        >
          {children}
        </Select>
      </SelectContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  </Container>
)

const Container = styled.div`
  ${AnimationCSS}

  display: ${props => props.hidden && 'none'};
  margin-bottom: ${props => props.theme.spacings.medium};

  div {
    position: relative;
  }
  p {
    ${AnimationCSS}

    position: absolute;
    top: calc(100% + 4px);
    left: ${props => props.theme.spacings.medium};
    right: ${props => props.theme.spacings.medium};
  }
`

const Label = styled.label`
  h2 {
    font-family: ${props => props.theme.fontFamilies.title};
    font-size: 15px;
    font-style: italic;
    font-weight: ${props => props.theme.fontWeights.titleExtraBold};
    margin: ${props => {
      let h = props.theme.spacings.medium
      return `0 ${h}`
    }};
    padding-top: ${props => props.theme.spacings.xxSmall};
  }
`

const InputCSS = css`
  margin-top: ${props => props.theme.spacings.xSmall};
  border: ${props =>
    props.errorMessage ? 'solid 0.5px ' + props.theme.colors.accent : 'none'};
  color: ${props =>
    props.errorMessage ? props.theme.colors.accent : props.theme.colors.black};
`

const Input = styled(InputWrapper)`
  ${InputCSS}
`
const Textarea = styled(TextareaWrapper)`
  ${InputCSS}
`
const Select = styled(SelectWrapper)`
  ${InputCSS}
`
const SelectContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 24px;
    right: 21px;
    height: 0;
    width: 0;
    border-top: 12px solid ${({ theme }) => theme.colors.accent};
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    pointer-events: none;
  }
`

const ErrorMessage = styled.p`
  font-size: 10px;
  color: ${props => props.theme.colors.accent};
`
