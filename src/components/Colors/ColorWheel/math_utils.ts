export interface CartesianCoordinate {
  x: number
  y: number
}

export interface PolarCoordinate {
  radius: number
  angle: number
}

export const cartesian2polar = (
  coord: CartesianCoordinate
): PolarCoordinate => ({
  angle: Math.atan2(coord.y, coord.x),
  radius: Math.sqrt(coord.x * coord.x + coord.y * coord.y),
})

export const polar2cartesian = (
  coord: PolarCoordinate
): CartesianCoordinate => ({
  x: coord.radius * Math.cos(coord.angle),
  y: coord.radius * Math.sin(coord.angle),
})

export const rad2deg = (rad: number): number => (rad / (2 * Math.PI)) * 360
export const deg2rad = (angle: number): number => angle * (Math.PI / 180)
export const diameter = (radius: number): number => 2 * radius
export const translate = (by: number, val: number): number => val + by

/**
 * Utility used to translate a coordinate on the sloping down to the right diagonal.
 */
export const translateCoordinate = (
  by: number,
  coordinate: CartesianCoordinate
) => ({
  x: translate(by, coordinate.x),
  y: translate(by, coordinate.y),
})

export const scaleRadius = (by: number, coord: PolarCoordinate) => ({
  ...coord,
  radius: coord.radius * by,
})

/**
 * Utility that returns a boolean indicating if a given cartesian coordinate is within a circle of radius
 * r centered at (r,r).
 */
export const isInCircle = (
  coord: CartesianCoordinate,
  radius: number
): boolean =>
  [coord].map(c => translateCoordinate(-radius, c)).map(cartesian2polar)[0]
    .radius < radius
