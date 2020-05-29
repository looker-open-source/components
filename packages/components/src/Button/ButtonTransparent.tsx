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

import styled from 'styled-components'
import { variant } from 'styled-system'
import { ButtonBase } from './ButtonBase'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const transparentButtonPadding = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      px: 'xsmall',
    },
    xsmall: {
      px: 'xsmall',
    },
    small: {
      px: 'small',
    },
    medium: {
      px: 'large',
    },
    large: {
      px: 'large',
    },
  },
})

export const ButtonTransparent = styled(ButtonBase)`
  background: transparent;
  border: 1px solid transparent;
  color: ${({ theme, color = 'key' }) => theme.colors[color]};
  ${(props) =>
    props.iconBefore || props.iconAfter
      ? transparentButtonPadding
      : `padding: 0 ${props.theme.space.xsmall};`}

  &:hover,
  &:focus,
  &.hover {
    background: ${({ theme, color = 'key' }) => theme.colors[`${color}Subtle`]};
    border-color: ${({ theme, color = 'key' }) =>
      theme.colors[`${color}Subtle`]};
    color: ${({ theme, color = 'key' }) => theme.colors[`${color}TextAlt`]};
  }

  &:active,
  &.active {
    background: ${({ theme, color = 'key' }) => theme.colors[`${color}Accent`]};
    border-color: ${({ theme, color = 'key' }) =>
      theme.colors[`${color}Accent`]};
    color: ${({ theme, color = 'key' }) => theme.colors[`${color}TextAlt`]};
  }

  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
      border-color: transparent;
      color: ${({ theme, color = 'key' }) => theme.colors[color]};
    }
  }
`
