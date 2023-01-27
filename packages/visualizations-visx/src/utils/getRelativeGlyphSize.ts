/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

// This value is specific to Visx chart rendering logic.
// I have no idea what the unit is.
const MAX_GLYPH_SIZE = 8000

/**
 * Set a glyph size based on data point and min/max values.
 * Relevant for Scatter charts.
 *
 * @param data the value to render
 * @param dataMax the max possible value
 * @param dataMin the min possible value
 * @returns a number no greater than MAX_GLYPH_SIZE
 */

export const getRelativeGlyphSize = (
  data: number,
  dataMin: number,
  dataMax: number
) => {
  const dataRange = dataMax - dataMin
  // add 1% to the relative size calculation so that there are no zero-sized points
  const sizePercent = (data - dataMin) / dataRange + 0.01
  return Math.round(MAX_GLYPH_SIZE * sizePercent)
}
