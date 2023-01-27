/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { hsv } from 'd3-hsv'
import { DEFAULT_SERIES_COLORS } from '../utils'

const colorTransformations = [
  { h: 0, s: 0, v: 0 }, // unmodified default colors
  { h: 45, s: -0.05, v: 0 }, // pivot 45 degrees
  { h: 90, s: 0, v: 0 }, // pivot 90 degrees
  { h: -60, s: 0, v: 0 }, // pivot -60 degrees
  { h: -90, s: 0, v: 0 }, // pivot -90 degrees
  { h: 180, s: 0, v: 0 }, // complementary colors
  { h: 0, s: 0.15, v: 0.15 }, // increase value and saturation by 15%
  { h: 0, s: 0.15, v: -0.25 }, // decrease value 25%
  { h: 0, s: -0.25, v: -0.25 }, // decrease value and saturation by 25%
  { h: 180, s: -0.25, v: -0.25 }, // complementary colors darkened
]

/**
 * Helper function derives complementary alternate colors from a base set
 * @param baseColors an array of color codes
 * @returns an array of color codes
 */
export const deriveColorPalette = (
  baseColors: string[] = DEFAULT_SERIES_COLORS
) => {
  return colorTransformations.flatMap((t) => {
    const { h: hueDiff, s: satDiff, v: valDiff } = t
    return baseColors.map((color) => {
      const { h, s, v } = hsv(color)
      const newHue = (h + hueDiff) % 360
      const newSat = Math.max(Math.min(s + satDiff, 1), 0)
      const newVal = Math.max(Math.min(v + valDiff, 1), 0)

      return hsv(newHue, newSat, newVal).hex()
    })
  })
}
