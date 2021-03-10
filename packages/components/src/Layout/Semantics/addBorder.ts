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

export const addBorder = (border?: string) => {
  if (border === 'bottom') {
    return css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
    `
  } else if (border === 'left') {
    return css`
      border-left: 10px solid ${({ theme }) => theme.colors.ui2};
    `
  } else if (border === 'right') {
    return css`
      border-right: 1px solid ${({ theme }) => theme.colors.ui2};
    `
  } else if (border === 'top') {
    return css`
      border-top: 1px solid ${({ theme }) => theme.colors.ui2};
    `
  } else if (border === 'x') {
    return css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
      border-top: 1px solid ${({ theme }) => theme.colors.ui2};
    `
  } else if (border === 'y') {
    return css`
      border-left: 1px solid ${({ theme }) => theme.colors.ui2};
      border-right: 1px solid ${({ theme }) => theme.colors.ui2};
    `
  } else {
    return css`
      border: 1px solid ${({ theme }) => theme.colors.ui2};
    `
  }
}
