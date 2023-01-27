/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Fields } from '../types'

export const DEFAULT_HEIGHT = 500
export const DEFAULT_MIN_HEIGHT = 75
export const DEFAULT_SERIES_COLORS = [
  '#6c43e0',
  '#b73ec3',
  '#db4da8',
  '#ed6995',
  '#f1898f',
]
export const DEFAULT_STRING_FORMAT = '0,0.[00]'
export const DEFAULT_STRING_FORMAT_PERCENT = '0.[00]%'
export const DEFAULT_MARGIN = 50

export const DEFAULT_EMPTY_FIELDS: Fields = {
  dimensions: [],
  measures: [],
  pivots: [],
}
