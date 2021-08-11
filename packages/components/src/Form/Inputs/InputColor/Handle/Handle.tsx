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

import { theme } from '@looker/design-tokens'
import styled, { css } from 'styled-components'

export const HANDLE_SIZE = theme.sizes.small

export const handleCSS = css<HandleProps>`
  border: 2px solid ${({ theme: { colors } }) => colors.background};
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  cursor: ${({ isMouseDown }) => (isMouseDown ? 'grabbing' : 'pointer')};
  height: ${HANDLE_SIZE};
  left: 0;
  position: relative;
  width: ${HANDLE_SIZE};
`

export interface HandleProps {
  color: string
  isMouseDown: boolean
  x: number
}

export const Handle = styled.div.attrs<HandleProps>(({ color, x }) => ({
  style: {
    background: color,
    // Horizontally centers handle on click position
    transform: `translateX(calc(${x}px - ${HANDLE_SIZE} / 2))`,
  },
}))<HandleProps>`
  ${handleCSS}

  /* Vertically centers slider */
  top: ${({ theme }) => `calc(${theme.space.u3} / 2 - ${HANDLE_SIZE} / 2)`};
`
