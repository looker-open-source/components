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

import type {
  LetterSpacingProps,
  FontStyleProps,
  TextAlignProps,
} from 'styled-system'
import type { FontFamilyProps } from './font_families'
import type { FontSizeProps } from './font_sizes'
import type { FontWeightProps } from './font_weights'
import type { LineHeightProps } from './line_heights'

export const densityTarget = '2.25rem' // 36px

export type {
  FontFamilies,
  FontFamilyChoices,
  FontFamilyFallbacks,
  FontFamilyProps,
} from './font_families'
export type { FontSource, FontSources } from './font_sources'
export { fontFamilies } from './font_families'
export type { FontSizes, FontSizeProps, FontSizeRamp } from './font_sizes'
export type {
  FontWeights,
  FontWeightProps,
  FontWeightRamp,
} from './font_weights'
export type {
  LineHeights,
  LineHeightProps,
  LineHeightRamp,
} from './line_heights'
export { textDecoration } from './text_decoration'
export type { TextDecorationProps } from './text_decoration'
export { textTransform } from './text_transform'
export type { TextTransformProps } from './text_transform'

// @TODO - Should we limit TextAlign to subset? (e.g. previous config for `align`)
// export type TextAlignments = 'left' | 'center' | 'right'
// @TODO - Should we add TextDecoration prop?

export interface TypographyProps
  extends FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    LetterSpacingProps,
    FontStyleProps,
    TextAlignProps {}
