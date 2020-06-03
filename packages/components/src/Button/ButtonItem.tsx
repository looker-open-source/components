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

import { parseToHsl } from 'polished'
import React, { forwardRef, MouseEvent, Ref, useContext } from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import { ButtonSetContext } from './ButtonSetContext'

export interface ButtonItemProps
  extends SpaceProps,
    TypographyProps,
    Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type' | 'aria-pressed'> {
  value?: string
}

const ButtonLayout = forwardRef(
  (
    { children, onClick, value, ...props }: ButtonItemProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { value: contextValue, onItemClick } = useContext(ButtonSetContext)

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
        {...props}
      >
        {children}
      </button>
    )
  }
)

ButtonLayout.displayName = 'ButtonLayout'

export const buttonItemHeight = 36

export const ButtonItem = styled(ButtonLayout)`
  height: ${buttonItemHeight}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.small};
  user-select: none;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: transparent;
  border-color: hsla(
    ${({ theme }) => parseToHsl(theme.colors.key).hue},
    25%,
    90%,
    1
  );
  transition: background ${({ theme }) => theme.transitions.durationQuick} ease;

  &[aria-pressed='false']:not([disabled]):hover {
    background: hsla(
      ${({ theme }) => parseToHsl(theme.colors.key).hue},
      25%,
      97%,
      0.7
    );
  }

  &[disabled] {
    cursor: default;
    color: ${(props) => props.theme.colors.text5};
  }

  &:active {
    background: hsla(
      ${({ theme }) => parseToHsl(theme.colors.key).hue},
      50%,
      96%,
      0.9
    );
  }

  &:focus {
    outline: none;
  }

  color: ${({ theme }) => theme.colors.text3};

  &[aria-pressed='true'] {
    background: hsla(
      ${({ theme }) => parseToHsl(theme.colors.key).hue},
      100%,
      98%,
      1
    );

    border-color: hsla(
      ${({ theme }) => parseToHsl(theme.colors.key).hue},
      100%,
      98%,
      1
    );

    color: ${({ theme }) => theme.colors.key};

    /* stylelint-disable */
    text-shadow: -0.025ex 0 currentColor, 0.025ex 0 currentColor;
    /* stylelint-enabled */
  }
  ${space}
  ${typography}
`
