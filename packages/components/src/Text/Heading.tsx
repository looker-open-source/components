/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  FontSizes,
  ResponsiveValue,
  textTransform,
  TextTransformProps,
} from '@looker/design-tokens'
import { TextBase, TextBaseProps } from './TextBase'
import { TruncateCSSProps, truncateCSS } from './truncate'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends TextBaseProps,
    TextTransformProps,
    TruncateCSSProps,
    Omit<CompatibleHTMLProps<HTMLHeadingElement>, 'wrap'> {
  /** Heading level from h1-h6
   * @default: 'h2'
   */
  as?: HeadingLevels
}

const headingLevelFontSize = (as: HeadingLevels) => {
  switch (as) {
    case 'h1':
      return 'xxlarge'
    case 'h3':
      return 'large'
    case 'h4':
      return 'medium'
    case 'h5':
      return 'small'
    case 'h6':
      return 'xsmall'
    case 'h2':
    default:
      return 'xlarge'
  }
}

const headingLineHeight = (
  as: HeadingLevels,
  fontSize?: ResponsiveValue<FontSizes>
): ResponsiveValue<FontSizes> => fontSize || headingLevelFontSize(as)

export const Heading = styled(TextBase).attrs<HeadingProps>(
  ({
    as = 'h2',
    color = 'title',
    fontFamily = 'brand',
    fontSize,
    fontWeight = 'normal',
    lineHeight,
  }) => ({
    as,
    color,
    fontFamily,
    fontSize: fontSize || headingLevelFontSize(as),
    fontWeight,
    lineHeight: lineHeight || headingLineHeight(as, fontSize),
  })
)<HeadingProps>`
  ${textTransform}
  ${truncateCSS}
`
