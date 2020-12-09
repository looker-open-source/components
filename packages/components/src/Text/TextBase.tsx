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

import {
  reset,
  space,
  SpaceProps,
  textColor,
  textDecoration,
  TextDecorationProps,
  TypographyProps,
  shouldForwardProp,
} from '@looker/design-tokens'
import {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontStyle,
  textAlign,
} from 'styled-system'

export interface TextBaseProps
  extends SpaceProps,
    TextDecorationProps,
    TypographyProps {
  color?: string

  /**
   * Should browser insert line breaks within words to prevent text from overflowing its content box
   * @default: false
   */
  breakword?: boolean
}

export const TextBase = styled.span
  .withConfig({ shouldForwardProp })
  .attrs((props: TextBaseProps) => ({
    lineHeight: props.lineHeight || props.fontSize,
  }))<TextBaseProps>`
  ${reset}
  /* fontFamily is handled by reset */
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${textColor}
  ${textDecoration}
  ${({ breakword }) => breakword && 'overflow-wrap: break-word;'}
`

TextBase.defaultProps = { color: 'text' }
