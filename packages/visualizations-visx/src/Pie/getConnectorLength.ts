/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { pointRadial } from 'd3-shape'
const LABEL_OFFSET = 10

/**
 * Utility function calculates the radial X/Y position used for Visx's Annotation component.
 *
 * @param angle the angle (in radians) associated with the arc to be labeled
 * @param outerRadius the radius (in pixels) of the pie chart
 * @returns
 */

export const getConnectorLength = (angle: number, outerRadius: number) => {
  // get the connector anchor position
  const [_, connectorY] = pointRadial(angle, outerRadius)

  // calculate how far from center line the label is rendered on the y axis
  // 0% indicates that it is vertically centered in the Pie.
  // 100% indicates that it is at the top or bottom of the Pie.
  const yPosPercent = Math.abs(connectorY / outerRadius)

  // lengthen connector at the upper or lower bounds of the circle to minimize text collisions
  const connectorLength =
    Math.pow(1.15, Math.exp(yPosPercent * 3.37)) + LABEL_OFFSET

  return connectorLength
}
