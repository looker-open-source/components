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
