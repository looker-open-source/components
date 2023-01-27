/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import i18next from 'i18next'
import defaultTo from 'lodash/defaultTo'
import type { FilterItemToStringMapType, FilterModel } from '../../types'
import { describeIsItem } from '../summary/describe_is_item'
import { describeIsAnyValue } from '../summary/describe_is_any_value'
import { describeNull } from '../summary/describe_null'
import { joinOr } from '../summary/join_or'
import { describeUserAttribute } from '../user_attribute/describe_user_attribute'

const describeEquals = ({ is, value }: FilterModel) => {
  return value && value.length
    ? describeIsItem(is, joinOr(value))
    : describeIsAnyValue()
}

const describeSingleValue = ({ is, type, value }: FilterModel): string =>
  describeIsItem(is, `${type} ${value && value.length ? value[0] : ''}`)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const describeBetween = ({ bounds, low, high, is }: any) => {
  if (bounds) {
    const t = i18next.t.bind(i18next)
    const range = `${bounds[0]}${low}, ${high}${bounds[1]}`
    const isInRangeText = t('is in range range', {
      ns: 'describe_number',
      range,
    })
    const isNotInRangeText = t('is not in range range', {
      ns: 'describe_number',
      range,
    })
    return is ? isInRangeText : isNotInRangeText
  }
  return ''
}

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
