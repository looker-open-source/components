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
import { SimpleHSV } from '../ColorWheel/color_wheel_utils'
import { toPercent } from './math_utils'
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

const RGB_MAX_VALUE = 255

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

export const getOpacity = (color: Color): number => {
  if (
    color instanceof cubehelix ||
    color instanceof hcl ||
    color instanceof hsl ||
    color instanceof rgb ||
    color instanceof lab
  ) {
    return color.opacity
  }
  return 1
}

const namedColorLookup = (color: Color) => {
  const hex = color.hex().replace(/^#/, '')
  const lookup = parseInt(hex, 16)
  const namedColorsFlipped = new Map(
    Object.entries(namedColors).map<[number, string]>(([k, v]) => [v, k])
  )
  return namedColorsFlipped.get(lookup)
}

export const toColorName = (
  color: RGBColor | HSLColor,
  opacity: number | null = null
) => {
  const opacityUse = opacity || getOpacity(color)
  const name = namedColorLookup(color)
  if (name) return name
  if (opacityUse !== 1) return rgb(color).toString()
  return color.hex()
}

export const toRGBIString = (
  color: RGBColor | HSLColor,
  opacity: number | null = null,
  useAlpha = false
) => {
  const opacityUse = opacity || getOpacity(color)
  const rgb = color.rgb()
  const r = Math.round(rgb.r)
  const g = Math.round(rgb.g)
  const b = Math.round(rgb.b)
  if (useAlpha || opacityUse !== 1) {
    return `rgba(${r}, ${g}, ${b}, ${opacityUse})`
  }
  return `rgb(${r}, ${g}, ${b})`
}

export const toRGBPString = (
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

export const toHSLString = (
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

export const hsv2hex = (color: SimpleHSV) =>
  hsv(color.h, color.s, color.v).hex()

export const str2simpleHsv = (color: string) => {
  const hsvColor = hsv(color)
  const simpleHSV: SimpleHSV = { h: hsvColor.h, s: hsvColor.s, v: hsvColor.v }
  return simpleHSV
}

export const simpleHSVtoRGB = (color: SimpleHSV): RGBColor =>
  hsv(color.h, color.s, color.v).rgb()

export const simpleHSVtoFormattedColorString = (
  color: SimpleHSV,
  colorFormat?: string
) => {
  const rgbColor = simpleHSVtoRGB(color)
  switch (colorFormat) {
    case 'NAME':
      return toColorName(rgbColor)
    case 'RGBI':
    case 'RGBIA':
      return toRGBIString(rgbColor)
    case 'RGBP':
    case 'RGBPA':
      return toRGBPString(rgbColor)
    case 'HSL':
    case 'HSLA':
      return toHSLString(rgbColor)
    case 'HEX3':
    case 'HEX6':
    default:
      return rgbColor.hex()
  }
}
