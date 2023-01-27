/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { hsv } from 'd3-hsv'
import type { SimpleHSV } from '../types'

export const stringToSimpleHsv = (color: string): SimpleHSV => {
  let { h, s, v } = hsv(color)
  /**
   * The hsv helper function returns NaN for hueless and saturation-less values
   * like black, white, grey. We will instead send 0 if either value is NaN for use
   * when calculating handle positioning and coloring on the hue slider and saturation preview.
   *
   * 0 is used as a fallback value to mirror MDN's handling of hueless and saturation-less values:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
   */
  if (isNaN(h)) h = 0
  if (isNaN(s)) s = 0

  return { h, s, v }
}
