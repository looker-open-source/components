/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import { iconButtonColorDerivation } from '@looker/design-tokens'
import type { ToggleColorProps } from './iconButtonTypes'

export const ICON_BUTTON_DEFAULT_COLOR = 'key'

export const iconButtonColor = css<
  ToggleColorProps & {
    toggle?: boolean
  }
>`
  ${iconButtonColorDerivation}

  &:hover,
  &:focus,
  &.hover {
    color: ${({ theme }) => theme.colors.neutralInteractive};
  }

  &[aria-expanded='true'],
  &:active,
  &.active {
    color: ${({ theme, toggle, toggleColor }) =>
      toggle !== undefined
        ? theme.colors[toggleColor || ICON_BUTTON_DEFAULT_COLOR]
        : theme.colors.neutralPressed};
  }

  &[aria-pressed='true'] {
    color: ${({ theme, toggleColor }) =>
      theme.colors[toggleColor || ICON_BUTTON_DEFAULT_COLOR]};
  }
`
