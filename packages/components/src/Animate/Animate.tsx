/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps, Transitions } from '@looker/design-tokens'
import { fadeIn } from '@looker/design-tokens'
import React from 'react'
import styled, { css } from 'styled-components'
import type { SimpleLayoutProps } from '../Layout/utils/simple'
import { simpleLayoutCSS } from '../Layout/utils/simple'

export type AnimationProps = {
  /**
   * Adds a delay before the start of the animation
   * @default none
   */
  delay?: Transitions
  /**
   * Controls the duration of the animation
   * @default quick
   */
  duration?: Transitions
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

export const Animate = styled((props: AnimateProps) => {
  const { delay: _delay, duration: _duration, ...rest } = props
  return <div {...rest} />
})`
  ${simpleLayoutCSS}
  ${animateCSS}
`

export const FadeIn = styled(Animate)`
  animation-fill-mode: both;
  animation-name: ${fadeIn};
`
