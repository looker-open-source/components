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

import { css } from 'styled-components'

type BorderPosition = 'all' | 'bottom' | 'left' | 'right' | 'top' | 'x' | 'y'

export const borderHelper = (position: BorderPosition, color = 'ui2') => {
  // if (color === false) return ''
  if (position === 'all') {
    // positions = [ 'bottom', 'left', 'right', 'top', ]
    return css`
      border: 1px solid ${({ theme }) => theme.colors[`${color}`]};
    `
  } else if (position === 'bottom') {
    // positions = [ 'bottom' ]
    return css`
      border-bottom: 1px solid ${({ theme }) => theme.colors[`${color}`]};
    `
  } else if (position === 'left') {
    // positions = [ 'left' ]
    return css`
      border-left: 1px solid ${({ theme }) => theme.colors[`${color}`]};
    `
  } else if (position === 'right') {
    // positions = [ 'right' ]
    return css`
      border-right: 1px solid ${({ theme }) => theme.colors[`${color}`]};
    `
  } else if (position === 'top') {
    // positions = [ 'top' ]
    return css`
      border-top: 1px solid ${({ theme }) => theme.colors[`${color}`]};
    `
  } else if (position === 'x') {
    // positions = [ 'bottom', 'top', ]
    return css`
      border-bottom: 1px solid ${({ theme }) => theme.colors[`${color}`]};
      border-top: 1px solid ${({ theme }) => theme.colors[`${color}`]};
    `
  } else if (position === 'y') {
    // positions = [ 'left', 'right', ]
    return css`
      border-left: 1px solid ${({ theme }) => theme.colors[`${color}`]};
      border-right: 1px solid ${({ theme }) => theme.colors[`${color}`]};
    `
  }
}
