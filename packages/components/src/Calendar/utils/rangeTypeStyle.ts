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
import type { RangeProps } from '../types'

export const rangeTypeStyle = ({ rangePosition, rangeType }: RangeProps) => {
  if (rangeType === 'none' || !rangePosition) return ''
  if (rangeType === 'selected') {
    return css`
      background: ${({ theme }) => theme.colors.keyAccent};
    `
  }
  return css`
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.ui4} 60%,
        transparent 40%
      ),
      linear-gradient(
        to right,
        ${({ theme }) => theme.colors.ui4} 60%,
        transparent 40%
      );
    background-position: left top, left bottom;
    background-repeat: repeat-x, repeat-x;
    background-size: 4px 1px, 4px 1px;
  `
}
