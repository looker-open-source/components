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
import type { StringFilterType } from '@looker/filter-expressions'
import {
  convertOptionToType,
  convertTypeToOption,
  sanitizeString,
} from '@looker/filter-expressions'
import type { ElementType } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupSelect } from '../GroupSelect'
import { stringFilterTypeToFilter } from './utils/string_filter_type_to_filter'
import { useStringFilterOptions, useFilterOptions } from '../../utils'
import { ItemLayout } from '../ItemLayout'

const typesUsingSuggestions: StringFilterType[] = [
  'match',
  'contains',
  'startsWith',
  'endsWith',
]

export const StringFilter = ({
  item,
  filterType,
  onInputChange,
  suggestions,
  userAttributes,
  isLoading,
  onChange,
  showMatchesAdvanced,
  validationMessage,
  ...rest
}: FilterParamProps<StringFilterType>) => {
  const isParameter = rest.field?.parameter
  const stringFilterOptions = useStringFilterOptions(isParameter)
  const options = useFilterOptions(
    stringFilterOptions,
    !isParameter && showMatchesAdvanced
  )
  const typeChange = (value: string) =>
    onChange(
      item.id,
      sanitizeString(
        { ...item, ...convertOptionToType(String(value)) },
        userAttributes
      )
    )

  const FilterComponent: ElementType = stringFilterTypeToFilter(
    item.type,
    isParameter,
    rest.allowMultipleOptions
  )

  const selectValue = convertTypeToOption(item)
  return (
    <ItemLayout item={item} {...rest}>
      <GroupSelect
        value={selectValue}
        options={options}
        onChange={typeChange}
        validationType={validationMessage?.type}
        placement={['blank', 'null'].includes(item.type) ? undefined : 'left'}
      />
      <FilterComponent
        item={item}
        onInputChange={onInputChange}
        onChange={onChange}
        validationMessage={validationMessage}
        suggestions={
          typesUsingSuggestions.includes(item.type) ? suggestions : undefined
        }
        placement="right"
        userAttributes={userAttributes}
        filterType={filterType}
        isLoading={isLoading}
      />
    </ItemLayout>
  )
}
