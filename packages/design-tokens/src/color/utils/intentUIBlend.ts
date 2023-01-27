/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import type { UIColorLevels } from '../blendPoints'
import { uiBlends } from '../blendPoints'
import type { IntentColors } from '../types'
import { mixScaledColors } from './mixScaledColors'

/**
 * Blends an intent color with the background
 **/
export const intentUIBlend = (
  intent: keyof IntentColors | 'key' | 'neutral',
  level: UIColorLevels
) => css`
  ${({ theme: { colors } }) =>
    mixScaledColors(uiBlends[level], colors[intent], colors.background)}
`
