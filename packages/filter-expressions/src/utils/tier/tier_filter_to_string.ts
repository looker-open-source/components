/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk'
import flow from 'lodash/fp/flow'
import type {
  FilterASTNode,
  FilterExpressionType,
  FilterItemToStringFunction,
  FilterItemToStringMapType,
  FilterModel,
} from '../..'
import { quoteFilter } from '../string/quote_filter'
import isItemToString from '../to_string/is_item_to_string'
import { userAttributeToString } from '../user_attribute/user_attribute_to_string'
import { escapeParameterValue } from './escape_parameter_value'
import { treeToList } from '../tree/tree_to_list'

const matchToString = (
  { value, is }: FilterModel,
  _?: string,
  field?: ILookmlModelExploreField | null
) => {
  return (
    isItemToString(is, '', '-') +
    value
      .map((val: string) =>
        field?.has_allowed_values && field?.parameter
          ? escapeParameterValue(val)
          : quoteFilter(val)
      )
      .join(`,${isItemToString(is, '', '-')}`)
  )
}

const anyvalueToString = () => ''

const filterToStringMap: FilterItemToStringMapType = {
  anyvalue: anyvalueToString,
  match: matchToString,
  user_attribute: userAttributeToString,
}

const serializeTierItem =
  (type: FilterExpressionType, field?: ILookmlModelExploreField) =>
  (item: FilterModel): string => {
    const toStringFunction: FilterItemToStringFunction =
      filterToStringMap[item.type]
    return toStringFunction?.(item, type, field) || ''
  }
/**
 * Maps a FilterItem to a function for converting it to an expression
 */

const listToExpression =
  (type: FilterExpressionType, field?: ILookmlModelExploreField) =>
  (items: FilterModel[]) =>
    items.map(serializeTierItem(type, field)).join(',')

/**
 * Converts the AST to an array of FilterItems and then
 * converts each item into its expression representation
 */
export const tierFilterToString = (
  root: FilterASTNode,
  type: FilterExpressionType,
  field?: ILookmlModelExploreField
): string => flow(treeToList, listToExpression(type, field))(root)
