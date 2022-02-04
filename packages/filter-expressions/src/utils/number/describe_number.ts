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
import defaultTo from 'lodash/defaultTo'
import type { FilterItemToStringMapType, FilterModel } from '../../types'
import { describeIsItem } from '../summary/describe_is_item'
import { describeNull } from '../summary/describe_null'
import { describeUserAttribute } from '../user_attribute/describe_user_attribute'

const describeEquals = ({ is, value }: FilterModel) =>
  `${describeIsItem(is)} ${
    value && value.length ? value.join(' or ') : 'any value'
  }`

const describeSingleValue = ({ is, type, value }: FilterModel): string =>
  `${describeIsItem(is)} ${type} ${value && value.length ? value[0] : ''}`

const describeBetween = ({ bounds, low, high, is }: any) =>
  bounds
    ? `${describeIsItem(is)} in range ${bounds[0]}${low}, ${high}${bounds[1]}`
    : ''

const filterToStringMap: FilterItemToStringMapType = {
  null: describeNull,
  between: describeBetween,
  '=': describeEquals,
  '>': describeSingleValue,
  '>=': describeSingleValue,
  '<': describeSingleValue,
  '<=': describeSingleValue,
  user_attribute: describeUserAttribute,
}

/**
 * Maps a FilterItem to a function for converting it to a filter summary
 */
export const describeNumber = (item: FilterModel): string =>
  defaultTo(filterToStringMap[item.type], () => '')(item)
