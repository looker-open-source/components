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

import type { LegendTypes } from '@looker/visualizations-adapters'
import { PIE_SLICE_ZOOM } from './pieConstants'
import { getConnectorLength } from './getConnectorLength'

type GetChartGeometryArgs = {
  /**
   *  width passed to the Pie component
   */
  width: number
  /**
   * height passed to the Pie component
   */
  height: number
  /**
   * labelWidth white space set aside within svg to render labels
   */
  labelWidth: number
  /**
   * legendType 'labels' | 'legend'
   */
  legendType?: LegendTypes
}

/**
 * Helper function calculates the values required to render the pie chart
 * SVG element given the provided data and config
 *
 * @returns
 *   canvasW: canvas width;
 *   canvasH: canvas height;
 *   pieCenterX: coordinate for the center point of the pie;
 *   pieCenterY: coordinate for the center point of the pie;
 *   outerRadius: radius of the pie given the available space within the canvas;
 *
 */

export const getChartGeometry = ({
  width,
  height,
  labelWidth,
  legendType = 'legend',
}: GetChartGeometryArgs) => {
  const minChartSize = legendType === 'legend' ? 50 : 350

  // get the connector length at the top position (value for outer radius argument doesn't matter)
  const maxConnectorLength = getConnectorLength(0, 1) * 2

  // define a square based on whatever is greater between width & height
  const maxDimension = Math.max(width, height, minChartSize)

  // define how much of the pie element to preserve for "pizza crust" hover effect
  const hoverMargin = Math.ceil(maxDimension - maxDimension / PIE_SLICE_ZOOM)

  // middle point for pie
  const canvasCenter = (maxDimension - hoverMargin) / 2

  // when legend type is "labels", set aside enough white space to render label
  // content within the svg area
  const padding =
    legendType === 'labels' ? Math.max(labelWidth, maxConnectorLength) : 0

  // size the pie chart based on canvas size, minus the required white space
  const outerRadius = canvasCenter - hoverMargin - padding

  return {
    canvasW: maxDimension,
    canvasH: maxDimension - padding, // less vertical space required when legend type is "labels"
    pieCenterX: canvasCenter,
    pieCenterY: canvasCenter - padding / 2,
    outerRadius,
  }
}
