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

import { css } from 'styled-components'

export const multiInputWidth = 280

export interface PlacementProps {
  /**
   * Placement in a group of adjacent inputs
   */
  placement?: 'left' | 'middle' | 'right'
}

const flatBorderRight = css`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  &:not(:focus-within) {
    border-right-color: transparent;
  }
`

const flatBorderLeft = css`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`

export const inputPlacementStyle = ({ placement }: PlacementProps) => {
  switch (placement) {
    case 'left':
      return `
      ${flatBorderRight}
    `
    case 'right':
      return `
      ${flatBorderLeft}
    `
    case 'middle':
      return `
      ${flatBorderLeft}
      ${flatBorderRight}
    `
    default:
      return ''
  }
}

export interface TokenStyleProps {
  tokenStyle?: boolean
}

export const tokenStylePlaceholder = (props: TokenStyleProps) =>
  props.tokenStyle
    ? css`
        input::placeholder {
          color: ${({ theme }) => theme.colors.text3};
        }
      `
    : ''
