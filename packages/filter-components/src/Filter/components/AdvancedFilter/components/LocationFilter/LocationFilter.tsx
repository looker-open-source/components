/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box, Flex } from '@looker/components'
import type { LocationFilterType } from '@looker/filter-expressions'
import React from 'react'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupSelect } from '../GroupSelect'
import { locationFilterTypeToFilter } from './utils/location_filter_type_to_filter'
import { useLocationFilterOptions, useFilterOptions } from '../../utils'

export const LocationFilter = ({
  item,
  filterType,
  onChange,
  userAttributes,
  validationMessage,
  showMatchesAdvanced,
}: FilterParamProps<LocationFilterType>) => {
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
