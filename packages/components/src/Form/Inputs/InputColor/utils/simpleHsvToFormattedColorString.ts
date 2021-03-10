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

import { SimpleHSV } from '../types'
import { simpleHsvToRgb } from './simpleHsvToRgb'
import { rgbToColorName } from './rgbToColorName'
import { rgbToRgbiString } from './rgbToRgbiString'
import { rgbToRgbpString } from './rgbToRgbpString'
import { rgbToHslString } from './rgbToHslString'

export const simpleHSVtoFormattedColorString = (
  color: SimpleHSV,
  colorFormat?: string
) => {
  const rgbColor = simpleHsvToRgb(color)
  switch (colorFormat) {
    case 'NAME':
      return rgbToColorName(rgbColor)
    case 'RGBI':
    case 'RGBIA':
      return rgbToRgbiString(rgbColor)
    case 'RGBP':
    case 'RGBPA':
      return rgbToRgbpString(rgbColor)
    case 'HSL':
    case 'HSLA':
      return rgbToHslString(rgbColor)
    case 'HEX3':
    case 'HEX6':
    default:
      return rgbColor.hex()
  }
}
