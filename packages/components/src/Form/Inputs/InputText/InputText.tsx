/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { omitStyledProps, space, reset, layout } from '@looker/design-tokens'
import type { MouseEvent, Ref } from 'react'
import React, { forwardRef, useRef } from 'react'
import styled, { css } from 'styled-components'
import { targetIsButton, useForkedRef, useWrapEvent } from '../../../utils'
import { DISABLED_OPACITY } from '../../constants'
import { InlineInputTextBase } from '../InlineInputText'
import { inputPropKeys, pickInputProps } from '../InputProps'
import { innerInputStyle } from '../innerInputStyle'
import { inputHeight } from '../height'
import { After } from './After'
import { Before } from './Before'
import type { InputTextProps } from './types'

const InputComponent = forwardRef(
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
      noErrorIcon,
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

    const inputProps = {
      ...pickInputProps(omitStyledProps(props)),
      'aria-invalid': validationType === 'error' ? true : undefined,
      type,
    }

    let inner = <StyledInput {...inputProps} ref={ref} />

    if (children) {
      // Support for rendering chips in InputChips and SelectMulti
      inner = (
        <div className="inner">
          {children}
          {<StyledInput {...inputProps} ref={ref} />}
        </div>
      )
    } else if (autoResize) {
      inner = <InlineInputTextBase {...inputProps} ref={ref} />
    }

    return (
      <div
        className={className}
        {...mouseHandlers}
        {...omitStyledProps(omit(props, inputPropKeys))}
      >
        <Before before={before} iconBefore={iconBefore} />
        {inner}
        <After
          after={after}
          iconAfter={iconAfter}
          noErrorIcon={noErrorIcon}
          validationType={validationType}
        />
      </div>
    )
  }
)

const StyledInput = styled.input`
  ${innerInputStyle}
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.small};
  max-width: 100%;
  min-width: 2rem;
  padding: 0 ${({ theme: { space } }) => space.u2};
`

export const inputTextHover = css`
  border-color: ${({ theme }) => theme.colors.ui4};
`
export const inputTextFocus = css`
  border-color: ${({ theme }) => theme.colors.key};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.key};
  outline: none;
`

export const inputTextDisabled = css`
  cursor: default;
  opacity: ${DISABLED_OPACITY};
  &:hover {
    border-color: ${({ theme }) => theme.colors.ui3};
  }
  /* FloatingLabelField handles opacity */
  [data-disabled='true'] & {
    opacity: 1;
  }
`

export const inputTextValidation = css<{ validationType?: 'error' }>`
  ${props =>
    props.validationType === 'error'
      ? `
      border-color: ${props.theme.colors.critical};
      &:hover {
        border-color: ${props.theme.colors.critical};
      }
      &:focus,
      &:focus-within {
        border-color: ${props.theme.colors.critical};
        box-shadow: inset 0 0 0 1px ${props.theme.colors.critical};
      }
      input {
        caret-color: ${props.theme.colors.critical};
      }
      `
      : ''}
`

export const inputCSS = css`
  background: ${({ theme: { colors } }) => colors.field};
  border: 1px solid ${({ theme: { colors } }) => colors.ui3};
  border-radius: ${({ theme: { radii } }) => radii.medium};
  color: ${({ theme: { colors } }) => colors.text5};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`

export const InputText = styled(InputComponent).attrs<InputTextProps>(
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
  padding: ${({ theme: { space } }) => `${space.u05} ${space.u1}`};
  width: ${({ autoResize }) => (autoResize ? 'auto' : '100%')};

  ${layout}
  ${space}
  ${inputCSS}

  ${InlineInputTextBase} {
    height: 100%;
    max-width: 100%;
    width: 100%;
    input,
    span {
      padding: 0 ${({ theme }) => theme.space.u2};
    }
  }

  &:hover {
    ${inputTextHover}
  }
  &:focus,
  &:focus-within {
    ${inputTextFocus}
  }
  ${({ disabled }) => (disabled ? inputTextDisabled : '')}
  ${inputTextValidation}
`
