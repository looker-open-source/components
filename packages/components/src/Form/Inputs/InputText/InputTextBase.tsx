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
import { SpaceProps } from '@looker/design-tokens'
import React, { forwardRef, ReactNode, Ref, useRef } from 'react'
import styled, { css } from 'styled-components'
import { InputProps, inputPropKeys } from '../InputProps'
import { Flex } from '../../../Layout'
import {
  SimpleLayoutProps,
  simpleLayoutCSS,
} from '../../../Layout/utils/simple'
import { Icon } from '../../../Icon'
import { useForkedRef } from '../../../utils'

export interface InputTextBaseProps
  extends Omit<SimpleLayoutProps, 'size'>,
    Omit<InputProps, 'type'> {
  before?: ReactNode
  after?: ReactNode
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

const InputTextBaseLayout = forwardRef(
  (
    {
      className,
      before,
      after,
      type = 'text',
      validationType,
      ...props
    }: InputTextBaseProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const internalRef = useRef<null | HTMLInputElement>(null)
    const ref = useForkedRef<HTMLInputElement>(internalRef, forwardedRef)
    const focusInput = () => internalRef.current && internalRef.current.focus()

    const inputProps = pick(
      omit(props, 'color', 'height', 'width'),
      inputPropKeys
    )

    return (
      <div className={className} onClick={focusInput}>
        {before && before}
        <input
          {...inputProps}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          type={type}
          ref={ref}
        />
        {after && after}
        {validationType && (
          <InputIconStyle paddingLeft="xsmall">
            <Icon color="critical" name="CircleInfo" size={20} />
          </InputIconStyle>
        )}
      </div>
    )
  }
)

InputTextBaseLayout.displayName = 'InputComponent'

export const inputTextHover = css`
  border-color: ${(props) => props.theme.colors.ui3};
`
export const inputTextFocus = css`
  border-color: ${(props) => props.theme.colors.keyFocus};
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.keyAccent};
  outline: none;
`
export const inputTextDisabled = css`
  background: ${(props) => props.theme.colors.ui1};
  color: ${(props) => props.theme.colors.text5};
  &:hover {
    border-color: ${(props) => props.theme.colors.ui2};
  }
`

export const inputHeight = '36px'

export const InputIconStyle = styled(Flex)`
  color: ${(props) => props.theme.colors.text5};
  pointer-events: none;
`

export const inputTextValidation = css<{ validationType?: 'error' }>`
  ${(props) =>
    props.validationType === 'error'
      ? `
      border-color: ${props.theme.colors.criticalBorder};
      &:hover {
        border-color: ${props.theme.colors.critical};
      }
      &:focus,
      :focus-within {
        border-color: ${props.theme.colors.critical};
        box-shadow: 0 0 0 2px ${props.theme.colors.criticalAccent};
      }
      `
      : ''}
`

export const inputCSS = css`
  background: ${({ theme: { colors } }) => colors.field};
  border: 1px solid ${({ theme: { colors } }) => colors.ui2};
  border-radius: ${({ theme: { radii } }) => radii.medium};
  color: ${({ theme: { colors } }) => colors.text2};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`

export const InputTextBase = styled(InputTextBaseLayout).attrs(
  (props: InputTextBaseProps) => {
    const padding: SpaceProps = {
      px: props.px || props.p || 'small',
      py: props.py || props.p || 'none',
    }
    if (props.before) {
      padding.pl = 'xsmall'
    }
    if (props.after) {
      padding.pr = 'xsmall'
    }
    return padding
  }
)<InputTextBaseProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.field};
  display: inline-flex;
  height: ${inputHeight};
  justify-content: space-evenly;

  ${simpleLayoutCSS}
  ${inputCSS}
  ${(props) => (props.disabled ? inputTextDisabled : '')}
  ${inputTextValidation}

  input {
    background: transparent;
    border: none;
    flex: 1;
    font-size: ${(props) => props.theme.fontSizes.small};
    height: 100%;
    max-width: 100%;
    outline: none;
    padding: 0;
    width: 100%;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.text5};
  }

  &:hover {
    ${inputTextHover}
  }
  &:focus,
  :focus-within {
    ${inputTextFocus}
  }
`

InputTextBase.defaultProps = {
  height: inputHeight,
  type: 'text',
  width: '100%',
}
