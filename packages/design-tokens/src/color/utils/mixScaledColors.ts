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
