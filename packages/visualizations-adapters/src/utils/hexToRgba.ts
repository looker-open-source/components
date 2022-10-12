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
