/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import omit from 'lodash/omit'
import {
  omitStyledProps,
  space,
  SpaceProps,
  reset,
  layout,
} from '@looker/design-tokens'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Error } from '@styled-icons/material/Error'
import React, { forwardRef, MouseEvent, ReactNode, Ref, useRef } from 'react'
import styled, { css } from 'styled-components'
import {
  InputProps,
  inputPropKeys,
  InputTextTypeProps,
  pickInputProps,
} from '../InputProps'
import { innerInputStyle } from '../innerInputStyle'
import { SimpleLayoutProps } from '../../../Layout/utils/simple'
import { IconType } from '../../../Icon'
import { Span } from '../../../Text'
import { targetIsButton, useForkedRef, useWrapEvent } from '../../../utils'
import { InlineInputTextBase } from '../InlineInputText'
import { inputHeight } from '../height'

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
   * Content to place after the input
   * If a string is used, formatting will be automatically applied
   * If JSX is used, it will displace the built-in validation icon
   */
  after?: ReactNode
  iconAfter?: IconType

  /**
   * Content to place before the input
   * If a string is used, formatting will be automatically applied
   */
  before?: ReactNode
  iconBefore?: IconType
}

const InputTextLayout = forwardRef(
  (
    {
      autoResize,
      children,
      className,

      before,
      iconBefore,

      after,
      iconAfter,

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

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      // Avoid moving focus if the mousedown was inside a button
      // because it will interrupt any onclick behavior
      // (the button click handler should be responsible for moving focus)
      // Also no need to do anything if mousedown was on the input itself
      if (!targetIsButton(e) && e.target !== internalRef.current) {
        // set focus to input on mousedown of container to mimic natural input behavior
        // need requestAnimationFrame here due to browser updating focus _after_ mousedown is called
        if (document.activeElement === internalRef.current) {
          // Avoid triggering the blur event
          e.preventDefault()
        } else {
          setTimeout(() => {
            internalRef.current && internalRef.current.focus()
          }, 0)
        }
      }
    }

    const onMouseDownWrapped = useWrapEvent(handleMouseDown, onMouseDown)

    if (before && iconBefore) {
      // eslint-disable-next-line no-console
      console.warn('Use before or iconBefore, but not both at the same time.')
      return null
    }

    if (after && iconAfter) {
      // eslint-disable-next-line no-console
      console.warn('Use after or iconAfter, but not both at the same time.')
      return null
    }

    const mouseHandlers = {
      onClick,
      onMouseDown: onMouseDownWrapped,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver,
      onMouseUp,
    }

    const iconBeforeOrPrefix = (iconBefore || typeof before === 'string') && (
      <InputTextContent pl="xxsmall">
        {iconBefore || <Span fontSize="small">{before}</Span>}
      </InputTextContent>
    )

    const beforeToUse = iconBeforeOrPrefix || before || null

    const iconAfterOrSuffix = (iconAfter || typeof after === 'string') && (
      <InputTextContent pl="xsmall" pr="xxsmall">
        {iconAfter || <Span fontSize="small">{after}</Span>}
      </InputTextContent>
    )

    const validationIcon = validationType === 'error' && (
      <InputTextContent
        pl={after || iconAfter ? 'xxsmall' : 'xsmall'}
        pr="xxsmall"
      >
        <ErrorIcon />
      </InputTextContent>
    )

    const afterToUse = iconAfterOrSuffix ? (
      <>
        {iconAfterOrSuffix}
        {validationIcon}
      </>
    ) : (
      after || validationIcon
    )

    const inputProps = {
      ...pickInputProps(omitStyledProps(props)),
      'aria-invalid': validationType === 'error' ? true : undefined,
      type,
    }

    const inner = children ? (
      // Support for rendering chips in InputChips and SelectMulti
      <div className="inner">
        {children}
        {<StyledInput {...inputProps} ref={ref} />}
      </div>
    ) : autoResize ? (
      <InlineInputTextBase {...inputProps} ref={ref} />
    ) : (
      <StyledInput {...inputProps} ref={ref} />
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

const StyledInput = styled.input`
  ${innerInputStyle}
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes.small};
  max-width: 100%;
  min-width: 2rem;
  padding: 0 ${({ theme: { space } }) => space.xsmall};
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
  color: ${(props) => props.theme.colors.text1};
  cursor: default;
  -webkit-text-fill-color: ${(props) => props.theme.colors.text1};
  &:hover {
    border-color: ${(props) => props.theme.colors.ui2};
  }
`

const InputIconSize = css`
  height: ${({ theme }) => theme.sizes.small};
  width: ${({ theme }) => theme.sizes.small};
`

export const ErrorIcon = styled(Error)`
  ${InputIconSize}
  color: ${({ theme }) => theme.colors.critical};
`

export const InputTextContent = styled.div<SpaceProps>`
  ${space}
  align-items: center;
  color: ${(props) => props.theme.colors.text1};
  display: flex;
  height: 100%;
  pointer-events: none;

  ${StyledIconBase} {
    color: ${(props) => props.theme.colors.text1};
    ${InputIconSize}
  }

  ${ErrorIcon} {
    color: ${({ theme }) => theme.colors.critical};
  }
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
  color: ${({ theme: { colors } }) => colors.text4};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`

export const InputText = styled(InputTextLayout).attrs<InputTextProps>(
  ({ height = inputHeight, type = 'text' }) => ({
    height,
    type,
  })
)<InputTextProps>`
  ${reset}

  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  cursor: text;
  display: inline-flex;
  justify-content: space-evenly;
  padding: ${({ theme: { space } }) => `${space.xxxsmall} ${space.xxsmall}`};
  width: ${({ autoResize }) => (autoResize ? 'auto' : '100%')};

  ${layout}
  ${space}
  ${inputCSS}

  input {
    font-family: inherit;
  }

  ${InlineInputTextBase} {
    height: 100%;
    max-width: 100%;
    width: 100%;
    input,
    span {
      padding: 0 ${({ theme: { space } }) => space.xsmall};
    }
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
