export interface CartesianCoordinate {
  x: number
  y: number
}

export interface PolarCoordinate {
  radius: number
  angle: number
}

/**
 * Converts cartesian (x,y) coordinates to polar (radius, angle) coordinates.
 */
export const cartesian2polar = (
  coord: CartesianCoordinate
): PolarCoordinate => ({
  angle: Math.atan2(coord.y, coord.x),
  radius: Math.sqrt(coord.x * coord.x + coord.y * coord.y),
})

/**
 * Converts polar coordinates (radius, angle) into cartesian coordinates (x,y).
 */
export const polar2xy = (
  radius: number,
  angle: number
): CartesianCoordinate => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle),
})

/**
 * Returns the diameter given a radius
 */
export const diameter = (radius: number): number => 2 * radius

/**
 * Utility used to translate a a number by a value
 */
export const translate = (by: number, val: number): number => val + by

/**
 * Utility used to translate both the x and y of a coordinate by a value.
 */
export const translateCoordinate = (
  by: number,
  coordinate: CartesianCoordinate
) => ({
  x: translate(by, coordinate.x),
  y: translate(by, coordinate.y),
})

/**
 * Radians in [-n, n] range. Returns degrees in [0, 360] range.
 */
export const rad2deg = (rad: number): number => (rad / (2 * Math.PI)) * 360

/**
 * Degrees in [0, 360].  Returns radians in [-n, n] range.
 */
export const deg2rad = (angle: number): number => angle * (Math.PI / 180)

/**
 * Utility that returns a boolean indicating if a given cartesian coordinate is within a circle of radius
 * r centered at (0,0).
 */
export const isInCircle = (
  position: CartesianCoordinate,
  radius: number
): boolean =>
  cartesian2polar({ x: position.x - radius, y: position.y - radius }).radius <
  radius
