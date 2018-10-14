import { rgb } from 'd3-color'
import { hsv, HSVColor } from 'd3-hsv'
import * as React from 'react'
import { styled } from '../../../style'

import { canvasRadius, eventCartesianPosition } from './canvas_utils'
import { isValidColor } from './color_utils'
import {
  drawColorWheelIntoCanvasImage,
  generateColorWheel,
} from './color_wheel_utils'

import {
  CartesianCoordinate,
  deg2rad,
  isInCircle,
  polar2xy,
} from './math_utils'

interface ColorWheelProps {
  /**
   * Selected hue
   */
  //  hue: number,
  /**
   * Selected saturation
   */
  // saturation: number,
  /**
   * Selecteed value
   */
  // value: number,

  color?: string
  /**
   * Size, in pixels, of the canvas. Will default to 100.
   */
  size?: number
  /**
   * Callback for when a color has been changed in color wheel
   */
  onColorChange?: (color: string) => void
}

class InternalColorWheel extends React.Component<ColorWheelProps> {
  private canvas!: HTMLCanvasElement
  private margin: number = 2
  private mouseMoving: boolean = false
  private mousePosition?: CartesianCoordinate
  private image?: ImageData

  public componentDidMount() {
    this.updateCanvas()
  }

  public componentDidUpdate() {
    this.updateCanvas()
  }

  public setCanvasRef = (element: HTMLCanvasElement) => {
    this.canvas = element
  }

  public render() {
    return (
      <canvas
        ref={this.setCanvasRef}
        onMouseDown={this.mouseDown}
        onMouseMove={this.mouseMove}
        onMouseUp={this.mouseUp}
        width={this.props.size}
        height={this.props.size}
      />
    )
  }

  /**
   * Mousedown event for canvas to bind against. Starts a small state machine
   * so we can track mouse movement.
   */
  public mouseDown = (event: any) => {
    const position = eventCartesianPosition(this.canvas, event)

    if (isInCircle(position, canvasRadius(this.canvas, this.margin))) {
      this.mouseMoving = true
      this.mousePosition = position
      this.renderWheel(this.canvas, position)
    }
  }

  /**
   * mousemove event for canvas to bind against. Continue tracking
   */
  public mouseMove = (event: any) => {
    if (this.mouseMoving) {
      const position = eventCartesianPosition(this.canvas, event)
      if (isInCircle(position, canvasRadius(this.canvas, this.margin))) {
        this.mousePosition = position
        this.renderWheel(this.canvas, position)
      }
    }
  }

  /**
   * Stop tracking mouse.
   */
  public mouseUp = () => {
    this.mouseMoving = false
    this.updateColor()
  }

  private updateCanvas() {
    this.invalidateImage()

    const ctx = this.canvas.getContext('2d')

    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawWheel(this.canvas, ctx)

      const mousePosition = this.colorToMousePositionAndBrightness(
        this.canvas,
        this.props.color
      )
      this.drawMouse(ctx, mousePosition)
    }
  }

  /**
   * Sometimes the image will need to be regenerated (e.g when brightness changes).
   * Call this method to invalidate image to trigger a redraw.
   */
  private invalidateImage() {
    this.image = undefined
  }

  /**
   * Utility method to draw actual color wheel.
   */
  private drawWheel(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    const radius = canvasRadius(canvas, this.margin)
    const image = this.getImage(canvas, ctx)

    if (image) {
      ctx.putImageData(image, 2, 2)
    }

    // Draw a border around circle
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.width / 2, radius, 0, 2 * Math.PI, false)
    ctx.lineWidth = 1
    ctx.strokeStyle = '#FEFEFE'
    ctx.stroke()
  }

  /**
   * Utility method to get image data to push into canvas DOM element. Acts as a lazy load for image property
   * This method writes to a 2D array that will then get pushed onto the canvas context. Takes parameters
   * for circle radius, any added margins, etc to draw a sweet HSV-based gradient
   */
  private getImage(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ): ImageData | null {
    if (!this.image) {
      const radius = canvasRadius(canvas, this.margin)
      this.image = ctx.createImageData(2 * radius, 2 * radius)
      drawColorWheelIntoCanvasImage(
        this.image.data,
        generateColorWheel(radius, 100)
      )
    }

    return this.image
  }

  /**
   * Utility Method to draw mouse position onto the canvas.
   */
  private drawMouse(
    ctx: CanvasRenderingContext2D,
    mousePosition?: CartesianCoordinate
  ) {
    if (mousePosition) {
      const mouseRadius = 4

      ctx.beginPath()
      ctx.arc(
        mousePosition.x,
        mousePosition.y,
        mouseRadius,
        0,
        2 * Math.PI,
        false
      )
      ctx.lineWidth = 3
      ctx.strokeStyle = '#FFFFFF'
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(
        mousePosition.x,
        mousePosition.y,
        mouseRadius - 1,
        0,
        2 * Math.PI,
        false
      )
      ctx.lineWidth = 2
      ctx.strokeStyle = '#000000'
      ctx.stroke()
    }
  }

  private renderWheel(
    canvas: HTMLCanvasElement,
    mousePosition?: CartesianCoordinate
  ) {
    const ctx = canvas.getContext('2d')

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      this.drawWheel(canvas, ctx)
      this.drawMouse(ctx, mousePosition)
    }
  }

  /**
   * Utility to turn the mouse position into a valid hex code.
   */
  private getColorWheelColorHex(
    canvas: HTMLCanvasElement,
    mousePosition?: CartesianCoordinate
  ): string {
    const allowBrightnessChange = true
    const ctx = canvas.getContext('2d')
    let retVal = this.props.color || ''

    if (ctx && mousePosition) {
      const data = ctx.getImageData(mousePosition.x, mousePosition.y, 1, 1).data

      if (allowBrightnessChange) {
        retVal = rgb(data[0], data[1], data[2]).hex()
      }
    }

    return retVal
  }

  /**
   * action called when user clicks on a color.  Will let client know color has been updated.
   */
  private updateColor() {
    if (this.props.onColorChange) {
      const color = this.getColorWheelColorHex(this.canvas, this.mousePosition)
      this.props.onColorChange(color)
    }
  }

  private colorToMousePositionAndBrightness(
    canvas: HTMLCanvasElement,
    color?: string
  ) {
    if (color && isValidColor(color)) {
      const radius = canvasRadius(canvas, this.margin)

      const hsvColor: HSVColor = hsv(color)
      const h = isNaN(hsvColor.h) ? 0 : hsvColor.h
      const s = isNaN(hsvColor.s) ? 0 : hsvColor.s
      const coord = polar2xy(s * radius, deg2rad(h))

      return {
        x: coord.x + radius + this.margin,
        y: coord.y + radius + this.margin,
      }

      // this.brightness = hsvColor.v * 100
    }
    // else {

    //   this.brightness = 100
    //   this.mousePosition = null
    // }
    return undefined
  }
}

export const ColorWheel = styled<ColorWheelProps>(InternalColorWheel)`
  background-color: ${props => props.color};
`
