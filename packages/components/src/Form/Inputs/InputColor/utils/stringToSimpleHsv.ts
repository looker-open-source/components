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

import { hsv } from 'd3-hsv'
import { SimpleHSV } from '../types'

export const stringToSimpleHsv = (color: string): SimpleHSV => {
  let { h, s, v } = hsv(color)
  /**
   * The hsv helper function returns NaN for hueless and saturation-less values
   * like black, white, grey. We will instead send 0 if either value is NaN for use
   * when calculating handle positioning and coloring on the hue slider and saturation preview.
   *
   * 0 is used as a fallback value to mirror MDN's handling of hueless and saturation-less values:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
   */
  if (isNaN(h)) h = 0
  if (isNaN(s)) s = 0

  return { h, s, v }
}
