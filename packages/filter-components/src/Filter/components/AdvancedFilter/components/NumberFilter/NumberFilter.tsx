/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { NumberFilterType } from '@looker/filter-expressions'
import {
  convertOptionToType,
  convertTypeToOption,
  sanitizeNumber,
} from '@looker/filter-expressions'
import React from 'react'
import { useTranslation } from '../../../../../utils'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { ItemLayout } from '../ItemLayout'
import { GroupSelect } from '../GroupSelect'
import { numberFilterTypeToFilter } from './utils/number_filter_type_to_filter'
import { useNumberFilterOptions, useFilterOptions } from '../../utils'

export const NumberFilter = ({
  item,
  filterType,
  onChange,
  validationMessage,
  userAttributes,
  showMatchesAdvanced,
  ...rest
}: FilterParamProps<NumberFilterType>) => {
  const isParameter = !!rest.field?.parameter
  const numberFilterOptions = useNumberFilterOptions(isParameter)
  const options = useFilterOptions(
    numberFilterOptions,
    !isParameter && showMatchesAdvanced
  )

  const typeChange = (value: string) =>
    onChange(
      item.id,
      sanitizeNumber({ ...item, ...convertOptionToType(String(value)) })
    )

  const FilterComponent: any = numberFilterTypeToFilter(
    item.type,
    !!rest.allowMultipleOptions,
    isParameter
  )
  const selectValue = convertTypeToOption(item)

  const validationText = validationMessage?.message
  const { t } = useTranslation('NumberFilter')
  const placeholder =
    validationText ||
    (!item?.value?.length || item.value.length === 0 ? t('any value') : '')

  return (
    <ItemLayout item={item} {...rest}>
      <GroupSelect
        value={selectValue}
        options={options}
        onChange={typeChange}
        validationType={validationMessage?.type}
        placement={item.type === 'null' ? undefined : 'left'}
      />
      <FilterComponent
        item={item}
        onChange={onChange}
        validationMessage={validationMessage}
        placement="right"
        userAttributes={userAttributes}
        filterType={filterType}
        placeholder={placeholder}
      />
    </ItemLayout>
  )
}
