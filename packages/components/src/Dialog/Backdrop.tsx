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

import type {
  BackgroundColorProps,
  CompatibleHTMLProps,
  OpacityProps,
} from '@looker/design-tokens'
import { color, reset, shouldForwardProp } from '@looker/design-tokens'
import type { CSSObject, Keyframes } from 'styled-components'
import styled, { keyframes } from 'styled-components'

export interface BackdropProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    BackgroundColorProps,
    OpacityProps {
  visible?: boolean
  inlineStyle?: CSSObject
}
// We have to use animation/keyframes here instead of transition
// transition starts after the class changes from entering to entered
// but animation/keyframes starts as soon as the element is rendered
const fadeIn: Keyframes = keyframes`
from {
  opacity: 0.01;
}
to {
  opacity: 0.6;
}
`
const fadeOut: Keyframes = keyframes`
from {
  opacity: 0.6;
}
to {
  opacity: 0.01;
}
`

// Backdrop styles are applied here (rather than using the inline `style={...}` prop) to ensure that
// transitions will still apply to backdrop
export const Backdrop = styled.div
  .withConfig({ shouldForwardProp })
  .attrs(() => ({
    'data-testid': 'backdrop',
  }))`
  ${reset}
  ${color}

  animation-duration: ${({ theme }) => theme.transitions.simple}ms;
  animation-fill-mode: forwards;
  background: ${({ theme }) => theme.colors.ui5};
  bottom: 0;
  cursor: default;
  left: 0;
  opacity: 0.6;
  position: fixed;
  right: 0;
  top: 0;

  &.entering {
    animation-name: ${fadeIn};
  }
  &.exiting {
    animation-name: ${fadeOut};
  }
`
