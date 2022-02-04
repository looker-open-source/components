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
import { css, keyframes } from 'styled-components'

const rippleRadiusIn: Keyframes = keyframes`
from {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(var(--ripple-translate, 0)) scale(var(--ripple-scale-start, 1));
}
to {
  transform: translate(var(--ripple-translate, 0))
    scale(var(--ripple-scale-end, 1));
}
`

const rippleOpacityIn: Keyframes = keyframes`
from {
  animation-timing-function: linear;
  opacity: 0;
}
to {
  opacity: .12;
}
`

const rippleOpacityOut: Keyframes = keyframes`
from {
  animation-timing-function: linear;
  opacity: .12;
}
to {
  opacity: 0;
}
`

/**
 * Uses :before as fade-in overlay "background" and :after as rippling overlay
 */
export const rippleStyle = css`
  outline: none;
  overflow: var(--ripple-overflow);
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &::before,
  &::after {
    background-color: var(--ripple-color, #000000);
    border-radius: 50%;
    content: '';
    height: var(--ripple-size, 100%);
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform-origin: center center;
    width: var(--ripple-size, 100%);
  }

  &::before {
    transform: translate(var(--ripple-translate, 0))
      scale(var(--ripple-scale-end, 1));
    transition: opacity 15ms linear;
  }

  &::after {
    transform: scale(0);
  }

  &.bg-on::before {
    opacity: 0.12;
  }

  &.fg-in::after {
    animation-duration: ${({
      theme: {
        defaults: { brandAnimation },
        transitions: { rapid, simple },
      },
    }) => `${simple}ms, ${brandAnimation ? rapid : '15'}ms`};
    animation-fill-mode: forwards, forwards;
    animation-name: ${rippleRadiusIn}, ${rippleOpacityIn};
  }
  &.fg-out::after {
    animation: ${rippleOpacityOut};
    animation-duration: ${({ theme: { transitions } }) => transitions.quick}ms;
    transform: translate(var(--ripple-translate, 0))
      scale(var(--ripple-scale-end, 1));
  }
`
