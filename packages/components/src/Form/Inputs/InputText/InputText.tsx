/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import pick from 'lodash/pick'
import omit from 'lodash/omit'
import {
  border,
  BorderProps,
  typography,
  layout,
  LayoutProps,
  CustomizableAttributes,
  pseudoClasses,
  PseudoProps,
  space,
  SpaceProps,
  TypographyProps,
  reset,
  color,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import { InputProps, inputPropKeys } from '../InputProps'

export const CustomizableInputTextAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '36px',
  px: 'small',
  py: 'none',
}

export interface InputTextProps
  extends BorderProps,
    Omit<LayoutProps, 'size'>,
    PseudoProps,
    SpaceProps,
    TypographyProps,
    Omit<InputProps, 'type'> {
  /**
   *
   * @default 'text'
   */
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
}

const InputComponent = forwardRef(
  ({ type = 'text', ...props }: InputTextProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        {...pick(omit(props, 'color', 'height', 'width'), inputPropKeys)}
        type={type}
        className={props.className}
        ref={ref}
      />
    )
  }
)
InputComponent.displayName = 'InputComponent'

export const inputTextHover = css`
  border-color: ${props => props.theme.colors.palette.charcoal300};
`
export const inputTextFocus = css`
  border-color: ${props => props.theme.colors.palette.purple300};
  box-shadow: 0 0 0 2px ${props => props.theme.colors.palette.purple100};
  outline: none;
`
export const inputTextDisabled = css`
  background: ${props => props.theme.colors.palette.charcoal100};
  color: ${props => props.theme.colors.palette.charcoal400};
  &:hover {
    border-color: ${props => props.theme.colors.palette.charcoal200};
  }
`

export const inputTextValidation = css<InputTextProps>`
  ${props =>
    props.validationType === 'error'
      ? `
      border-color: ${props.theme.colors.palette.red500};
      &:hover,
      &:focus,
      :focus-within {
        border-color: ${props.theme.colors.palette.red500};
      }
      `
      : ''}
`

export const InputText = styled(InputComponent).attrs(
  (props: InputTextProps) => ({
    px: props.px || props.p || CustomizableInputTextAttributes.px,
    py: props.py || props.p || CustomizableInputTextAttributes.py,
  })
)<InputTextProps>`
  ${reset}
  ${border}
  ${color}
  ${layout}
  ${space}
  ${typography}
  ${pseudoClasses}

  color: ${props => props.theme.colors.palette.charcoal700};

  &:hover {
    ${inputTextHover}
  }

  &:focus {
    ${inputTextFocus}
  }

  &:disabled  {
    ${inputTextDisabled}
  }

  ${inputTextValidation}
`

export const inputTextDefaults = {
  border: 'solid 1px',
  borderColor: 'palette.charcoal200',
  borderRadius: CustomizableInputTextAttributes.borderRadius,
  fontSize: CustomizableInputTextAttributes.fontSize,
  height: CustomizableInputTextAttributes.height,
}

InputText.defaultProps = {
  ...inputTextDefaults,
  type: 'text',
}
