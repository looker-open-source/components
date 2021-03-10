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

import {
  color,
  cubehelix,
  Color,
  hcl,
  hsl,
  rgb,
  lab,
  RGBColor,
  HSLColor,
} from 'd3-color'
import { hsv, HSVColor } from 'd3-hsv'
import { SimpleHSV } from '../types'
import { toPercent } from './toPercent'
import { namedColors } from './named_colors'

export enum ColorFormat {
  NAME,
  HEX3,
  HEX6,
  RGBI,
  RGBIA,
  RGBP,
  RGBPA,
  HSL,
  HSLA,
  TRANSPARENT,
  BAD,
}

const recognize = (format: string) => {
  // copied and tweaked from https://github.com/d3/d3-color/blob/master/src/color.js#L8
  const reI = '\\s*([+-]?\\d+)\\s*'
  const reN = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*'
  const reP = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*'
  const reHex3 = /^#([0-9a-f]{3})$/
  const reHex6 = /^#([0-9a-f]{6})$/
  const reRgbInteger = new RegExp('^rgb\\(' + [reI, reI, reI] + '\\)$')
  const reRgbPercent = new RegExp('^rgb\\(' + [reP, reP, reP] + '\\)$')
  const reRgbaInteger = new RegExp('^rgba\\(' + [reI, reI, reI, reN] + '\\)$')
  const reRgbaPercent = new RegExp('^rgba\\(' + [reP, reP, reP, reN] + '\\)$')
  const reRgbaPercent2 = new RegExp('^rgba\\(' + [reP, reP, reP, reP] + '\\)$')
  const reHslPercent = new RegExp('^hsl\\(' + [reN, reP, reP] + '\\)$')
  const reHslaPercent = new RegExp('^hsla\\(' + [reN, reP, reP, reN] + '\\)$')

  format = String(format).trim().toLowerCase()

  return reHex3.exec(format)
    ? ColorFormat.HEX3
    : reHex6.exec(format)
    ? ColorFormat.HEX6
    : reRgbInteger.exec(format)
    ? ColorFormat.RGBI
    : reRgbPercent.exec(format)
    ? ColorFormat.RGBP
    : reRgbaInteger.exec(format)
    ? ColorFormat.RGBIA
    : reRgbaPercent.exec(format)
    ? ColorFormat.RGBPA
    : reRgbaPercent2.exec(format)
    ? ColorFormat.RGBPA
    : reHslPercent.exec(format)
    ? ColorFormat.HSL
    : reHslaPercent.exec(format)
    ? ColorFormat.HSLA
    : Object.prototype.hasOwnProperty.call(namedColors, format)
    ? ColorFormat.NAME
    : format === 'transparent'
    ? ColorFormat.TRANSPARENT
    : ColorFormat.BAD
}

export const getFormat = (value: string) => ColorFormat[recognize(value)]

export const toFormattedColorString = (
  value: string,
  format: ColorFormat | null = null
): string => {
  const colorCalc = color(value)
  if (!colorCalc) return ''
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  if (!colorCalc.displayable) return ''

  if (format === null) format = recognize(value)
  const opacity = getOpacity(colorCalc)

  switch (format) {
    case ColorFormat.NAME:
    case ColorFormat.TRANSPARENT:
      return toColorName(colorCalc)
    case ColorFormat.HEX3:
    case ColorFormat.HEX6:
      if (opacity === 1) return colorCalc.hex()
      return colorCalc.rgb().toString()
    case ColorFormat.RGBI:
      return colorCalc.rgb().toString()
    case ColorFormat.RGBIA:
      return toRGBIString(colorCalc, opacity, true)
    case ColorFormat.RGBP:
      return toRGBPString(colorCalc, opacity)
    case ColorFormat.RGBPA:
      return toRGBPString(colorCalc, opacity, true)
    case ColorFormat.HSL:
      return toHSLString(colorCalc, opacity)
    case ColorFormat.HSLA:
      return toHSLString(colorCalc, opacity, true)
    default:
      return colorCalc.toString()
  }
}
export const toHSV = (value: string) => {
  const colorCalc = color(value)
  if (!colorCalc) return null
  return hsv(colorCalc)
}

export const hsvToColorString = (
  hsvColor: HSVColor,
  format: ColorFormat | null = null
) => toFormattedColorString(hsvColor.rgb().toString(), format)
