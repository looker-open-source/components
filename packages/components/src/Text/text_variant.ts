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

import { variant } from 'styled-system'

export type TextVariants =
  | 'critical'
  | 'default'
  | 'positive'
  | 'secondary'
  | 'subdued'
  | 'inverted'

export interface TextVariantProps {
  /** Adjust style of text with more meaning by using an intent */
  variant?: TextVariants
}

export const textVariant = variant({
  prop: 'variant',
  variants: {
    critical: {
      color: 'palette.red500',
    },
    default: {
      color: 'palette.charcoal800',
    },
    inverted: {
      color: 'palette.textInverted',
    },
    positive: {
      color: 'palette.green500',
    },
    secondary: {
      color: 'palette.charcoal500',
    },
    subdued: {
      color: 'palette.charcoal400',
    },
  },
})
