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
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import { IconNames } from '@looker/icons'
import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import { InputProps, inputPropKeys } from '../InputProps'
import { Flex } from '../../../Layout/Flex/Flex'
import { Icon } from '../../../Icon/Icon'
import { Text } from '../../../Text/Text'

type ResponsiveSpaceValue = ResponsiveValue<TLengthStyledSystem>

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
  iconAfter?: IconNames
  iconBefore?: IconNames
  prefix?: string
  suffix?: string
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
  width?: ResponsiveSpaceValue
}

const InputComponent = forwardRef(
  (
    {
      type = 'text',
      iconAfter,
      iconBefore,
      prefix,
      suffix,
      width,
      ...props
    }: InputTextProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <InputWrapper width={width}>
      <InputIconStyle>
        {iconBefore && <Icon name={iconBefore} size={20} />}
      </InputIconStyle>
      <InputIconStyle>
        {prefix && <Text fontSize="small">{prefix}</Text>}
      </InputIconStyle>
      <input
        {...pick(omit(props, 'color', 'height', 'width'), inputPropKeys)}
        type={type}
        className={props.className}
        ref={ref}
      />
      <InputIconStyle>
        {suffix && <Text fontSize="small">{suffix}</Text>}
      </InputIconStyle>
      <InputIconStyle>
        {iconAfter && <Icon name={iconAfter} size={20} />}
      </InputIconStyle>
    </InputWrapper>
  )
)

export const InputWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 36px;
  position: relative;
  padding-left: 12px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.palette.charcoal200};
  border-radius: 4px;
  background: ${props => props.theme.colors.palette.white};
  input {
    width: 100%;
    background: transparent;
    outline: none;
    &:focus {
      border-color: transparent;
      box-shadow: none;
    }
  }
  &:focus,
  :focus-within {
    border-color: ${props => props.theme.colors.palette.purple300};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.palette.purple100};
    outline: none;
  }

  &:hover {
    border-color: ${props => props.theme.colors.palette.charcoal300};
  }

  &:disabled {
    background: ${props => props.theme.colors.palette.charcoal100};
    color: ${props => props.theme.colors.palette.charcoal400};
    &:hover {
      border-color: ${props => props.theme.colors.palette.charcoal200};
    }
  }
`

export const InputIconStyle = styled(Flex)`
  color: ${props => props.theme.colors.palette.charcoal400};
  & + & {
    padding: 0 12px;
  }
`

export const inputTextValidation = css<InputTextProps>`
  ${props =>
    props.validationType === 'error'
      ? `
      border-color: ${props.theme.colors.palette.red400};
      &:hover {
        border-color: ${props.theme.colors.palette.red500};
      }
      &:focus,
      :focus-within {
        border-color: ${props.theme.colors.palette.red500};
        box-shadow: 0 0 0 2px ${props.theme.colors.palette.red100};
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

  ${inputTextValidation}
`

// export const inputTextDefaults = {
//   border: 'none',
//   width: '13rem',
// }

InputText.defaultProps = {
  ...CustomizableInputTextAttributes,
  border: 'none',
  type: 'text',
  width: '13rem',
}

InputComponent.displayName = 'InputComponent'
