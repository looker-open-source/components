/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import getLuminance from 'polished/lib/color/getLuminance'
import shade from 'polished/lib/color/shade'
import tint from 'polished/lib/color/tint'
import { scaleMixAmount } from './scaleMixAmount'

/**
 * Tints or shades a color based on the luminosity of the color
 *
 * Used for generating our UI colors based on the background color
 *
 * If the color has a higher luminosity, a light background for example,
 * the color is shaded, returning a color mixed with black
 *
 * For colors with lower luminosity, dark background colors for example,
 * the colors is tinted,returning a color mixed with white
 *
 * @param mixAmount 0 - 100
 * @param color
 */
export const tintOrShadeUiColor = (mixAmount: number, color: string) => {
  const isBright = getLuminance(color) > 0.5
  const mixAdjustment = isBright ? mixAmount : scaleMixAmount(mixAmount, 1.5)

  /* shade & tint functions cannot exceed 100% */
  const mixPercent = mixAdjustment > 100 ? 1 : mixAdjustment / 100

  return (isBright ? shade : tint)(mixPercent, color)
}
