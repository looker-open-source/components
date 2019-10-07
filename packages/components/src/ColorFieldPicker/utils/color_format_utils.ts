import * as d3color from 'd3-color'
import * as d3hsv from 'd3-hsv'
import { SimpleHSV } from '../ColorWheel/color_wheel_utils'
import { toPerc } from './math_utils'
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

  format = String(format)
    .trim()
    .toLowerCase()

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
    : Object.prototype.hasOwnProperty.call(namedColors, 'format')
    ? ColorFormat.NAME
    : format === 'transparent'
    ? ColorFormat.TRANSPARENT
    : ColorFormat.BAD
}

export const getFormat = (value: string) => ColorFormat[recognize(value)]

export const getOpacity = (color: d3color.Color): number => {
  if (
    color instanceof d3color.cubehelix ||
    color instanceof d3color.hcl ||
    color instanceof d3color.hsl ||
    color instanceof d3color.rgb ||
    color instanceof d3color.lab
  ) {
    return color.opacity
  }
  return 1
}

const namedColorLookup = (color: d3color.Color) => {
  const hex = color.hex().replace(/^#/, '')
  const lookup = parseInt(hex, 16)
  const namedColorsFlipped = new Map(
    Object.entries(namedColors).map<[number, string]>(([k, v]) => [v, k])
  )
  return namedColorsFlipped.get(lookup)
}

export const toColorName = (
  color: d3color.RGBColor | d3color.HSLColor,
  opacity: number | null = null
) => {
  const opacityUse = opacity || getOpacity(color)
  const name = namedColorLookup(color)
  if (name) return name
  if (opacityUse !== 1) return d3color.rgb(color).toString()
  return color.hex()
}

export const toRGBIString = (
  color: d3color.RGBColor | d3color.HSLColor,
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
  color: d3color.RGBColor | d3color.HSLColor,
  opacity: number | null = null,
  useAlpha = false
) => {
  const opacityUse = opacity || getOpacity(color)
  const rgb = color.rgb()
  const r = toPerc(rgb.r, RGB_MAX_VALUE)
  const g = toPerc(rgb.g, RGB_MAX_VALUE)
  const b = toPerc(rgb.b, RGB_MAX_VALUE)
  if (useAlpha || opacityUse !== 1) {
    return `rgba(${r}%, ${g}%, ${b}%, ${opacityUse})`
  }
  return `rgb(${r}%, ${g}%, ${b}%)`
}

export const toHSLString = (
  color: d3color.RGBColor | d3color.HSLColor,
  opacity: number | null = null,
  useAlpha = false
) => {
  const opacityUse = opacity || getOpacity(color)
  const hsl = d3color.hsl(color)
  const h = isNaN(hsl.h) ? 0 : hsl.h
  const s = isNaN(hsl.s) ? 0 : Math.round(hsl.s * 100)
  const l = isNaN(hsl.l) ? 100 : Math.round(hsl.l * 100)
  if (useAlpha || opacityUse !== 1) {
    return `hsla(${h}, ${s}%, ${l}%, ${opacityUse})`
  }
  return `hsl(${h}, ${s}%, ${l}%)`
}

export const toFormattedColorString = (
  value: string,
  format: ColorFormat | null = null
): string => {
  const color = d3color.color(value)
  if (!color) return ''
  if (!color.displayable) return ''

  if (format === null) format = recognize(value)
  const opacity = getOpacity(color)

  switch (format) {
    case ColorFormat.NAME:
    case ColorFormat.TRANSPARENT:
      return toColorName(color)
    case ColorFormat.HEX3:
    case ColorFormat.HEX6:
      if (opacity === 1) return color.hex()
      return color.rgb().toString()
    case ColorFormat.RGBI:
      return color.rgb().toString()
    case ColorFormat.RGBIA:
      return toRGBIString(color, opacity, true)
    case ColorFormat.RGBP:
      return toRGBPString(color, opacity)
    case ColorFormat.RGBPA:
      return toRGBPString(color, opacity, true)
    case ColorFormat.HSL:
      return toHSLString(color, opacity)
    case ColorFormat.HSLA:
      return toHSLString(color, opacity, true)
    default:
      return color.toString()
  }
}
export const toHSV = (value: string) => {
  const color = d3color.color(value)
  if (!color) return null
  return d3hsv.hsv(color)
}

export const hsvToColorString = (
  hsvColor: d3hsv.HSVColor,
  format: ColorFormat | null = null
) => toFormattedColorString(hsvColor.rgb().toString(), format)

export const hsv2hex = (color: SimpleHSV) =>
  d3hsv.hsv(color.h, color.s, color.v).hex()

export const str2simpleHsv = (color: string) => {
  const hsvColor = d3hsv.hsv(color)
  const simpleHSV: SimpleHSV = { h: hsvColor.h, s: hsvColor.s, v: hsvColor.v }
  return simpleHSV
}

export const simpleHSVtoRGB = (color: SimpleHSV) =>
  d3hsv.hsv(color.h, color.s, color.v).rgb()

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
