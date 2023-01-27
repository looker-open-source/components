/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
