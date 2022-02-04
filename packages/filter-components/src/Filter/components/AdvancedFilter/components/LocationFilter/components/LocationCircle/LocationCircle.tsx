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
import { Flex } from '@looker/components'
import type {
  CircleFilterItem,
  ExactLocationFilterItem,
} from '@looker/filter-expressions'
import pick from 'lodash/pick'
import type { ChangeEvent, FC } from 'react'
import React from 'react'
import { GroupInput } from '../../../GroupInput'
import { GroupSelect } from '../../../GroupSelect'
import { LocationExact } from '../LocationExact'
import { useUnitOptions } from '../../../../utils'

interface LocationCircleProps {
  onChange: (id: string, value: any) => void
  item: CircleFilterItem
}

export const LocationCircle: FC<LocationCircleProps> = ({ item, onChange }) => {
  const unitOptions = useUnitOptions()

  const distanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.currentTarget.value) >= 0) {
      onChange?.(item.id, {
        distance: event.currentTarget.value,
        unit: item.unit || 'miles',
      })
    }
  }
  const unitChange = (value: string) => {
    onChange?.(item.id, { unit: value })
  }

  return (
    <Flex flexDirection="row">
      <GroupInput
        value={String(item.distance || '')}
        type="number"
        onChange={distanceChange}
        minWidth="4.5em"
      />
      <GroupSelect
        placement="middle"
        value={item.unit || 'miles'}
        options={unitOptions}
        onChange={unitChange}
      />
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
        latString="FROM LATITUDE"
      />
    </Flex>
  )
}
