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
import type { ExactLocationFilterItem } from '@looker/filter-expressions'
import type { ChangeEvent } from 'react'
import React from 'react'
import styled from 'styled-components'
import {
  MAX_LATITUDE,
  MAX_LONGITUDE,
  MIN_LATITUDE,
  MIN_LONGITUDE,
} from '../../../../../../constants'
import { GroupInput } from '../../../GroupInput'

interface LocationExactProps {
  item: ExactLocationFilterItem
  onChange: (id: string, value: any) => void

  latString?: string
  lonString?: string

  lat?: string
  lon?: string

  placement?: 'middle' | 'right'
}

export const LocationExact = ({
  item,
  onChange,
  latString = 'LATITUDE',
  lonString = 'LONGITUDE',
  lat = 'lat',
  lon = 'lon',
  placement = 'right',
}: LocationExactProps) => {
  const latChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Latitude range: [-90, 90]
    if (
      Number(event.currentTarget.value) <= MAX_LATITUDE &&
      Number(event.currentTarget.value) >= MIN_LATITUDE
    ) {
      onChange(item.id, { [lat]: event.currentTarget.value })
    }
  }

  const lonChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Longitude range: [-180, 180]
    if (
      Number(event.currentTarget.value) <= MAX_LONGITUDE &&
      Number(event.currentTarget.value) >= MIN_LONGITUDE
    ) {
      onChange(item.id, { [lon]: event.currentTarget.value })
    }
  }

  return (
    <Flex flexDirection="row">
      <GroupInput
        before={<Prefix>{latString}</Prefix>}
        value={String(item.lat || '')}
        type="number"
        onChange={latChange}
        placement="middle"
        minWidth={`${latString.length / 2 + 5.5}em`}
      />
      <GroupInput
        before={<Prefix>{lonString}</Prefix>}
        value={String(item.lon || '')}
        type="number"
        onChange={lonChange}
        placement={placement}
        minWidth={`${lonString.length / 2 + 5.5}em`}
      />
    </Flex>
  )
}

const Prefix = styled.span`
  color: ${({ theme: { colors } }) => colors.text1};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xsmall};
  white-space: nowrap;
`
