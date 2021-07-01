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

const serializeTierItem = (
  type: FilterExpressionType,
  field?: ILookmlModelExploreField
) => (item: FilterModel): string => {
  const toStringFunction: FilterItemToStringFunction =
    filterToStringMap[item.type]
  return toStringFunction?.(item, type, field) || ''
}
/**
 * Maps a FilterItem to a function for converting it to an expression
 */

const listToExpression = (
  type: FilterExpressionType,
  field?: ILookmlModelExploreField
) => (items: FilterModel[]) =>
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
