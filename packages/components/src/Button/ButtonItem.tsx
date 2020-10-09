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

import React, { forwardRef, MouseEvent, Ref, useContext } from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  space,
  SpaceProps,
  omitStyledProps,
} from '@looker/design-tokens'
import { inputHeight } from '../Form/Inputs/height'
import { ButtonSetContext } from './ButtonSetContext'

export interface ButtonItemProps
  extends SpaceProps,
    Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type' | 'aria-pressed'> {
  value?: string
}

const ButtonLayout = forwardRef(
  (
    { children, onClick, value, ...props }: ButtonItemProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { disabled, value: contextValue, onItemClick } = useContext(
      ButtonSetContext
    )

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
      onClick && onClick(e)
      if (!e.defaultPrevented) {
        onItemClick && onItemClick(e)
      }
    }

    const itemValue =
      value !== undefined ? value : typeof children === 'string' ? children : ''

    const selected = contextValue
      ? typeof contextValue === 'string'
        ? contextValue === itemValue
        : contextValue.includes(itemValue)
      : false

    return (
      <button
        type="button"
        aria-pressed={selected}
        ref={ref}
        onClick={handleClick}
        value={itemValue}
        disabled={disabled}
        {...omitStyledProps(props)}
      >
        {children}
      </button>
    )
  }
)

ButtonLayout.displayName = 'ButtonLayout'

export const ButtonItem = styled(ButtonLayout)`
  align-items: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text3};
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }) => theme.fonts.brand};
  font-size: ${({ theme }) => theme.fontSizes.small};
  height: ${inputHeight};
  justify-content: center;
  margin: 0;
  padding: 0 ${({ theme }) => theme.space.small};
  transition: background ${({ theme }) => theme.transitions.durationQuick} ease;
  user-select: none;

  ${space}

  &:active,
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.ui1};
  }

  &:focus {
    box-shadow: 0 0 0.5px 1px ${({ theme }) => theme.colors.keyFocus};
    outline: none;
  }

  &[disabled] {
    color: ${(props) => props.theme.colors.text1};

    &:hover {
      background: inherit;
    }
    cursor: default;
  }

  &[aria-pressed='true'] {
    background: ${({ theme }) => theme.colors.keySubtle};
    color: ${({ theme }) => theme.colors.key};

    &[disabled] {
      background: ${({ theme }) => theme.colors.keySubtle};
      color: ${({ theme }) => theme.colors.keyFocus};
    }
  }
`
