/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  SwapVert,
} from '@styled-icons/material'
import type { TFunction } from 'react-i18next'
import type { ColumnSort } from '@tanstack/table-core'

type StyledIcon = typeof SwapVert

type SortAssets = {
  ariaSort: 'none' | 'ascending' | 'descending' | 'other'
  SortIcon: StyledIcon
  sortText: string
}

/**
 * Returns appropriate Icon and label text to render
 * based on the given ColumnSort values
 * @param t a react-i18next translation function
 * @param columnSortState a configuration object that only exists if column is already sorted
 * @returns
 */

export const getSortAssets = (
  t: TFunction<string | string[]>,
  columnSortState?: ColumnSort
): SortAssets => {
  if (typeof columnSortState === 'undefined') {
    return {
      SortIcon: SwapVert,
      sortText: t('Shift + Click to sort additional columns', { ns: 'Table' }),
      // eslint-disable-next-line i18next/no-literal-string
      ariaSort: 'none',
    }
  } else if (columnSortState.desc) {
    return {
      SortIcon: KeyboardArrowDown,
      sortText: t('Sort ascending', { ns: 'Table' }),
      // eslint-disable-next-line i18next/no-literal-string
      ariaSort: 'descending',
    }
  } else {
    return {
      SortIcon: KeyboardArrowUp,
      sortText: t('Sort descending', { ns: 'Table' }),
      // eslint-disable-next-line i18next/no-literal-string
      ariaSort: 'ascending',
    }
  }
}
