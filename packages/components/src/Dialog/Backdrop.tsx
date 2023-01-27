/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
