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
import type { SpanProps } from './Span'
import { Span } from './Span'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextProps extends SpanProps {}

/**
 * Outputs a `span` HTML element with specified props.
 *
 * NOTE: This component has a historic "quirk" where the `font-size` defaults to medium rather
 * than simply inheriting it's size from the parent DOM element (what one might expect of a
 * "normal" inline element.  `line-height` will match the `font-size` (`medium` unless  otherwise specified) as well.
 *
 * @deprecated - Use `Span` component instead for a more predictable behavior
 */
export const Text = styled(Span).attrs<TextProps>(
  ({ fontSize = 'medium', lineHeight }) => ({
    fontSize,
    lineHeight: lineHeight || fontSize,
  })
)<TextProps>``
