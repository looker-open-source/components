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
import { Flex } from '../../../Layout'
import { Icon } from '../../../Icon/Icon'
import { Text } from '../../../Text/Text'
import { useForkedRef } from '../../../utils'

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
}

const InputComponent = forwardRef(
  (
    {
      className,
      iconAfter,
      iconBefore,
      prefix,
      suffix,
      type = 'text',
      validationType,
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
      <InputIconStyle paddingRight="xsmall">
        <Icon name={iconBefore} size={20} />
      </InputIconStyle>
    ) : prefix ? (
      <InputIconStyle paddingRight="xsmall">
        <Text fontSize="small">{prefix}</Text>
      </InputIconStyle>
    ) : null

    const after = iconAfter ? (
      <InputIconStyle paddingLeft="xsmall">
        <Icon name={iconAfter} size={20} />
      </InputIconStyle>
    ) : suffix ? (
      <InputIconStyle paddingLeft="xsmall">
        <Text fontSize="small">{suffix}</Text>
      </InputIconStyle>
    ) : null

    const inputProps = pick(
      omit(props, 'color', 'height', 'width'),
      inputPropKeys
    )

    return (
      <InputLayout className={className} onClick={focusInput}>
        {before && before}
        <input
          {...inputProps}
          aria-invalid={validationType === 'error' && 'true'}
          type={type}
          ref={ref}
        />
        {after && after}
        {validationType && (
          <InputIconStyle paddingLeft="xsmall">
            <Icon color="palette.red500" name="Warning" size={18} />
          </InputIconStyle>
        )}
      </InputLayout>
    )
  }
)

export const inputTextHover = css`
  border-color: ${(props) => props.theme.colors.palette.charcoal300};
`
export const inputTextFocus = css`
  border-color: ${(props) => props.theme.colors.palette.purple300};
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.palette.purple100};
  outline: none;
`
export const inputTextDisabled = css`
  background: ${(props) => props.theme.colors.palette.charcoal100};
  color: ${(props) => props.theme.colors.palette.charcoal400};
  &:hover {
    border-color: ${(props) => props.theme.colors.palette.charcoal200};
  }
`

export const inputHeight = '36px'

export const InputLayout = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.palette.white};
  display: inline-flex;
  height: ${inputHeight};
  justify-content: space-evenly;

  input {
    border: none;
    background: transparent;
    flex: 1;
    font-size: ${(props) => props.theme.fontSizes.small};
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.palette.charcoal400};
  }

  &:hover {
    ${inputTextHover}
  }
  &:focus,
  :focus-within {
    ${inputTextFocus}
  }
`

export const InputIconStyle = styled(Flex)`
  color: ${(props) => props.theme.colors.palette.charcoal400};
  pointer-events: none;
`

export const inputTextValidation = css<{ validationType?: 'error' }>`
  ${(props) =>
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
  (props: InputTextProps) => {
    const padding: SpaceProps = {
      px: props.px || props.p || CustomizableInputTextAttributes.px,
      py: props.py || props.p || CustomizableInputTextAttributes.py,
    }
    if (props.prefix || props.iconBefore) {
      padding.pl = 'xsmall'
    }
    if (props.suffix || props.iconAfter) {
      padding.pr = 'xsmall'
    }
    return padding
  }
)<InputTextProps>`
  ${reset}
  ${border}
  ${color}
  ${layout}
  ${space}
  ${typography}
  ${pseudoClasses}

  color: ${(props) => props.theme.colors.palette.charcoal700};

  ${(props) => (props.disabled ? inputTextDisabled : '')}

  ${inputTextValidation}
`

export const inputTextDefaults = {
  border: 'solid 1px',
  borderColor: 'palette.charcoal200',
}

InputText.defaultProps = {
  width: '100%',
  ...CustomizableInputTextAttributes,
  ...inputTextDefaults,
  type: 'text',
}

InputComponent.displayName = 'InputComponent'
