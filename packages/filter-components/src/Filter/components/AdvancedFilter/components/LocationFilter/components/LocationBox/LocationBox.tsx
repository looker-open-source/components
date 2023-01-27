/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Flex } from '@looker/components'
import type {
  BoxFilterItem,
  ExactLocationFilterItem,
} from '@looker/filter-expressions'
import pick from 'lodash/pick'
import React from 'react'

import { LocationExact } from '../LocationExact'

interface LocationBoxProps {
  onChange: (id: string, value: any) => void
  item: BoxFilterItem
}

export const LocationBox = ({ item, onChange }: LocationBoxProps) => (
  <Flex flexDirection="row">
    <LocationExact
      item={
        pick(item, [
          'id',
          'is',
          'lat',
          'lon',
          'type',
        ]) as ExactLocationFilterItem
      }
      onChange={onChange}
      placement="middle"
      latString="FROM LATITUDE"
    />
    <LocationExact
      lat="lat1"
      lon="lon1"
      item={{
        id: item.id,
        is: item.is,
        lat: item.lat1,
        lon: item.lon1,
        type: item.type,
      }}
      onChange={onChange}
      latString="TO LATITUDE"
    />
  </Flex>
)
