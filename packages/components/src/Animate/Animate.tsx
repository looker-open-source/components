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

import { CompatibleHTMLProps, fadeIn, Transitions } from '@looker/design-tokens'
import omit from 'lodash/omit'
import React from 'react'
import styled, { css } from 'styled-components'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'

export type AnimationProps = {
  /**
   * Adds a delay before the start of the animation
   * @default none
   */
  delay: Transitions
  /**
   * Controls the duration of the animation
   * @default quick
   */
  duration: Transitions
}

export type AnimateProps = AnimationProps &
  SimpleLayoutProps &
  CompatibleHTMLProps<HTMLDivElement>

export const animateCSS = css<AnimationProps>`
  animation-delay: ${({ delay = 'none', theme }) =>
    `${theme.transitions[delay]}ms`};
  animation-duration: ${({ duration = 'quick', theme }) =>
    `${theme.transitions[duration]}ms`};
`

export const Animate = styled((props: AnimateProps) => (
  <div {...omit(props, ['delay', 'duration'])} />
))`
  ${simpleLayoutCSS}
  ${animateCSS}
`

export const FadeIn = styled(Animate)`
  animation-fill-mode: forwards;
  animation-name: ${fadeIn};
  opacity: 0;
`
