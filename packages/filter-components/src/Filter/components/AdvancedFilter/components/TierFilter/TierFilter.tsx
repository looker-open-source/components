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
import { Box, Flex } from '@looker/components'
import {
  convertOptionToType,
  convertTypeToOption,
} from '@looker/filter-expressions'
import type { ElementType, FC } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupSelect } from '../GroupSelect'
import { OperatorLabel } from '../OperatorLabel'
import { tierFilterTypeToFilter } from './utils/tier_filter_type_to_filter'
import {
  useParamFilterOptions,
  useTierFilterOptions,
  useFilterOptions,
} from '../../utils'
import { AddRemoveButtons } from '../AddRemoveButtons'
import { createEnumeration } from '../../../../utils'

export const TierFilter: FC<FilterParamProps> = ({
  item,
  filterType,
  enumerations,
  field,
  userAttributes,
  onChange,
  onAdd,
  onRemove,
  showAdd,
  showRemove,
  showOperator,
  showMatchesAdvanced,
  validationMessage,
}) => {
  const typeChange = (value: string) =>
    onChange(item.id, convertOptionToType(String(value)))
  const handleOnAdd = () => onAdd(item)
  const handleOnRemove = () => onRemove(item.id)
  const selectValue = convertTypeToOption(item)

  const isParamFilter = field ? field.category === 'parameter' : false
  const unescapeEnumerationValues = field?.has_allowed_values && isParamFilter
  const unescapedEnumerations = enumerations?.map(
    createEnumeration(unescapeEnumerationValues)
  )
  const FilterComponent: ElementType = tierFilterTypeToFilter(
    item.type,
    isParamFilter
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
    <Flex flexDirection="row" alignItems="center">
      {showOperator && <OperatorLabel value={item.is} />}
      <Box alignSelf="flex-start">
        <GroupSelect
          value={selectValue}
          options={options}
          onChange={typeChange}
          validationMessage={validationMessage}
          placement={item.type === 'anyvalue' ? undefined : 'left'}
        />
      </Box>
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
      <AddRemoveButtons
        onRemove={handleOnRemove}
        onAdd={handleOnAdd}
        showAdd={showAdd}
        showRemove={showRemove}
      />
    </Flex>
  )
}
