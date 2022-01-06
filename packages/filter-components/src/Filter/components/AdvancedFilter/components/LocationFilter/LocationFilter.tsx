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
import type { LocationFilterType } from '@looker/filter-expressions'
import type { FC } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupSelect } from '../GroupSelect'
import { locationFilterTypeToFilter } from './utils/location_filter_type_to_filter'
import { useLocationFilterOptions, useFilterOptions } from '../../utils'

export const LocationFilter: FC<FilterParamProps<LocationFilterType>> = ({
  item,
  filterType,
  onChange,
  userAttributes,
  validationMessage,
  showMatchesAdvanced,
}) => {
  const locationFilterOptions = useLocationFilterOptions()
  const options = useFilterOptions(locationFilterOptions, showMatchesAdvanced)

  const locationTypeChange = (value: string) =>
    onChange(item.id, { type: value })

  const FilterComponent: any = locationFilterTypeToFilter(item.type)

  return (
    <Flex flexDirection="row" alignItems="center">
      <Box>
        <GroupSelect
          value={item.type}
          options={options}
          onChange={locationTypeChange}
          validationType={validationMessage?.type}
          placement={
            ['null', 'notnull', 'anyvalue'].includes(item.type)
              ? undefined
              : 'left'
          }
        />
      </Box>
      <FilterComponent
        item={item}
        onChange={onChange}
        validationMessage={validationMessage}
        userAttributes={userAttributes}
        filterType={filterType}
      />
    </Flex>
  )
}
