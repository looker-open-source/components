/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { IconNames } from '@looker/icons'
import React, { forwardRef, Ref, useRef } from 'react'
import styled, { css } from 'styled-components'
import { InputProps, inputPropKeys } from '../InputProps'
import { Flex } from '../../../Layout/Flex/Flex'
import { Icon } from '../../../Icon/Icon'
import { Text } from '../../../Text/Text'
import { useForkedRef } from '../../../utils'

export const CustomizableInputTextAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '36px',
  px: 'none',
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
}

const InputComponent = forwardRef(
  (
    {
      type = 'text',
      iconAfter,
      iconBefore,
      prefix,
      suffix,
      className,
      ...props
    }: InputTextProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    if (iconBefore && prefix) {
      // eslint-disable-next-line no-console
      console.warn(`Only use IconBefore or Prefix not both at the same time. `)
      return null
    }

    if (iconAfter && suffix) {
      // eslint-disable-next-line no-console
      console.warn(`Only use IconAfter or Suffix not both at the same time. `)
      return null
    }

    const internalRef = useRef<null | HTMLInputElement>(null)
    const ref = useForkedRef<HTMLInputElement>(internalRef, forwardedRef)
    const focusInput = () => internalRef.current && internalRef.current.focus()

    const before = iconBefore ? (
      <InputIconStyle paddingRight="8px">
        <Icon name={iconBefore} size={20} />
      </InputIconStyle>
    ) : prefix ? (
      <InputIconStyle paddingRight="8px">
        <Text fontSize="small">{prefix}</Text>
      </InputIconStyle>
    ) : null

    const after = iconAfter ? (
      <InputIconStyle paddingLeft="8px">
        <Icon name={iconAfter} size={20} />
      </InputIconStyle>
    ) : suffix ? (
      <InputIconStyle paddingLeft="8px">
        <Text fontSize="small">{suffix}</Text>
      </InputIconStyle>
    ) : null

    if (before || after) {
      return (
        <InputLayout className={className} onClick={focusInput}>
          {before}
          <input
            {...pick(omit(props, 'color', 'height', 'width'), inputPropKeys)}
            className={className}
            type={type}
            ref={ref}
          />
          {after}
        </InputLayout>
      )
    } else {
      return (
        <StyledInput
          {...pick(omit(props, 'color', 'height', 'width'), inputPropKeys)}
          className={className}
          type={type}
          ref={ref}
        />
      )
    }
  }
)

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
const shared = css`
  border: 1px solid;
  border-color: ${props => props.theme.colors.palette.charcoal200};
  border-radius: 4px;
  display: inline-block;
  height: 36px;
  width: 100%;
  &:hover {
    ${inputTextHover}
  }
  &:focus,
  :focus-within {
    ${inputTextFocus}
  }
  &:disabled {
    ${inputTextDisabled}
  }
`

export const InputLayout = styled.div`
  ${shared}
  align-items: center;
  background-color: ${props => props.theme.colors.palette.white};
  display: flex;
  border-color: ${props => props.theme.colors.palette.charcoal200};
  justify-content: space-evenly;
  padding: 0;
  input {
    border: none;
    flex: 1;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
  }
`

const StyledInput = styled.input`
  ${shared}
`

export const InputIconStyle = styled(Flex)`
  color: ${props => props.theme.colors.palette.charcoal400};
  pointer-events: none;
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

export const inputTextDefaults = {
  padding: '0 8px',
  width: '174px',
}

InputText.defaultProps = {
  ...CustomizableInputTextAttributes,
  ...inputTextDefaults,
  type: 'text',
}

InputComponent.displayName = 'InputComponent'
