/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
