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

export const mappableArray = (size: number) => Array(size).fill(0)

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
    .map(c => translateDiagonal(-radius, c))
    .map(cartesian2polar)
    .map(c => (c.radius < radius ? { coord: c, brightness } : white()))
    .map(pb => scalePBRadius(1 / radius, pb))
    .map(polarbrightness2hsv)[0]

export const hsv2cartesian = (
  radius: number,
  color: SimpleHSV
): CartesianCoordinate =>
  [color]
    .map(hsv2polar)
    .map(coord => scaleRadius(radius, coord))
    .map(polar2cartesian)
    .map(coord => translateDiagonal(radius, coord))[0]

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
