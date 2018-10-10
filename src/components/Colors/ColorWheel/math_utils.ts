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
export const xy2polar = (x: number, y: number): PolarCoordinate => ({
  angle: Math.atan2(y, x),
  radius: Math.sqrt(x * x + y * y),
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
 * Radians in [-n, n] range. Returns degrees in [0, 360] range.
 */
export const rad2deg = (rad: number): number => (rad / (2 * Math.PI)) * 360

/**
 * Degrees in [0, 360].  Returns radians in [-n, n] range.
 */
export const deg2rad = (angle: number): number => angle * (Math.PI / 180)

/**
 * Utility used to rotate radians by a full semicircle
 */
export const rotateRad = (rad: number): number => rad + Math.PI

/**
 * Utility that returns a boolean indicating if a given cartesian coordinate is within a circle of radius
 * r centered at (0,0).
 */
export const isInCircle = (
  position: CartesianCoordinate,
  radius: number
): boolean => xy2polar(position.x - radius, position.y - radius).radius < radius
