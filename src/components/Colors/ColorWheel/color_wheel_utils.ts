import { hsv } from 'd3-hsv'
import {
  cartesian2polar,
  CartesianCoordinate,
  deg2rad,
  diameter,
  polar2cartesian,
  PolarCoordinate,
  rad2deg,
  scaleRadius,
  translateCoordinate,
} from './math_utils'

export interface HueSaturation {
  h: number
  s: number
}

export interface SimpleHSV extends HueSaturation {
  v: number
}

export const whiteHSV = () => polar2hsv(1, 0, { angle: 0, radius: 0 })

export const mappableArray = (size: number) => Array(size).fill(0)

export const hsv2polar = (color: SimpleHSV): PolarCoordinate => ({
  angle: deg2rad(color.h),
  radius: color.s,
})

export const polar2hsv = (
  brightness: number,
  radius: number,
  coord: PolarCoordinate
): SimpleHSV =>
  [coord]
    .map(c => scaleRadius(1 / radius, c))
    .map(c => ({ h: rad2deg(c.angle), s: c.radius, v: brightness }))[0]

export const cartesian2hsv = (
  brightness: number,
  radius: number,
  coord: CartesianCoordinate
): SimpleHSV =>
  [coord]
    .map(c => translateCoordinate(-radius, c))
    .map(cartesian2polar)
    .map(
      c => (c.radius < radius ? polar2hsv(brightness, radius, c) : whiteHSV())
    )[0]

export const hsv2cartesian = (
  radius: number,
  color: SimpleHSV
): CartesianCoordinate =>
  [color]
    .map(hsv2polar)
    .map(coord => scaleRadius(radius, coord))
    .map(polar2cartesian)
    .map(coord => translateCoordinate(radius, coord))[0]

/**
 * Generate a 2d represenrtation of a color wheel.
 */
export const generateColorWheel = (
  radius: number,
  brightness: number
): SimpleHSV[][] =>
  /* tslint:disable-next-line:no-shadowed-variable */
  mappableArray(diameter(radius)).map((_, x) =>
    /* tslint:disable-next-line:no-shadowed-variable */
    mappableArray(diameter(radius)).map((_, y) =>
      cartesian2hsv(brightness, radius, { x, y })
    )
  )

/**
 * Stateful function that draws color wheel pixels into provided array
 */
export const drawColorWheelIntoCanvasImage = (
  image: Uint8ClampedArray,
  data: SimpleHSV[][]
) => {
  data.forEach((row, x) => {
    row.forEach((val, y) => {
      const pixelWidth = 4
      const index = (x + y * row.length) * pixelWidth

      const rgbColor = hsv(val.h, val.s, val.v).rgb()

      // Each pixel takes up 4 elements in 2D array (modeled as a 1D array), for r,g,b,a channels.
      image[index] = rgbColor.r
      image[index + 1] = rgbColor.g
      image[index + 2] = rgbColor.b

      // Currently hardcoding alpha channel to be completely opaque.
      image[index + 3] = rgbColor.opacity * 255
    })
  })
}
