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
import type { FilterModel } from '@looker/filter-expressions'
import {
  addDays,
  dateToFilterDateTimeModel,
  filterDateTimeModelToDate,
} from '@looker/filter-expressions'
import type { DayRange } from '../types/day_range'
import type { RelativeTimeframeModel } from '../types/relative_timeframe_types'
import { AllPresetTimeframes } from '../types/relative_timeframe_types'

export const filterModelToRelativeTimeframeModel = (
  filterModel: FilterModel
): RelativeTimeframeModel | undefined => {
  const { day, end, start, type, unit, value, startInterval, endInterval } =
    filterModel
  if (type === 'day' && day === 'today') {
    return AllPresetTimeframes.Today
  } else if (type === 'day' && day === 'yesterday') {
    return AllPresetTimeframes.Yesterday
  } else if (type === 'past' && unit === 'day' && value === 7) {
    return AllPresetTimeframes.Last7
  } else if (type === 'past' && unit === 'day' && value === 14) {
    return AllPresetTimeframes.Last14
  } else if (type === 'past' && unit === 'day' && value === 28) {
    return AllPresetTimeframes.Last28
  } else if (type === 'past' && unit === 'day' && value === 30) {
    return AllPresetTimeframes.Last30
  } else if (type === 'past' && unit === 'day' && value === 90) {
    return AllPresetTimeframes.Last90
  } else if (type === 'past' && unit === 'day' && value === 180) {
    return AllPresetTimeframes.Last180
  } else if (type === 'past' && unit === 'day' && value === 365) {
    return AllPresetTimeframes.Last365
  } else if (
    type === 'thisRange' &&
    startInterval === 'year' &&
    endInterval === 'second'
  ) {
    return AllPresetTimeframes.YearToDate
  } else if (type === 'this' && unit === 'week') {
    return AllPresetTimeframes.ThisWeek
  } else if (type === 'this' && unit === 'month') {
    return AllPresetTimeframes.ThisMonth
  } else if (type === 'this' && unit === 'quarter') {
    return AllPresetTimeframes.ThisQuarter
  } else if (type === 'this' && unit === 'year') {
    return AllPresetTimeframes.ThisYear
  } else if (type === 'last' && unit === 'week') {
    return AllPresetTimeframes.PreviousWeek
  } else if (type === 'last' && unit === 'month') {
    return AllPresetTimeframes.PreviousMonth
  } else if (type === 'last' && unit === 'quarter') {
    return AllPresetTimeframes.PreviousQuarter
  } else if (type === 'last' && unit === 'year') {
    return AllPresetTimeframes.PreviousYear
  } else if (type === 'range' && end && start) {
    const startDate = filterDateTimeModelToDate(start)
    const endDate = addDays(filterDateTimeModelToDate(end), -1)
    return {
      from: startDate,
      to: endDate,
    }
  }

  return undefined
}

export const relativeTimeframeModelToFilterModel = (
  relativeTimeframe: RelativeTimeframeModel
): Partial<FilterModel> => {
  switch (relativeTimeframe) {
    case AllPresetTimeframes.Today:
      return {
        day: 'today',
        type: 'day',
      }
    case AllPresetTimeframes.Yesterday:
      return {
        day: 'yesterday',
        type: 'day',
      }
    case AllPresetTimeframes.Last7:
      return {
        type: 'past',
        unit: 'day',
        value: 7,
      }
    case AllPresetTimeframes.Last14:
      return {
        type: 'past',
        unit: 'day',
        value: 14,
      }
    case AllPresetTimeframes.Last28:
      return {
        type: 'past',
        unit: 'day',
        value: 28,
      }
    case AllPresetTimeframes.Last30:
      return {
        type: 'past',
        unit: 'day',
        value: 30,
      }
    case AllPresetTimeframes.Last90:
      return {
        type: 'past',
        unit: 'day',
        value: 90,
      }
    case AllPresetTimeframes.Last180:
      return {
        type: 'past',
        unit: 'day',
        value: 180,
      }
    case AllPresetTimeframes.Last365:
      return {
        type: 'past',
        unit: 'day',
        value: 365,
      }
    case AllPresetTimeframes.YearToDate:
      return {
        type: 'thisRange',
        startInterval: 'year',
        endInterval: 'second',
      }
    case AllPresetTimeframes.ThisWeek:
      return {
        type: 'this',
        unit: 'week',
      }
    case AllPresetTimeframes.ThisMonth:
      return {
        type: 'this',
        unit: 'month',
      }
    case AllPresetTimeframes.ThisQuarter:
      return {
        type: 'this',
        unit: 'quarter',
      }
    case AllPresetTimeframes.ThisYear:
      return {
        type: 'this',
        unit: 'year',
      }
    case AllPresetTimeframes.PreviousWeek:
      return {
        type: 'last',
        unit: 'week',
      }
    case AllPresetTimeframes.PreviousMonth:
      return {
        type: 'last',
        unit: 'month',
      }
    case AllPresetTimeframes.PreviousQuarter:
      return {
        type: 'last',
        unit: 'quarter',
      }
    case AllPresetTimeframes.PreviousYear:
      return {
        type: 'last',
        unit: 'year',
      }
  }
  // Custom
  const dayRange = relativeTimeframe as DayRange
  const startDateModel = dateToFilterDateTimeModel(dayRange.from)
  const endPlusOne = addDays(dayRange.to, 1)
  const endDateModel = dateToFilterDateTimeModel(endPlusOne)
  return {
    end: endDateModel,
    start: startDateModel,
    type: 'range',
  }
}
