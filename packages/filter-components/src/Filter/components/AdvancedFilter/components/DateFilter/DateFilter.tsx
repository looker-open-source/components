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

import type { DateFilterType } from '@looker/filter-expressions'
import {
  convertTypeToMatchesAdvancedOption,
  isDateTime,
  sanitizeDate,
} from '@looker/filter-expressions'
import type { ElementType, FC } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { useDateFilterOptions } from '../../utils/get_date_filter_options'
import { GroupSelect } from '../GroupSelect'
import { dateFilterTypeToFilter } from './utils/date_filter_type_to_filter'
import { newDateItem } from './utils/new_date_item'
import { useFilterOptions } from '../../utils'
import { ItemLayout } from '../ItemLayout'

export const DateFilter: FC<FilterParamProps<DateFilterType>> = ({
  item,
  filterType,
  onChange,
  onAdd,
  showAdd,
  showMatchesAdvanced,
  validationMessage,
  userAttributes,
  field,
  ...rest
}) => {
  const typeChange = (value: string) =>
    onChange(item.id, sanitizeDate({ ...item, type: value }))
  const dateFilterOptions = useDateFilterOptions()
  const type = convertTypeToMatchesAdvancedOption(item)
  if (type === 'matchesAdvanced') {
    showMatchesAdvanced = true
    showAdd = false
  }
  const options = useFilterOptions(dateFilterOptions, showMatchesAdvanced)

  const handleOnAdd = () => onAdd(newDateItem(item), true)

  const FilterComponent: ElementType = dateFilterTypeToFilter(item.type)

  return (
    <ItemLayout item={item} showAdd={showAdd} onAdd={handleOnAdd} {...rest}>
      <GroupSelect
        value={type}
        options={options}
        onChange={typeChange}
        validationType={validationMessage?.type}
        placement={
          ['null', 'notnull', 'anyvalue'].includes(item.type)
            ? undefined
            : 'left'
        }
      />
      <FilterComponent
        item={item}
        onChange={onChange}
        borderRadiusLeft={0}
        userAttributes={userAttributes}
        showTime={isDateTime(filterType)}
        validationMessage={validationMessage}
        filterType={filterType}
        field={field}
        placement="right"
      />
    </ItemLayout>
  )
}
