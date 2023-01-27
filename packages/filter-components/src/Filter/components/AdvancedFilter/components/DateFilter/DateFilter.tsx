/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DateFilterType } from '@looker/filter-expressions'
import {
  convertTypeToMatchesAdvancedOption,
  isDateTime,
  sanitizeDate,
} from '@looker/filter-expressions'
import type { ElementType } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { useDateFilterOptions } from '../../utils/get_date_filter_options'
import { GroupSelect } from '../GroupSelect'
import { dateFilterTypeToFilter } from './utils/date_filter_type_to_filter'
import { newDateItem } from './utils/new_date_item'
import { useFilterOptions } from '../../utils'
import { ItemLayout } from '../ItemLayout'

export const DateFilter = ({
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
}: FilterParamProps<DateFilterType>) => {
  const typeChange = (value: string) =>
    onChange(item.id, sanitizeDate({ ...item, type: value }))
  const isParameter = !!field?.parameter
  const dateFilterOptions = useDateFilterOptions(isParameter)
  const type = convertTypeToMatchesAdvancedOption(item)
  if (type === 'matchesAdvanced') {
    showMatchesAdvanced = true
    showAdd = false
  }
  const options = useFilterOptions(
    dateFilterOptions,
    !isParameter && showMatchesAdvanced
  )

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
