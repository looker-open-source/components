import * as React from 'react'

import {
  canvasRadius,
  clearCanvas,
  drawColorWheelIntoCanvasImage,
  eventCartesianPosition,
} from './canvas_utils'

import {
  cartesian2hsv,
  generateColorWheel,
  hsv2cartesian,
  HueSaturation,
} from './color_wheel_utils'

import {
  CartesianCoordinate,
  diameter,
  isInCircle,
  translateCoordinate,
} from './math_utils'

type UpdateHueSaturationCallbackType = (color: HueSaturation) => void

interface ColorWheelProps {
  /**
   * Selected hue. Can take on values between 0 and 360
   */
  hue: number
  /**
   * Selected saturation. Can take on values between 0 and 1
   */
  saturation: number
  /**
   * Selecteed value. Can take on values between 0 and 1
   */
  value: number
  /**
   * Internal margin in canvas
   */
  margin: number
  /**
   * Size, in pixels, of the canvas.
   */
  size: number
  /**
   * Callback for when a color has been changed in color wheel
   */
  onColorChange?: UpdateHueSaturationCallbackType
}

export class ColorWheel extends React.Component<ColorWheelProps> {
  public static defaultProps = {
    hue: 0,
    margin: 5,
    saturation: 1,
    size: 100,
    value: 1,
  }

  private canvas!: HTMLCanvasElement
  private mouseMoving: boolean = false
  private image?: ImageData

  public componentDidMount() {
    this.updateCanvas()
  }

  public componentDidUpdate(previousProps: ColorWheelProps) {
    if (previousProps.value !== this.props.value) {
      this.invalidateImage()
    }

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

  public mouseDown = (event: any) => {
    const canvasCartesian = eventCartesianPosition(this.canvas, event)
    const position = translateCoordinate(-this.props.margin, canvasCartesian)

    if (isInCircle(position, canvasRadius(this.canvas, this.props.margin))) {
      this.mouseMoving = true
      this.updateColor(this.canvas, position, this.props.onColorChange)
    }
  }

  public mouseMove = (event: any) => {
    if (this.mouseMoving) {
      const canvasCartesian = eventCartesianPosition(this.canvas, event)
      const position = translateCoordinate(-this.props.margin, canvasCartesian)
      if (isInCircle(position, canvasRadius(this.canvas, this.props.margin))) {
        this.updateColor(this.canvas, position, this.props.onColorChange)
      }
    }
  }

  public mouseUp = () => {
    this.mouseMoving = false
  }

  private updateCanvas() {
    const position = hsv2cartesian(
      canvasRadius(this.canvas, this.props.margin),
      {
        h: this.props.hue,
        s: this.props.saturation,
        v: this.props.value,
      }
    )

    this.renderWheel(
      this.canvas,
      translateCoordinate(this.props.margin, position)
    )
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
  private drawWheel(canvas: HTMLCanvasElement) {
    const radius = canvasRadius(canvas, this.props.margin)
    const ctx = canvas.getContext('2d')!
    const image = this.getImage(canvas, ctx)

    if (image) {
      ctx.putImageData(image, this.props.margin, this.props.margin)
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
      const radius = canvasRadius(canvas, this.props.margin)
      this.image = ctx.createImageData(diameter(radius), diameter(radius))
      drawColorWheelIntoCanvasImage(
        this.image.data,
        generateColorWheel(radius, this.props.value)
      )
    }

    return this.image
  }

  /**
   * Utility Method to draw mouse position onto the canvas.
   */
  private drawMouse(
    canvas: HTMLCanvasElement,
    mousePosition?: CartesianCoordinate
  ) {
    const ctx = canvas.getContext('2d')
    if (ctx && mousePosition) {
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
      clearCanvas(canvas)
      this.drawWheel(canvas)
      this.drawMouse(canvas, mousePosition)
    }
  }

  /**
   * action called when user clicks on a color.  Will let client know color has been updated.
   */
  private updateColor(
    canvas: HTMLCanvasElement,
    position?: CartesianCoordinate,
    callback?: UpdateHueSaturationCallbackType
  ) {
    const ctx = canvas.getContext('2d')
    if (callback && ctx && position) {
      const color = cartesian2hsv(
        this.props.value,
        canvasRadius(canvas, this.props.margin),
        position
      )

      callback({ h: color.h, s: color.s })
    }
  }
}
