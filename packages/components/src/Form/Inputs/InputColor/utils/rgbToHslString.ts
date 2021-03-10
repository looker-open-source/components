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

import { RGBColor, HSLColor, hsl } from 'd3-color'
import { getOpacity } from './getOpacity'

export const rgbToHslString = (
  color: RGBColor | HSLColor,
  opacity: number | null = null,
  useAlpha = false
) => {
  const opacityUse = opacity || getOpacity(color)
  const hslColor = hsl(color)
  const h = isNaN(hslColor.h) ? 0 : hslColor.h
  const s = isNaN(hslColor.s) ? 0 : Math.round(hslColor.s * 100)
  const l = isNaN(hslColor.l) ? 100 : Math.round(hslColor.l * 100)
  if (useAlpha || opacityUse !== 1) {
    return `hsla(${h}, ${s}%, ${l}%, ${opacityUse})`
  }
  return `hsl(${h}, ${s}%, ${l}%)`
}
