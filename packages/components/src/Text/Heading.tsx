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

import styled from 'styled-components'
import { ResponsiveValue } from 'styled-system'
import {
  CompatibleHTMLProps,
  FontSizes,
  textTransform,
  TextTransformProps,
} from '@looker/design-tokens'
import { TextBase, TextBaseProps } from './TextBase'
import { TextVariantProps, textVariant } from './text_variant'
import { TruncateProps, truncate } from './truncate'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends TextBaseProps,
    TextTransformProps,
    TextVariantProps,
    TruncateProps,
    Omit<CompatibleHTMLProps<HTMLHeadingElement>, 'wrap'> {
  /** Heading level from h1-h6
   * @default: 'h2'
   */
  as?: HeadingLevels
}

const headingLevelFontSize = (props: HeadingProps) => {
  switch (props.as) {
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

const headingLineHeight = (props: HeadingProps): ResponsiveValue<FontSizes> =>
  props.fontSize ? props.fontSize : headingLevelFontSize(props)

export const Heading = styled(TextBase).attrs((props: HeadingProps) => ({
  fontSize: props.fontSize || headingLevelFontSize(props),
  lineHeight: props.lineHeight || headingLineHeight(props),
}))<HeadingProps>`
  ${textTransform}
  ${textVariant}
  ${truncate}
`

Heading.defaultProps = { as: 'h2', fontWeight: 'normal', variant: 'default' }
