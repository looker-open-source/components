/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
