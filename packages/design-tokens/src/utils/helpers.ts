/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import rgba from 'polished/lib/color/rgba'
import lighten from 'polished/lib/color/lighten'
import mix from 'polished/lib/color/mix'
import { css } from 'styled-components'
import type { ExtendedStatefulColor } from '../color/types/stateful'

export const buttonShadow = (color: ExtendedStatefulColor = 'key') =>
  css`
    box-shadow: 0 0 0 0.15rem ${({ theme }) => rgba(theme.colors[color], 0.25)};
  `

export const iconButtonColorDerivation = () => css`
  color: ${({ theme }) => lighten(0.14, theme.colors.neutral)};
`

export const tabShadowColor = () => css`
  box-shadow: 0 0 0 0.15rem ${({ theme }) => rgba(theme.colors.keyFocus, 0.25)};
`

export const calendarMixColor = () => css`
  color: ${({ theme: { colors } }) =>
    mix(0.65, colors.keyAccent, colors.neutralInteractive)};
`
