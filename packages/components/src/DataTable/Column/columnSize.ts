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
import { css } from 'styled-components'
import { variant } from 'styled-system'

export type DataTableColumnSize =
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | 'auto'
  | 'nowrap'
  | number

export const sizeInfersTruncate = (size: DataTableColumnSize) =>
  size && typeof size !== 'number' && !['auto', 'nowrap'].includes(size)

/* eslint-disable sort-keys-fix/sort-keys-fix */
const columnSizeVariants = variant({
  prop: 'size',
  variants: {
    small: {
      maxWidth: '3rem',
      minWidth: '3rem',
    },
    medium: {
      maxWidth: '12rem',
      minWidth: '12rem',
    },
    large: {
      maxWidth: '20rem',
      minWidth: '20rem',
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
  },
})

const percentWidth = (width: number) => `width: ${width}%;`

export const columnSize = css<{ size?: DataTableColumnSize }>`
  ${({ size }) =>
    typeof size === 'number' ? percentWidth(size) : columnSizeVariants}
`

/**
 * Used on columns where no size is explicitly specified to keep content to `min-content` width
 */
export const noColumnSize = css`
  max-width: 0;
  min-width: 0;
`
