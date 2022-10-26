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
import type { ILookmlModelExploreField } from '@looker/sdk'
import defaultTo from 'lodash/defaultTo'
import keyBy from 'lodash/keyBy'
import type { FilterItemToStringMapType, FilterModel } from '../..'
import type { FilterExpressionType } from '../../types'
import { addQuotes } from '../string/add_quotes'
import { describeIsItem } from '../summary/describe_is_item'
import { describeIsAnyValue } from '../summary/describe_is_any_value'
import { joinOr } from '../summary/join_or'
import { describeUserAttribute } from '../user_attribute/describe_user_attribute'
import { escapeParameterValue } from './escape_parameter_value'

const describeMultiValue = (
  values: string[],
  field?: ILookmlModelExploreField | null
) => {
  if (values) {
    if (field?.parameter && field?.has_allowed_values) {
      // if it's a parameter field - lookup value in enumerations to get label
      const valueMap = keyBy(field.enumerations, 'value')
      return joinOr(
        values.map((value) => {
          // parameter values in enumeration are already escaped
          // we escape here to match the enumeration values
          const escapedValue = escapeParameterValue(value)
          // if value is found in the enumeration list we return the label,
          // otherwise we will use the value as label
          return valueMap[escapedValue]?.label || value
        })
      )
    }
    return joinOr(values.map(addQuotes))
  }
  return ''
}

const match = (
  { is, value }: FilterModel,
  _?: string,
  field?: ILookmlModelExploreField | null
) => {
  return value && value.length
    ? describeIsItem(is, describeMultiValue(value, field))
    : describeIsAnyValue()
}

const filterToStringMap: FilterItemToStringMapType = {
  match,
  user_attribute: describeUserAttribute,
  anyvalue: describeIsAnyValue,
}

/**
 * Maps a FilterItem to a function for converting it to a filter summary
 */
export const describeTier = (
  item: FilterModel,
  filterType?: FilterExpressionType,
  field?: ILookmlModelExploreField | null
): string =>
  defaultTo(filterToStringMap[item.type], () => '')(item, filterType, field)
