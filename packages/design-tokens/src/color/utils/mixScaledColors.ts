/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import getLuminance from 'polished/lib/color/getLuminance'
import mix from 'polished/lib/color/mix'
import { scaleMixAmount } from './scaleMixAmount'

export const mixScaledColors = (
  mixAmount: number,
  foreground: string,
  background: string
) => {
  // Get the background colors luminance, if low, we need to scale the mix amount
  const colorLuminance = getLuminance(background)

  // We use this adjustment scale to to modify our blends based on the backgrounds luminosity
  // The lower luminosity, the more intense we need to scale the blend
  const luminanceAdjustmentScale = {
    lower: 1.3,
    lowest: 1.7,
  }

  // Adjust the mixAmount based on the background colors luminosity
  let adjustment = mixAmount
  if (colorLuminance < 0.16 && colorLuminance > 0.08) {
    adjustment = luminanceAdjustmentScale.lower
  } else if (colorLuminance < 0.08) {
    adjustment = luminanceAdjustmentScale.lowest
  }

  // If the background's colors luminosity is greater than 0.3 use the default mix amount
  // otherwise use the scaled mix
  const mixAdjustment =
    colorLuminance > 0.3 ? mixAmount : scaleMixAmount(mixAmount, adjustment)

  return mix(mixAdjustment / 100, foreground, background)
}
