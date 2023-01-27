/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
