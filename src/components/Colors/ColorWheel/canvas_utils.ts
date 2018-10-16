import { CartesianCoordinate, translate } from './math_utils'

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
  x: translate(-canvas.getBoundingClientRect().left, event.clientX),
  y: translate(-canvas.getBoundingClientRect().top, event.clientY),
})

export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')!
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}
