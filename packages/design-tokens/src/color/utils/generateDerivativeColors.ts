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

import { textBlends } from '../blendPoints'
import type { BlendColors, DerivativeColors, SpecifiableColors } from '../types'
import { accentBlendScale, generateInteractive } from './generateStatefulColors'
import { mixColors } from './mixColors'
import { mixScaledColors } from './mixScaledColors'

export const generateDerivativeColors = (
  {
    background,
    inform,
    link,
    positive,
    text,
    warn,
    title,
    body,
  }: SpecifiableColors,
  { text5 }: BlendColors
): DerivativeColors => {
  const accents = {
    informAccent: mixScaledColors(accentBlendScale, inform, background),
    positiveAccent: mixScaledColors(accentBlendScale, positive, background),
    warnAccent: mixScaledColors(accentBlendScale, warn, background),
  }

  return {
    body: body || text5,
    field: background,
    inverse: text,
    inverseOn: background,
    linkInteractive: generateInteractive(link),
    neutral: mixColors(textBlends[1], text, background),
    title: title || text5,
    ...accents,
  }
}
