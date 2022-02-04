/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
