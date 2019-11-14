/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { Component } from 'react'
import styled from 'styled-components'
import { hsv } from 'd3-hsv'

import {
  canvasMargin,
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
  limitByRadius,
  translateDiagonal,
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
   * Selected value. Can take on values between 0 and 1, where 0 is black and 1 is maximum brightness.
   */
  value: number
  /**
   * Size, in pixels, of the canvas.
   */
  size: number
  /**
   * Callback for when a color has been changed in color wheel
   */
  onColorChange?: UpdateHueSaturationCallbackType
}

export class ColorWheel extends Component<ColorWheelProps> {
  public static defaultProps = {
    hue: 0,
    saturation: 1,
    size: 100,
    value: 1,
  }

  private isMouseDragging = false
  private colorWheelImage?: ImageData
  private colorWheelCanvas!: HTMLCanvasElement
  private valueCanvas!: HTMLCanvasElement
  private compositeCanvas!: HTMLCanvasElement
  private markerCanvas!: HTMLCanvasElement

  public componentDidMount() {
    this.drawWheel()
    this.drawValueLayer()
    this.drawCompositeCanvas()
    this.drawMouseMarker()
  }

  public componentDidUpdate() {
    this.drawValueLayer()
    this.drawCompositeCanvas()
    this.drawMouseMarker()
  }

  public setColorWheelCanvasRef = (element: HTMLCanvasElement) => {
    this.colorWheelCanvas = element
  }

  public setValueCanvasRef = (element: HTMLCanvasElement) => {
    this.valueCanvas = element
  }

  public setCompositeCanvasRef = (element: HTMLCanvasElement) => {
    this.compositeCanvas = element
  }

  public setMarkerCanvasRef = (element: HTMLCanvasElement) => {
    this.markerCanvas = element
  }

  public render() {
    return (
      <ColorWheelWrapper size={this.props.size}>
        {/* LAYER 1: Hue/Saturation color wheel background */}
        <Canvas
          ref={this.setColorWheelCanvasRef}
          width={this.props.size}
          height={this.props.size}
        />
        {/* LAYER 2: Value layer to adjust color brightness by provided value */}
        <Canvas
          ref={this.setValueCanvasRef}
          width={this.props.size}
          height={this.props.size}
        />
        {/* Layer 3: blend color wheel and value layers to simulate HSV rendering */}
        <Canvas
          ref={this.setCompositeCanvasRef}
          width={this.props.size}
          height={this.props.size}
        />
        {/* Layer 4: Render marker position (selected Hue/Saturation location on color wheel) */}
        <Canvas
          data-testid="mouse-marker"
          ref={this.setMarkerCanvasRef}
          width={this.props.size}
          height={this.props.size}
          onMouseDown={this.mouseDown}
          onMouseMove={this.mouseMove}
          onMouseUp={this.setMouseDragging.bind(this, false)}
          onMouseLeave={this.setMouseDragging.bind(this, false)}
        />
      </ColorWheelWrapper>
    )
  }

  public mouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    this.setMouseDragging(true)
    const canvasCartesian = eventCartesianPosition(this.colorWheelCanvas, event)
    const position = limitByRadius(
      translateDiagonal(-canvasMargin, canvasCartesian),
      this.radius
    )

    this.updateColor(position, this.props.onColorChange)
  }

  public mouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (this.isMouseDragging) {
      const canvasCartesian = eventCartesianPosition(
        this.colorWheelCanvas,
        event
      )
      const position = limitByRadius(
        translateDiagonal(-canvasMargin, canvasCartesian),
        this.radius
      )
      this.updateColor(position, this.props.onColorChange)
    }
  }

  public setMouseDragging = (isDragging: boolean) => {
    this.isMouseDragging = isDragging
  }

  private get radius(): number {
    return this.colorWheelCanvas
      ? canvasRadius(this.colorWheelCanvas, canvasMargin)
      : 0
  }

  private drawValueLayer = () => {
    clearCanvas(this.valueCanvas)
    const ctx = this.valueCanvas.getContext('2d')
    const centerX = this.valueCanvas.width / 2
    const centerY = this.valueCanvas.height / 2
    if (ctx) {
      const { r, g, b } = hsv(0, 0, this.props.value).rgb() // convert greyscale value to rgb
      ctx.beginPath()
      ctx.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false)
      ctx.fillStyle = `rgb(${r},${g},${b})`
      ctx.fill()
      ctx.lineWidth = 3
      ctx.strokeStyle = '#ffffff'
      ctx.stroke()
    }
  }

  private drawCompositeCanvas = () => {
    clearCanvas(this.compositeCanvas)
    const ctx = this.compositeCanvas.getContext('2d')

    if (ctx) {
      ctx.globalCompositeOperation = 'multiply'
      ctx.drawImage(this.colorWheelCanvas, 0, 0)
      ctx.drawImage(this.valueCanvas, 0, 0)
    }
  }

  /**
   * Utility method to draw actual color wheel.
   */
  private drawWheel() {
    const ctx = this.colorWheelCanvas.getContext('2d')

    if (!ctx) return

    const image = this.getColorWheelImage()

    if (image) {
      ctx.putImageData(image, canvasMargin, canvasMargin)
    }

    // Draw a border around circle
    ctx.beginPath()
    ctx.arc(
      this.colorWheelCanvas.width / 2,
      this.colorWheelCanvas.width / 2,
      this.radius,
      0,
      2 * Math.PI,
      false
    )
    ctx.lineWidth = 3
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()
  }

  /**
   * Utility method to get image data to push into canvas DOM element. Acts as a lazy load for image property
   * This method writes to a 2D array that will then get pushed onto the canvas context. Takes parameters
   * for circle radius, any added margins, etc to draw a sweet HSV-based gradient
   */
  private getColorWheelImage(): ImageData | undefined {
    const ctx = this.colorWheelCanvas.getContext('2d')

    if (!this.colorWheelImage && ctx) {
      const colorValue = 1 // render base wheel at full brightness
      this.colorWheelImage = ctx.createImageData(
        diameter(this.radius),
        diameter(this.radius)
      )
      drawColorWheelIntoCanvasImage(
        this.colorWheelImage.data,
        generateColorWheel(this.radius, colorValue)
      )
    }

    return this.colorWheelImage
  }

  /**
   * Utility Method to draw mouse position onto the canvas.
   */
  private drawMouseMarker() {
    clearCanvas(this.markerCanvas)

    const canvasCartesian: CartesianCoordinate = hsv2cartesian(this.radius, {
      h: this.props.hue,
      s: this.props.saturation,
      v: this.props.value,
    })

    const mousePosition = translateDiagonal(canvasMargin, canvasCartesian)

    const ctx = this.markerCanvas.getContext('2d')
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

  /**
   * action called when user clicks on a color.  Will let client know color has been updated.
   */
  private updateColor(
    position?: CartesianCoordinate,
    callback?: UpdateHueSaturationCallbackType
  ) {
    if (callback && position) {
      const color = cartesian2hsv(this.props.value, this.radius, position)
      const updateColorValues = { h: color.h, s: color.s }
      callback(updateColorValues)
    }
  }
}

interface CanvasProps {
  size: number
}

const ColorWheelWrapper = styled.div<CanvasProps>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
`
