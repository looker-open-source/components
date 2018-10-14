import { hsv } from 'd3-hsv'
import {
  cartesian2polar,
  CartesianCoordinate,
  diameter,
  PolarCoordinate,
  rad2deg,
  translateCoordinate,
} from './math_utils'

export interface SimpleHSV {
  h: number
  s: number
  v: number
}

const mappableArray = (size: number) => Array(size).fill(0)

const hsvPolar = (
  brightness: number,
  radius: number,
  c: PolarCoordinate
): SimpleHSV => ({
  h: rad2deg(c.angle),
  s: c.radius / radius,
  v: brightness / 100,
})

const whiteHSV = (radius: number) =>
  hsvPolar(360, radius, { angle: 0, radius: 0 })

const hsvCartesian = (
  brightness: number,
  radius: number,
  c: CartesianCoordinate
): SimpleHSV => {
  const polar = cartesian2polar(translateCoordinate(-radius, c))
  return polar.radius < radius
    ? hsvPolar(brightness, radius, polar)
    : whiteHSV(radius)
}

/**
 * Generate a 2d represenrtation of a color wheel.
 */
export const generateColorWheel = (
  radius: number,
  brightness: number
): SimpleHSV[][] => {
  if (radius <= 0) {
    return []
  }

  /* tslint:disable-next-line:no-shadowed-variable */
  return mappableArray(diameter(radius)).map((_, x) =>
    /* tslint:disable-next-line:no-shadowed-variable */
    mappableArray(diameter(radius)).map((_, y) =>
      hsvCartesian(brightness, radius, { x, y })
    )
  )
}

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
