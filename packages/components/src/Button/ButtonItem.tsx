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

import type { MouseEvent, Ref } from 'react'
import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import type { CompatibleHTMLProps, SpaceProps } from '@looker/design-tokens'
import { space, omitStyledProps } from '@looker/design-tokens'
import pick from 'lodash/pick'
import {
  rippleHandlerKeys,
  rippleStyle,
  useBoundedRipple,
  useRippleHandlers,
} from '../Ripple'
import { inputHeight } from '../Form/Inputs/height'
import { ButtonSetContext } from './ButtonSetContext'

export interface ButtonItemProps
  extends SpaceProps,
    Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type' | 'aria-pressed'> {
  value?: string
}

const ButtonLayout = forwardRef(
  (
    { children, className, onClick, style, value, ...props }: ButtonItemProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    const {
      disabled,
      value: contextValue,
      onItemClick,
    } = useContext(ButtonSetContext)

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
      onClick && onClick(e)
      if (!e.defaultPrevented) {
        onItemClick && onItemClick(e)
      }
    }

    let itemValue = ''

    if (value !== undefined) {
      itemValue = value
    } else if (typeof children === 'string') {
      itemValue = children
    }

    let selected = false

    if (contextValue) {
      if (typeof contextValue === 'string') {
        selected = contextValue === itemValue
      } else {
        selected = contextValue.includes(itemValue)
      }
    }

    const { callbacks, ...rippleProps } = useBoundedRipple({
      className,
      color: selected ? 'key' : 'neutral',
      ref: forwardedRef,
      style,
    })
    const rippleHandlers = useRippleHandlers(
      callbacks,
      pick(props, rippleHandlerKeys),
      disabled
    )

    return (
      <button
        aria-pressed={selected}
        onClick={handleClick}
        value={itemValue}
        disabled={disabled}
        type="button"
        {...omitStyledProps(props)}
        {...rippleProps}
        {...rippleHandlers}
      >
        {children}
      </button>
    )
  }
)

ButtonLayout.displayName = 'ButtonLayout'

export const ButtonItem = styled(ButtonLayout)`
  ${rippleStyle}
  align-items: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text3};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.small};
  height: ${inputHeight};
  justify-content: center;
  margin: 0;
  padding: 0 ${({ theme }) => theme.space.u3};
  transition: background ${({ theme }) => theme.transitions.quick}ms ease;
  user-select: none;

  ${space}

  &:active,
  &:hover {
    background: ${({ theme }) => theme.colors.neutralSubtle};
    color: ${({ theme }) => theme.colors.text5};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    color: ${({ theme }) => theme.colors.text1};
    cursor: default;

    &:hover {
      background: inherit;
    }
  }

  &[aria-pressed='true'] {
    background: ${({ theme }) => theme.colors.keyAccent};
    color: ${({ theme }) => theme.colors.text5};

    &[disabled] {
      background: ${({ theme }) => theme.colors.keySubtle};
      color: ${({ theme }) => theme.colors.keyFocus};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.keyInteractive};
    }
  }
`
