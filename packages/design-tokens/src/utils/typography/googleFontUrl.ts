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

import type { Theme } from '../../theme'
interface GoogleFontSpecification {
  family: string
  /**
   * Include italic faces
   * @default true
   */
  italic?: boolean
  weights: number[]
}

const googleFontsBaseUrl = 'https://fonts.googleapis.com/css2'

export const googleFontParam = ({
  family,
  italic = true,
  ...font
}: GoogleFontSpecification) => {
  let uri = `${family.replace(/"/g, '').replace(/ /g, '+')}:`

  let weights = font.weights.map(weight => `0,${weight}`)
  if (italic) {
    const italicizedWeights = font.weights.map(weight => `1,${weight}`)
    weights = [...weights, ...italicizedWeights]
    uri += 'ital,'
  }

  uri += `wght@${weights.join(';')}`

  return uri
}

export const googleFontUrl = (theme: Theme) => {
  const url = new URL(googleFontsBaseUrl)

  const weights = Object.values(theme.fontWeights)
  const fonts: GoogleFontSpecification[] = Object.values(theme.fonts).map(
    family => {
      return {
        family: family.split(',')[0].replace(/'/g, ''),
        weights,
      }
    }
  )

  const search = fonts.map(font => `family=${googleFontParam(font)}`)
  search.push('display=swap')
  url.search = search.join('&')

  return url.toString()
}
