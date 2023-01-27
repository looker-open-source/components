/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
