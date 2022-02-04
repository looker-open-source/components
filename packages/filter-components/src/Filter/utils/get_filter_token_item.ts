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

import type {
  FilterASTNode,
  FilterExpressionType,
  FilterModel,
} from '@looker/filter-expressions'
import {
  sanitizeString,
  sanitizeNumber,
  sanitizeDate,
  dateToFilterDateTimeModel,
  addDays,
} from '@looker/filter-expressions'
import { filterModelToRelativeTimeframeModel } from '../components/AdvancedFilter/components/DateFilter/utils'

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
  let value = [0]
  if (item.value?.length) {
    value = item.value
  } else if (item.low) {
    value = [item.low]
  }
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
        value,
      })
    default:
      return sanitizeNumber({ ...item, type: '=' })
  }
}

const getRelativeTimeframesTokenItem = (item: FilterModel) => {
  if (item.type === 'on') {
    // convert to range if it's single day
    const dateItem =
      item.date || dateToFilterDateTimeModel(new Date(Date.now()))
    const {
      start = dateItem,
      end = dateToFilterDateTimeModel(addDays(new Date(Date.now()), 1)),
    } = item
    return sanitizeDate({ ...item, type: 'range', start, end })
  }
  // if it doesn't match relativeTimeframes presets default to 'last 7 days'
  if (!filterModelToRelativeTimeframeModel(item)) {
    return sanitizeDate({ ...item, type: 'past', unit: 'day', value: 7 })
  }
  return sanitizeDate(item)
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
    case 'relative_timeframes':
      return getRelativeTimeframesTokenItem(item)
    default:
      return sanitizeDate(item)
  }
}
