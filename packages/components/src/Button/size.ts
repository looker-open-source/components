/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
} from '@looker/design-tokens'
import { variant } from 'styled-system'

export type ButtonSizes = SizeXSmall | SizeSmall | SizeMedium | SizeLarge

export interface ButtonSizeProps {
  /**
   * Defines the size of the button.
   * @default "medium"
   */
  size?: ButtonSizes
}

/* eslint-disable sort-keys */
export const buttonSize = variant({
  prop: 'size',
  variants: {
    xsmall: {
      fontSize: 'xsmall',
      height: '22px',
      px: 'xsmall',
    },
    small: {
      fontSize: 'small',
      height: '26px',
      px: 'small',
    },
    medium: {
      fontSize: 'medium',
      height: '34px',
      px: 'medium',
    },
    large: {
      fontSize: 'xlarge',
      height: '42px',
      px: 'large',
    },
  },
})
