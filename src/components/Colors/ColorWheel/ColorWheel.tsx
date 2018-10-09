import { rgb } from 'd3-color'
import { hsv, HSVColor } from 'd3-hsv'
import * as React from 'react'
import { styled } from '../../../style'

interface ColorWheelProps {
  /**
   * Determines what the initial color to component should be.
   */
  color?: string

  size?: number

  onColorChange?: (color: string) => void
}

interface ColorWheelState {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
}

interface CartesianCoordinate {
  x: number
  y: number
}

interface PolarCoordinate {
  radius: number
  angle: number
}

/**
 * Converts cartesian (x,y) coordinates to polar (radius, angle) coordinates.
 */
const xy2polar = (x: number, y: number): PolarCoordinate => {
  return {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x * x + y * y),
  }
}

/**
 * Converts polar coordinates (radius, angle) into cartesian coordinates (x,y).
 */
const polar2xy = (radius: number, angle: number): CartesianCoordinate => {
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  }
}

/**
 * Radians in [-n, n] range. Returns degrees in [0, 360] range.
 */
const rad2deg = (rad: number): number => ((rad + Math.PI) / (2 * Math.PI)) * 360

/**
 * Degrees in [0, 360].  Returns radians in [-n, n] range.
 */
const deg2rad = (angle: number): number => angle * (Math.PI / 180) + Math.PI

/**
 * Utility to determine if color is valid or not.
 */
const isValidColor = (color?: string): boolean =>
  color ? rgb(color).displayable() : false

/**
 * Returns a radius for a given canvas element
 */
const canvasRadius = (canvas: HTMLCanvasElement, margin: number): number =>
  (canvas.width - 2 * margin) / 2

/**
 * Utility that returns a boolean indicating if a given cartesian coordinate is within a circle of radius
 * r centered at (0,0).
 */
const isInCircle = (position: CartesianCoordinate, radius: number): boolean =>
  xy2polar(position.x - radius, position.y - radius).radius < radius

/**
 * Utility that translates a mouse event inside a Canvas element into a cartesian coordinate
 */
const getMousePosition = (
  canvas: HTMLCanvasElement,
  mouseEvent: any
): CartesianCoordinate => {
  const rect = canvas.getBoundingClientRect()
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top,
  }
}

class InternalColorWheel extends React.Component<
  ColorWheelProps,
  ColorWheelState
> {
  private canvas!: HTMLCanvasElement
  private margin: number = 2
  private mouseMoving: boolean = false
  private mousePosition?: CartesianCoordinate
  // private brightness: number = 100
  private image?: ImageData

  public componentDidMount() {
    this.updateCanvas()
  }

  public componentDidUpdate() {
    this.updateCanvas()
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

  public setCanvasRef = (element: HTMLCanvasElement) => {
    this.canvas = element
  }

  /**
   * Mousedown event for canvas to bind against. Starts a small state machine
   * so we can track mouse movement.
   */
  public mouseDown = (event: any) => {
    const position = getMousePosition(this.canvas, event)

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
      const position = getMousePosition(this.canvas, event)
      if (isInCircle(position, canvasRadius(this.canvas, this.margin))) {
        this.mousePosition = position
        this.renderWheel(this.canvas, position)
      }
    }
  }

  /**
   * mouseup event.  Stop tracking mouse.
   */
  public mouseUp = () => {
    this.mouseMoving = false
    this.updateColor()
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
      const data = this.image.data

      for (let x = -radius; x < radius; x++) {
        for (let y = -radius; y < radius; y++) {
          const polar = xy2polar(x, y)

          // Figure out the starting index of this pixel in the image data array.
          const rowLength = 2 * radius
          const adjustedX = x + radius
          const adjustedY = y + radius
          const pixelWidth = 4
          const index = (adjustedX + adjustedY * rowLength) * pixelWidth

          const hue = rad2deg(polar.angle)
          const saturation = polar.radius / radius
          let rgbColor = rgb('transparent')

          // This will draw the circle. Anything outside circle will be drawn white.
          if (polar.radius < radius) {
            rgbColor = hsv(hue, saturation, 100 / 100).rgb()
          }

          // Each pixel takes up 4 elements in 2D array (modeled as a 1D array), for r,g,b,a channels.
          data[index] = rgbColor.r
          data[index + 1] = rgbColor.g
          data[index + 2] = rgbColor.b

          // Currently hardcoding alpha channel to be completely opaque.
          data[index + 3] = rgbColor.opacity * 255
        }
      }
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
