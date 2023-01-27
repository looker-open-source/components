/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * Set a static marker glyph size for use in line, area, and scatter.
 * Calibrated to the line_width value
 *
 * @param data line width to scale the marker size
 * @returns a number
 */

export const getDefaultGlyphSize = (line_width: number) => {
  return Math.round(Math.pow(line_width, 2)) + 20
}
