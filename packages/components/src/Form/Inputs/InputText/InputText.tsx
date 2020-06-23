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
import { IconNames } from '@looker/icons'
import { omitStyledProps, space, SpaceProps } from '@looker/design-tokens'
import React, { forwardRef, MouseEvent, ReactNode, Ref, useRef } from 'react'
import styled, { css } from 'styled-components'
import { InputProps, inputPropKeys, InputTextTypeProps } from '../InputProps'
import { innerInputStyle } from '../innerInputStyle'
import {
  SimpleLayoutProps,
  simpleLayoutCSS,
} from '../../../Layout/utils/simple'
import { Icon } from '../../../Icon'
import { Text } from '../../../Text'
import { useForkedRef, useWrapEvent } from '../../../utils'
import { InlineInputTextBase } from '../InlineInputText'

export interface InputTextBaseProps
  extends Omit<SimpleLayoutProps, 'size'>,
    Omit<InputProps, 'type'>,
    InputTextTypeProps {
  /**
   * Allows the input width to resize with the value or placeholder
   * Styles will default to `width: auto` and `display: inline-flex`
   * Do not use with children
   */
  autoResize?: boolean

  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface InputTextProps extends InputTextBaseProps {
  /**
   * JSX to render after the input
   * Note: this will replace the built-in validationType icon
   */
  after?: ReactNode
  iconAfter?: IconNames
  suffix?: string

  /**
   * JSX to render before the input
   */
  before?: ReactNode
  iconBefore?: IconNames
  prefix?: string
}

const InputTextLayout = forwardRef(
  (
    {
      autoResize,
      children,
      className,

      before,
      iconBefore,
      prefix,

      after,
      iconAfter,
      suffix,

      type = 'text',
      validationType,

      // mouse handlers need to be applied to the external div rather than the input
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
      // set focus to input on mousedown of container to mimic natural input behavior
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

    if ((before && (iconBefore || prefix)) || (iconBefore && prefix)) {
      // eslint-disable-next-line no-console
      console.warn(`Use only one of before, iconBefore, or prefix.`)
      return null
    }

    if ((after && (iconAfter || suffix)) || (iconAfter && suffix)) {
      // eslint-disable-next-line no-console
      console.warn(`Use only one of after, iconAfter, or suffix.`)
      return null
    }

    const iconBeforeOrPrefix =
      iconBefore || prefix ? (
        <InputTextContent pl="xxsmall">
          {iconBefore ? (
            <Icon name={iconBefore} size={20} />
          ) : (
            <Text fontSize="small">{prefix}</Text>
          )}
        </InputTextContent>
      ) : null

    const beforeToUse = before || iconBeforeOrPrefix

    const iconAfterOrSuffix =
      iconAfter || suffix ? (
        <InputTextContent pl="xsmall" pr="xxsmall">
          {iconAfter ? (
            <Icon name={iconAfter} size={20} />
          ) : (
            <Text fontSize="small">{suffix}</Text>
          )}
        </InputTextContent>
      ) : null

    const afterToUse = after || (
      <>
        {iconAfterOrSuffix}
        {validationType === 'error' && (
          <InputTextContent pl="xsmall" pr="xxsmall">
            <Icon color="critical" name="CircleInfo" size={20} />
          </InputTextContent>
        )}
      </>
    )

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
      <InlineInputTextBase {...inputProps} ref={ref} />
    ) : (
      input
    )

    return (
      <div
        className={className}
        {...mouseHandlers}
        {...omitStyledProps(omit(props, inputPropKeys))}
      >
        {beforeToUse && beforeToUse}
        {inner}
        {afterToUse && afterToUse}
      </div>
    )
  }
)

InputTextLayout.displayName = 'InputComponent'

export const InputTextContent = styled.div<SpaceProps>`
  ${space}
  align-items: center;
  color: ${(props) => props.theme.colors.text5};
  display: flex;
  height: 100%;
  pointer-events: none;
`

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

export const InputText = styled(InputTextLayout)<InputTextProps>`
  align-items: center;
  cursor: text;
  display: inline-flex;
  justify-content: space-evenly;
  padding: ${({ theme: { space } }) => `${space.xxxsmall} ${space.xxsmall}`};
  width: ${({ autoResize }) => (autoResize ? 'auto' : '100%')};

  ${simpleLayoutCSS}
  ${inputCSS}

  ${InlineInputTextBase} {
    height: 100%;
    max-width: 100%;
    width: 100%;
    span {
      padding: 0 ${({ theme: { space } }) => space.xsmall};
    }
  }

  input {
    ${innerInputStyle}
    flex: 1;
    font-size: ${(props) => props.theme.fontSizes.small};
    max-width: 100%;
    padding: 0 ${({ theme: { space } }) => space.xsmall};
  }

  &:hover {
    ${inputTextHover}
  }
  &:focus,
  :focus-within {
    ${inputTextFocus}
  }
  ${(props) => (props.disabled ? inputTextDisabled : '')}
  ${inputTextValidation}
`

InputText.defaultProps = {
  height: inputHeight,
  type: 'text',
}
