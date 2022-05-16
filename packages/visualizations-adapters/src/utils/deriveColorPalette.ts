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
import { hsv } from 'd3-hsv'
import { DEFAULT_SERIES_COLORS } from '../utils'

const colorTransformations = [
  { h: 0, s: 0, v: 0 }, // unmodified default colors
  { h: 45, s: -0.05, v: 0 }, // pivot 45 degrees
  { h: 90, s: 0, v: 0 }, // pivot 90 degrees
  { h: -60, s: 0, v: 0 }, // pivot -60 degrees
  { h: -90, s: 0, v: 0 }, // pivot -90 degrees
  { h: 180, s: 0, v: 0 }, // complementary colors
  { h: 0, s: 0.15, v: 0.15 }, // increase value and saturation by 15%
  { h: 0, s: 0.15, v: -0.25 }, // decrease value 25%
  { h: 0, s: -0.25, v: -0.25 }, // decrease value and saturation by 25%
  { h: 180, s: -0.25, v: -0.25 }, // complementary colors darkened
]

/**
 * Helper function derives complelementary alternate colors from a base set
 * @param baseColors an array of color codes
 * @returns an array of color codes
 */
export const deriveColorPalette = (
  baseColors: string[] = DEFAULT_SERIES_COLORS
) => {
  return colorTransformations.flatMap(t => {
    const { h: hueDiff, s: satDiff, v: valDiff } = t
    return baseColors.map(color => {
      const { h, s, v } = hsv(color)
      const newHue = (h + hueDiff) % 360
      const newSat = Math.max(Math.min(s + satDiff, 1), 0)
      const newVal = Math.max(Math.min(v + valDiff, 1), 0)

      return hsv(newHue, newSat, newVal).hex()
    })
  })
}
