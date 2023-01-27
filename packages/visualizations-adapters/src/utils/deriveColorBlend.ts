/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { hsv } from 'd3-hsv'
import { DEFAULT_SERIES_COLORS } from '.'

/**
 * Utility for selecting base value, fallback value, or default value.
 * @param v1 base value
 * @param v2 fallback value
 * @returns
 *    v1 when base value is a valid number
 *    v2 when base value is NaN and fallback value is a valid number
 *    defaults to 0 when base and fallback values are NaN
 */
const fallbackVal = (v1: number, v2: number): number => {
  if (isNaN(v1)) {
    return fallbackVal(v2, 0)
  }

  return v1
}

/**
 * Utility mixes to colors together in a provided amount of steps
 * @param baseColor initial color (hex code)
 * @param targetColor color (hex code) to blend with baseColor
 * @param steps how many color stops to blend from base to target color
 * @returns an array of hex codes
 */
export const deriveColorBlend = (
  baseColor: string = DEFAULT_SERIES_COLORS[0],
  targetColor: string = DEFAULT_SERIES_COLORS[1],
  steps = 5
) => {
  const colorStops = Math.max(steps - 1, 1) // use Math.max to prevent division by 0 errors

  const baseHSV = hsv(baseColor)
  const targetHSV = hsv(targetColor)

  const baseHue = fallbackVal(baseHSV.h, targetHSV.h)
  const targetHue = fallbackVal(targetHSV.h, baseHSV.h)

  const baseSat = fallbackVal(baseHSV.s, targetHSV.s)
  const targetSat = fallbackVal(targetHSV.s, baseHSV.s)

  const { v: baseVal } = baseHSV
  const { v: targetVal } = targetHSV

  const hPerStep = (targetHue - baseHue) / colorStops
  const sPerStep = (targetSat - baseSat) / colorStops
  const vPerStep = (targetVal - baseVal) / colorStops

  return new Array(steps).fill('').map((_, i) => {
    return hsv(
      baseHue + hPerStep * i,
      baseSat + sPerStep * i,
      baseVal + vPerStep * i
    ).hex()
  })
}
