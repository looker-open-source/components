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

import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'
import { Colors, SpecifiableColors } from '../../system'
import { generateColorAliases } from './aliases'
import { generateBlendColors } from './blend'
import { generateDerivativeColors } from './derivatives'
import { generateStatefulColors } from './stateful'

export const generateColors = (
  themeColors: SpecifiableColors,
  customColors?: Partial<SpecifiableColors>
): Colors => {
  const specifiable = { ...themeColors, ...pickBy(customColors, identity) }

  const blends = generateBlendColors(specifiable)
  const derivatives = generateDerivativeColors(specifiable)
  const statefulColors = generateStatefulColors(specifiable, derivatives)
  const aliases = generateColorAliases(blends)

  return {
    ...specifiable,
    ...derivatives,
    ...blends,
    ...statefulColors,
    ...aliases,
  }
}
