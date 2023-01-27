/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import darken from 'polished/lib/color/darken'
import getLuminance from 'polished/lib/color/getLuminance'
import lighten from 'polished/lib/color/lighten'
import { css } from 'styled-components'

// Returns a tint or shade of an intent color, used for text that sits on top of an intentUIBlend
// Adjust amount of lightening or darkening based on color's luminance as well as background color's luminance
export const generateIntentShade = (color: string) => {
  const intentColorLuminance = getLuminance(color)

  const adjustAmount =
    intentColorLuminance > 0.3 ? intentColorLuminance * 0.55 : 0.125
  return css`
    ${({ theme: { colors } }) =>
      getLuminance(colors.background) > 0.5
        ? darken(adjustAmount, color)
        : lighten(adjustAmount, color)}
  `
}
