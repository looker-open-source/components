/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import range from 'lodash/range'
import {
  cartesian2polar,
  CartesianCoordinate,
  deg2rad,
  diameter,
  polar2cartesian,
  PolarCoordinate,
  rad2deg,
  scaleRadius,
  translateDiagonal,
} from './math_utils'

export interface HueSaturation {
  h: number
  s: number
}

export interface SimpleHSV extends HueSaturation {
  v: number
}

export interface PolarBrightness {
  brightness: number
  coord: PolarCoordinate
}

export const white = (): PolarBrightness => ({
  brightness: 1,
  coord: { angle: 0, radius: 0 },
})

export const hsv2polar = (color: SimpleHSV): PolarCoordinate => ({
  angle: deg2rad(color.h),
  radius: color.s,
})

export const polarbrightness2hsv = (pb: PolarBrightness): SimpleHSV => ({
  h: rad2deg(pb.coord.angle),
  s: pb.coord.radius,
  v: pb.brightness,
})

export const scalePBRadius = (
  by: number,
  pb: PolarBrightness
): PolarBrightness => ({ ...pb, coord: scaleRadius(by, pb.coord) })

export const cartesian2hsv = (
  brightness: number,
  radius: number,
  coord: CartesianCoordinate
): SimpleHSV =>
  [coord]
    .map((c) => translateDiagonal(-radius, c))
    .map(cartesian2polar)
    .map((c) => (c.radius <= radius ? { brightness, coord: c } : white()))
    .map((pb) => scalePBRadius(1 / radius, pb))
    .map(polarbrightness2hsv)[0]

export const hsv2cartesian = (
  radius: number,
  color: SimpleHSV
): CartesianCoordinate =>
  [color]
    .map(hsv2polar)
    .map((coord) => scaleRadius(radius, coord))
    .map(polar2cartesian)
    .map((coord) => translateDiagonal(radius, coord))[0]

/**
 * Generate a 2d representation of a color wheel.
 */
export const generateColorWheel = (
  radius: number,
  brightness: number
): SimpleHSV[][] =>
  range(diameter(radius)).map((_, x) =>
    range(diameter(radius)).map((_$, y) =>
      cartesian2hsv(brightness, radius, { x, y })
    )
  )
