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
import { Box2 } from '@looker/components'
import type { FilterModel } from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { GroupSelect } from '../../../GroupSelect'
import { MidInputLabel } from '../../../MidInputLabel'
import type { IntervalItemProps } from '../Interval'
import { Interval } from '../Interval'

interface RelativeParamProps {
  item: FilterModel
  field: ILookmlModelExploreField
  onChange: (id: string, item: Partial<FilterModel>) => void
}

export const Relative: FC<RelativeParamProps> = ({
  item: { id, intervalType, startInterval, endInterval },
  onChange,
  field,
}) => {
  const { t } = useTranslation('Relative')
  const options = [
    { value: 'ago', label: t('ago') },
    { value: 'from now', label: t('from now') },
  ]

  const intervalTypeChange = (value: string) => {
    onChange(id, { intervalType: value })
  }

  const startChange = (interval: IntervalItemProps) => {
    onChange(id, { startInterval: interval })
  }

  const endChange = (interval: IntervalItemProps) => {
    onChange(id, { endInterval: interval })
  }

  return (
    <Box2 display="flex" bg="field">
      <Interval
        placement="middle"
        item={startInterval}
        onChange={startChange}
        field={field}
      />
      <GroupSelect
        value={intervalType}
        options={options}
        onChange={intervalTypeChange}
        placement="middle"
      />
      <MidInputLabel>FOR</MidInputLabel>
      <Interval item={endInterval} onChange={endChange} field={field} />
    </Box2>
  )
}
