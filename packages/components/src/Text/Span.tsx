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

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  TextTransformProps,
} from '@looker/design-tokens'
import { textTransform } from '@looker/design-tokens'
import type { TextBaseProps } from './TextBase'
import { TextBase } from './TextBase'

export interface SpanProps
  extends TextBaseProps,
    TextTransformProps,
    Omit<CompatibleHTMLProps<HTMLSpanElement>, 'wrap'> {}

/**
 * Outputs a `span` HTML element with specified props.
 *
 * NOTE: Component will inherit all styling from the parent DOM element unless otherwise
 * specified. `line-height` will match the `font-size` if expliclity specified.
 */
export const Span = styled(TextBase).attrs<SpanProps>(
  ({ fontSize, lineHeight }) => ({
    lineHeight: lineHeight || fontSize,
  })
)<SpanProps>`
  ${textTransform}
`
