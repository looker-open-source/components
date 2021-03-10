/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { HSLColor, RGBColor } from 'd3-color'
import { getOpacity } from './getOpacity'
import { toPercent } from './toPercent'

const RGB_MAX_VALUE = 255

export const rgbToRgbpString = (
  color: RGBColor | HSLColor,
  opacity: number | null = null,
  useAlpha = false
) => {
  const opacityUse = opacity || getOpacity(color)
  const rgb = color.rgb()
  const r = toPercent(rgb.r, RGB_MAX_VALUE)
  const g = toPercent(rgb.g, RGB_MAX_VALUE)
  const b = toPercent(rgb.b, RGB_MAX_VALUE)
  if (useAlpha || opacityUse !== 1) {
    return `rgba(${r}%, ${g}%, ${b}%, ${opacityUse})`
  }
  return `rgb(${r}%, ${g}%, ${b}%)`
}
