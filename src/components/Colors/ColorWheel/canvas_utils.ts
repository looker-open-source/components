import { CartesianCoordinate } from './math_utils'

/**
 * Returns a radius for a given canvas element that has a given margin on all sides.
 */
export const canvasRadius = (
  canvas: HTMLCanvasElement,
  margin: number
): number => (canvas.width - 2 * margin) / 2

/**
 * Utility that translates an event inside a Canvas element into a cartesian coordinate
 */
export const eventCartesianPosition = (
  canvas: HTMLCanvasElement,
  event: any
): CartesianCoordinate => ({
  x: event.clientX - canvas.getBoundingClientRect().left,
  y: event.clientY - canvas.getBoundingClientRect().top,
})
