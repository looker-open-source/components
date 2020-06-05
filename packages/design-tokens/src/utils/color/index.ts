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

import { Colors, CoreColors, SpecifiableColors } from '../../system'
import { defaultIntentColors } from '../../tokens'
import { generateSurfaceColors } from './surface'
import { generateBlendColors } from './blend'
import { generateStatefulColors } from './stateful'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const generateColors = (
  themeColors: Colors,
  colors: Partial<CoreColors>
) => {
  const { background, text, key } = colors

  if (!background && !text && !key) {
    return themeColors
  }

  const coreColors = {
    background: colors.background || themeColors.background,
    text: colors.text || themeColors.text,
    key: colors.key || themeColors.key,
  }

  const specifiableColors: SpecifiableColors = {
    ...coreColors,
    ...generateSurfaceColors(coreColors),
    ...defaultIntentColors,
  }

  const blends = generateBlendColors(specifiableColors)
  const statefulColors = generateStatefulColors(specifiableColors)

  return {
    ...specifiableColors,
    ...blends,
    ...statefulColors,
  }
}
