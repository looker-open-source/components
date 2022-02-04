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

import type { SpecifiableTextColors } from './specifiable'

interface HighlightColors {
  /**
   * Used to highlight / accent  content
   */
  informAccent: string
  /**
   * Used to highlight / accent content
   */
  positiveAccent: string
  /**
   * Used to highlight / accent  content
   */
  warnAccent: string
}

export interface DerivativeColors
  extends SpecifiableTextColors,
    HighlightColors {
  /**
   * Default input background
   * Text input, select input
   * @default white
   */
  field: string
  /**
   * High contrast surface
   * Used for: Tooltip background
   * @default charcoal800
   */
  inverse: string
  /**
   * Inverse color on high contrast elements
   * Used for: Icons in main nav, Text on primary buttons
   * @default white
   */
  inverseOn: string
  /**
   * Neutral intent color
   * Used for: Non-destructive cancel actions
   * @note This is can be automatically derived using the background & text colors
   * @default charcoal400
   */
  neutral: string
  /**
   * Link text color on interaction
   * Used for: Link :active, :focused and :hover states
   */
  linkInteractive: string
}

export const derivativeColors: Array<keyof DerivativeColors> = [
  'field',
  'inverse',
  'inverseOn',
  'neutral',
  'linkInteractive',
  'informAccent',
  'positiveAccent',
  'warnAccent',
]
