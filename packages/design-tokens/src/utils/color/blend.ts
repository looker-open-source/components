/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { mix, rgba, getLuminance } from 'polished'
import { css } from 'styled-components'
import { BlendColors, SpecifiableColors } from '../../system/color'
import { tintOrShadeUiColor } from './tintOrShadeUiColor'
import { scaleMixAmount } from './scaleMixAmount'

const textBlends = [30, 40, 60, 70, 80, 100]
export const uiBlends = [4, 12, 20, 30, 85]
type UIColorLevels = 1 | 2 | 3 | 4 | 5 | 6

export const blendColorTransparency = (color: string, level: UIColorLevels) =>
  rgba(color, uiBlends[level - 1] / 100)

export const uiTransparencyBlend = (level: UIColorLevels) =>
  css`
    ${({ theme: { colors } }) => blendColorTransparency(colors.text, level)}
  `

export const mixColors = (
  mixAmount: number,
  foreground: string,
  background: string
) => {
  return mix(mixAmount / 100, foreground, background)
}

export const mixScaledColors = (
  mixAmount: number,
  foreground: string,
  background: string
) => {
  const colorLuminance = getLuminance(background)

  const lumnisanceScale = {
    lower: 1.3,
    lowest: 2.5,
  }

  let adjustment = mixAmount
  if (colorLuminance < 0.16 && colorLuminance > 0.08) {
    adjustment = lumnisanceScale.lower
  } else if (colorLuminance < 0.08) {
    adjustment = lumnisanceScale.lowest
  }

  const mixAdjustment =
    colorLuminance > 0.3 ? mixAmount : scaleMixAmount(mixAmount, adjustment)
  return mix(mixAdjustment / 100, foreground, background)
}

export const intentUIBlend = (intent: string, level: UIColorLevels) => css`
  ${({ theme: { colors } }) =>
    mixColors(uiBlends[level], colors[intent], colors.background)}
`

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const generateBlendColors = (colors: SpecifiableColors): BlendColors => {
  const { background, text } = colors
  return {
    ui1: tintOrShadeUiColor(uiBlends[0], background),
    ui2: tintOrShadeUiColor(uiBlends[1], background),
    ui3: tintOrShadeUiColor(uiBlends[2], background),
    ui4: tintOrShadeUiColor(uiBlends[3], background),
    ui5: tintOrShadeUiColor(uiBlends[4], background),

    text0: mixColors(textBlends[5], text, background),
    text1: mixColors(textBlends[5], text, background),
    text2: mixColors(textBlends[4], text, background),
    text3: mixColors(textBlends[3], text, background),
    text4: mixColors(textBlends[2], text, background),
    text5: mixColors(textBlends[1], text, background),
    text6: mixColors(textBlends[0], text, background),
  }
}
