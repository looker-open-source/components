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
import type { FilterASTNode, FilterModel, FilterExpressionType } from '../types'

import { addDays, dateToFilterDateTimeModel, sanitizeDate } from './date'
import { sanitizeNumber } from './number'
import { sanitizeString } from './string'

// transforms the AST for user with filter tokens
export const getFilterTokenItem = (
  root: FilterASTNode,
  filterType: FilterExpressionType,
  configType: string
): FilterModel => {
  let item = { ...root } as FilterModel
  switch (filterType) {
    case 'number':
      item = getNumberFilterTokenItem(item, configType)
      break
    case 'string':
      item = sanitizeString({ ...item, type: 'match' })
      break
    case 'date':
      item = getDateFilterTokenItem(item, configType)
      break
  }
  return { ...item, is: true, left: null, right: null }
}

/**
 * Transforms the number filter item type according to filter config type
 */
const getNumberFilterTokenItem = (
  item: FilterModel,
  configType: string
): FilterModel => {
  switch (configType) {
    case 'range_slider': {
      const value = (item.value && item.value?.[0]) || 0
      return sanitizeNumber({
        ...item,
        type: 'between',
        low: item.low ?? value,
        high: item.high ?? value,
      })
    }
    case 'slider':
      return sanitizeNumber({
        ...item,
        type: '=',
        value: item.value?.length ? item.value : item.low ? [item.low] : [0],
      })
    default:
      return sanitizeNumber({ ...item, type: '=' })
  }
}

const getDateFilterTokenItem = (
  item: FilterModel,
  configType: string
): FilterModel => {
  switch (configType) {
    case 'day_picker':
      return sanitizeDate({ ...item, type: 'on' })
    case 'day_range_picker': {
      // get default dateItem
      const dateItem =
        item.date || dateToFilterDateTimeModel(new Date(Date.now()))
      const {
        start = dateItem,
        end = dateToFilterDateTimeModel(addDays(new Date(Date.now()), 1)),
      } = item
      return sanitizeDate({ ...item, type: 'range', start, end })
    }
    default:
      return sanitizeDate(item)
  }
}
