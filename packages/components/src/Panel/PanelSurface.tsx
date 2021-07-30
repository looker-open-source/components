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

import styled, { css } from 'styled-components'
import { variant } from '@looker/design-tokens'
import { PanelSurfaceProps } from './types'

const surfaceTransition = () => css`
  ${({ theme }) => `${theme.transitions.moderate}ms ${theme.easings.easeOut}`}
`

const direction = variant({
  prop: 'direction',
  variants: {
    left: { transform: 'translate(-100%, 0);' },
    right: { transform: 'translate(100%, 0);' },
  },
})

/**
 * Produces the interior "surface" of an active `Panel`
 *
 * @private - Don't leverage this directly (it may be removed without notice)
 */
export const PanelSurface = styled.div.attrs<PanelSurfaceProps>(
  ({ direction = 'left' }) => ({ direction })
)<PanelSurfaceProps>`
  background: ${({ theme }) => theme.colors.background};
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};
  width: 100%;

  &.entering,
  &.exiting {
    ${direction}
  }
`
