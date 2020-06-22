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

import { IconNames } from '@looker/icons'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import { omitStyledProps, space, SpaceProps } from '@looker/design-tokens'
import React, { forwardRef, MouseEvent, ReactNode, Ref, useRef } from 'react'
import styled, { css } from 'styled-components'
import {
  SimpleLayoutProps,
  simpleLayoutCSS,
} from '../../../Layout/utils/simple'
import { Icon } from '../../../Icon'
import { Text } from '../../../Text'
import { useForkedRef, useWrapEvent } from '../../../utils'
import { InlineInputText } from '../InlineInputText'
import { InputProps, inputPropKeys, InputTextTypeProps } from '../InputProps'

export interface InputTextProps
  extends Omit<SimpleLayoutProps, 'size'>,
    InputProps,
    InputTextTypeProps {
  /**
   * Allows the input width to resize with the value or placeholder
   * Recommended to use with `width="auto"`
   * Do not use with children
   */
  autoResize?: boolean

  after?: ReactNode
  iconAfter?: IconNames
  suffix?: string

  before?: ReactNode
  iconBefore?: IconNames
  prefix?: string

  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLDivElement>) => void
}

const InputTextLayout = forwardRef(
  (
    {
      autoResize,
      children,
      className,

      before: beforeProp,
      iconBefore,
      prefix,

      after: afterProp,
      iconAfter,
      suffix,

      type = 'text',
      validationType,

      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver,
      onMouseUp,

      ...props
    }: InputTextProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    const internalRef = useRef<null | HTMLInputElement>(null)
    const ref = useForkedRef<HTMLInputElement>(internalRef, forwardedRef)

    function handleMouseDown() {
      // set focus to input on mousedown of container
      // need requestAnimationFrame here due to browser updating focus _after_ mousedown is called
      window.requestAnimationFrame(() => {
        internalRef.current && internalRef.current.focus()
      })
    }

    const mouseHandlers = {
      onClick,
      onMouseDown: useWrapEvent(handleMouseDown, onMouseDown),
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver,
      onMouseUp,
    }
    if (iconBefore && prefix) {
      // eslint-disable-next-line no-console
      console.warn(`Only use IconBefore or prefix not both at the same time. `)
      return null
    }

    if (iconAfter && suffix) {
      // eslint-disable-next-line no-console
      console.warn(`Only use IconAfter or suffix not both at the same time. `)
      return null
    }

    const before =
      beforeProp || iconBefore || prefix ? (
        <InputIconStyle pl="xxsmall">
          {iconBefore ? (
            <Icon name={iconBefore} size={20} />
          ) : (
            <Text fontSize="small">{prefix}</Text>
          )}
        </InputIconStyle>
      ) : null

    const after =
      afterProp || iconAfter || suffix ? (
        <InputIconStyle pl="xsmall" pr="xxsmall">
          {iconAfter ? (
            <Icon name={iconAfter} size={20} />
          ) : (
            <Text fontSize="small">{suffix}</Text>
          )}
        </InputIconStyle>
      ) : null

    const inputProps = {
      ...pick(omitStyledProps(props), inputPropKeys),
      'aria-invalid': validationType === 'error' ? true : undefined,
      type,
    }
    const input = <input {...inputProps} ref={ref} />

    const inner = children ? (
      <div className="inner">
        {children}
        {input}
      </div>
    ) : autoResize ? (
      <InlineInputText {...inputProps} ref={ref} />
    ) : (
      input
    )

    return (
      <div
        className={className}
        {...mouseHandlers}
        {...omitStyledProps(omit(props, [...inputPropKeys, 'validationType']))}
      >
        {before && before}
        {inner}
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

InputTextLayout.displayName = 'InputComponent'

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

export const InputIconStyle = styled.div<SpaceProps>`
  ${space}
  color: ${(props) => props.theme.colors.text5};
  display: flex;
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
  cursor: text;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`

export const InputText = styled(InputTextLayout)<InputTextProps>`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: ${({ theme: { space } }) => `${space.xxxsmall} ${space.xxsmall}`};

  ${simpleLayoutCSS}
  ${inputCSS}
  ${inputTextValidation}

  ${InlineInputText} {
    height: 100%;
    max-width: 100%;
    width: 100%;
    div {
      padding-left: ${({ theme: { space } }) => space.xsmall};
    }
  }

  input {
    background: transparent;
    border: none;
    flex: 1;
    font-size: ${(props) => props.theme.fontSizes.small};
    height: 100%;
    max-width: 100%;
    outline: none;
    padding: 0 0 0 ${({ theme: { space } }) => space.xsmall};
    width: 100%;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      appearance: none;
    }
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
  ${(props) => (props.disabled ? inputTextDisabled : '')}
`

InputText.defaultProps = {
  height: inputHeight,
  type: 'text',
  width: '100%',
}
