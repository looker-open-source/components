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

// This value is specific to Visx chart rendering logic.
// I have no idea what the unit is.
const MAX_GLYPH_SIZE = 8000

/**
 * Set a glyph size based on data point and min/max values.
 * Relevant for Scatter charts.
 *
 * @param data the value to render
 * @param dataMax the max possible value
 * @param dataMin the min possible value
 * @returns a number no greater than MAX_GLYPH_SIZE
 */

export const getRelativeGlyphSize = (
  data: number,
  dataMin: number,
  dataMax: number
) => {
  const dataRange = dataMax - dataMin
  // add 1% to the relative size calculation so that there are no zero-sized points
  const sizePercent = (data - dataMin) / dataRange + 0.01
  return Math.round(MAX_GLYPH_SIZE * sizePercent)
}
