import { hsv } from 'd3-hsv'
import * as React from 'react'
import { SimpleHSV } from './color_wheel_utils'
import { CartesianCoordinate, translate } from './math_utils'

/**
 * Default margin for canvas margin so we can easily show mouse cursor as well.
 */
export const canvasMargin = 5

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
  event: React.MouseEvent<HTMLCanvasElement>
): CartesianCoordinate => ({
  x: translate(-canvas.getBoundingClientRect().left, event.clientX),
  y: translate(-canvas.getBoundingClientRect().top, event.clientY),
})

/**
 * Stateful function that clears canvas context
 */
export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')!
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

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
