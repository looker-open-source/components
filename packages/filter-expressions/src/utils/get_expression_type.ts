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
import { Category } from '@looker/sdk'
import type { IDashboardFilter, ILookmlModelExploreField } from '@looker/sdk'
import type { FilterExpressionType } from '../types/filter_type'

interface FilterExpressionTypeMap {
  [type: string]: FilterExpressionType
}

const getTimeframeExpressionType = (fieldType?: string) => {
  if (!fieldType) return 'date'

  const isDateTime = ['date_time', 'hour', 'minute', 'second'].some(
    (timeString: string) => {
      return fieldType.indexOf(timeString) > -1
    }
  )
  if (isDateTime) return 'date_time'

  return 'date'
}

/**
 * yields a value for the 'expressionType' prop on the Filter component
 */
export const getExpressionTypeFromField = (
  field: ILookmlModelExploreField
): FilterExpressionType => {
  if (field?.category === Category.parameter && field?.type === 'number') {
    // If parameter field has enumerations it always parsed as 'tier' but
    // visually should be treated differently if number type defined in LookML
    // bugs: b/187940941, b/199507872
    return field.type as FilterExpressionType
  }
  if (field.enumerations) {
    return 'tier'
  }
  if (field.is_numeric) {
    return 'number'
  }
  if (field.is_timeframe) {
    return getTimeframeExpressionType(field.type)
  }
  if (field.type === 'location' || field.type === 'location_bin_level') {
    return 'location'
  }
  return 'string'
}

/**
 * Returns a valid filter expression type from a DashboardFilter object
 * depending if the filter is of type field or not
 */
export const getExpressionType = (
  filter: Pick<IDashboardFilter, 'type' | 'field'>
): FilterExpressionType => {
  if (filter.field) {
    return getExpressionTypeFromField(filter.field as ILookmlModelExploreField)
  }

  const filterExpressionMap: FilterExpressionTypeMap = {
    number_filter: 'number',
    string_filter: 'string',
    date_filter: 'date',
    // Catch for broken cases where field is not defined, display as a
    // string filter
    field_filter: 'string',
  }
  return filterExpressionMap[filter.type!]
}
