/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SizeSmall, SizeMedium, SizeLarge } from '@looker/design-tokens'
import { variant } from '@looker/design-tokens'
import { css } from 'styled-components'

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
    size && typeof size === 'number' ? percentWidth(size) : columnSizeVariants}
`
