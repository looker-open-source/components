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

import {
  convertOptionToType,
  convertTypeToOption,
} from '@looker/filter-expressions'
import type { ElementType } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupSelect } from '../GroupSelect'
import { tierFilterTypeToFilter } from './utils/tier_filter_type_to_filter'
import {
  useParamFilterOptions,
  useTierFilterOptions,
  useFilterOptions,
} from '../../utils'
import { ItemLayout } from '../ItemLayout'
import { createEnumeration } from '../../../../utils'

export const TierFilter  = ({
  item,
  filterType,
  enumerations,
  field,
  userAttributes,
  onChange,
  showMatchesAdvanced,
  validationMessage,
  ...rest
} : FilterParamProps) => {
  const typeChange = (value: string) =>
    onChange(item.id, convertOptionToType(String(value)))
  const selectValue = convertTypeToOption(item)

  const isParamFilter = field ? field.category === 'parameter' : false
  const unescapeEnumerationValues = field?.has_allowed_values && isParamFilter
  const unescapedEnumerations = enumerations?.map(
    createEnumeration(unescapeEnumerationValues)
  )
  const FilterComponent: ElementType = tierFilterTypeToFilter(
    item.type,
    isParamFilter,
    rest.allowMultipleOptions
  )
  const isValueSet = item.value && item.value.length > 0
  const isValueInEnumeration = unescapedEnumerations?.some((e) =>
    item.value?.includes(e.value)
  )

  if (
    isParamFilter &&
    unescapedEnumerations?.length &&
    isValueSet &&
    !isValueInEnumeration
  ) {
    item.value = [String(unescapedEnumerations[0].value)]
  }

  const paramFilterOptions = useParamFilterOptions()
  const tierFilterOptions = useTierFilterOptions()
  const options = useFilterOptions(
    isParamFilter ? paramFilterOptions : tierFilterOptions,
    isParamFilter ? false : showMatchesAdvanced
  )

  return (
    <ItemLayout item={item} {...rest}>
      <GroupSelect
        value={selectValue}
        options={options}
        onChange={typeChange}
        validationType={validationMessage?.type}
        placement={item.type === 'anyvalue' ? undefined : 'left'}
      />
      <FilterComponent
        item={item}
        onChange={onChange}
        borderRadiusLeft={0}
        disableCreate={true}
        validationMessage={validationMessage}
        enumerations={unescapedEnumerations}
        userAttributes={userAttributes}
        filterType={filterType}
        placement="right"
      />
    </ItemLayout>
  )
}
