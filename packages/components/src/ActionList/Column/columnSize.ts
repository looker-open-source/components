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

import {
  SizeSmall,
  SizeMedium,
  SizeLarge,
} from '@looker/design-tokens/src/system'
import { variant } from 'styled-system'

export type ColumnSize = SizeSmall | SizeMedium | SizeLarge | 'auto' | 'nowrap'

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const columnSize = variant({
  prop: 'size',
  variants: {
    small: {
      minWidth: '3rem',
      maxWidth: '3rem',
    },
    medium: {
      minWidth: '12rem',
      maxWidth: '12rem',
    },
    large: {
      minWidth: '20rem',
      maxWidth: '20rem',
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
  },
})
