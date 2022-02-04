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

import type { Keyframes } from 'styled-components'
import styled, { keyframes } from 'styled-components'
import type { PanelSurfaceProps } from './types'

// We have to use animation/keyframes here instead of transition
// transition starts after the class changes from entering to entered
// but animation/keyframes starts as soon as the element is rendered
const slideIn: Keyframes = keyframes`
  0% {transform: translate(var(--direction-translate, 0), 0);}
  100% {transform: translate(0);}
`
const slideOut: Keyframes = keyframes`
  0% {transform: translate(0);}
  100% {transform: translate(var(--direction-translate, 0), 0);}
`

/**
 * Produces the interior "surface" of an active `Panel`
 *
 * @private - Don't leverage this directly (it may be removed without notice)
 */
export const PanelSurface = styled.div.attrs<PanelSurfaceProps>(
  ({ direction = 'left' }) => ({ 'data-panel': true, direction })
)<PanelSurfaceProps>`
  --direction-translate: ${({ direction }) =>
    direction === 'left' ? '-100%' : '100%'};

  animation-duration: ${({ theme: { transitions } }) => transitions.moderate}ms;
  background: ${({ theme }) => theme.colors.background};
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;

  &.entering {
    animation-name: ${slideIn};
  }
  &.exiting {
    animation-name: ${slideOut};
  }
`
