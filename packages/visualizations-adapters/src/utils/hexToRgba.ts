/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import chunk from 'lodash/chunk'

/**
 * Utility function converts hex colors to RGBA.
 * @param h hex code
 * @returns string (color in rgb)
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  if (opacity < 0 || opacity > 1) {
    throw new Error(
      `Invalid opacity value: ${opacity}. Please provide a decimal number between 0 and 1.`
    )
  }

  if (hex[0] === '#' && (hex.length === 4 || hex.length === 7)) {
    // remove pound sign from beginning of hex string
    return hexToRgba(hex.slice(1), opacity)
  }

  if (hex.length === 3 || hex.length === 6) {
    const chunkLength = hex.length === 3 ? 1 : 2

    const [r, g, b] = chunk(hex, chunkLength).map((chunk) => {
      // for 3 digit hex codes double the values (FFF => FFFFFF)
      // otherwise just join string values
      const color = chunkLength === 1 ? chunk[0] + chunk[0] : chunk.join('')

      return `0x${color}`
    })

    // prepend each color with `+` to convert from base16 string to numeric value
    return `rgba(${+r}, ${+g}, ${+b}, ${String(opacity)})`
  } else {
    throw new Error(`Invalid hexadecimal color code: ${hex}`)
  }
}
