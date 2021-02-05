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

import styled, { css } from 'styled-components'
import { variant } from 'styled-system'

type PanelSurfaceDirections = 'left' | 'right'
export interface PanelSurfaceProps {
  /**
   * Edge of the screen from which the panel will enter
   * left - right
   * @default 'left'
   */
  direction?: PanelSurfaceDirections
}

const surfaceTransition = () => css`
  ${({ theme }) => `${theme.transitions.moderate}ms ${theme.easings.ease}`}
`

const direction = variant({
  prop: 'direction',
  variants: {
    left: { transform: 'translate(-100%, 0);' },
    right: { transform: 'translate(100%, 0);' },
  },
})

export const PanelSurface = styled.div.attrs<PanelSurfaceProps>(
  ({ direction = 'left' }) => ({ direction })
)<PanelSurfaceProps>`
  background: ${({ theme }) => theme.colors.background};
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};
  width: 100%;

  &.entering,
  &.exiting {
    opacity: 0.01;
    ${direction}
  }
`
