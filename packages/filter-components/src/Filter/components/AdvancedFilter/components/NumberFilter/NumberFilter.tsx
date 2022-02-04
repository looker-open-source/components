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

import type { NumberFilterType } from '@looker/filter-expressions'
import {
  convertOptionToType,
  convertTypeToOption,
  sanitizeNumber,
} from '@looker/filter-expressions'
import type { FC } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { ItemLayout } from '../ItemLayout'
import { GroupSelect } from '../GroupSelect'
import { numberFilterTypeToFilter } from './utils/number_filter_type_to_filter'
import { useNumberFilterOptions, useFilterOptions } from '../../utils'
import { useTranslation } from 'react-i18next'

export const NumberFilter: FC<FilterParamProps<NumberFilterType>> = ({
  item,
  filterType,
  onChange,
  validationMessage,
  userAttributes,
  showMatchesAdvanced,
  ...rest
}) => {
  const numberFilterOptions = useNumberFilterOptions()
  const options = useFilterOptions(numberFilterOptions, showMatchesAdvanced)

  const typeChange = (value: string) =>
    onChange(
      item.id,
      sanitizeNumber({ ...item, ...convertOptionToType(String(value)) })
    )

  const FilterComponent: any = numberFilterTypeToFilter(item.type)
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
