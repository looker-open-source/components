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

import { mix, rgba } from 'polished'
import { BlendColors, SpecifiableColors } from '../../system/color'
import { tintOrShadeUiColor } from './tintOrShadeUiColor'

const textBlends = [30, 40, 60, 70, 80, 100]
export const uiBlends = [4, 12, 20, 30, 85]

export const uiTransparencyBlend = (color: string, level: number) =>
  rgba(color, uiBlends[level] / 100)

export const mixColors = (
  mixAmount: number,
  foreground: string,
  background: string
) => {
  return mix(mixAmount / 100, foreground, background)
}

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
