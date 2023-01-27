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
import type { FilterModel } from '@looker/filter-expressions'
import {
  addDays,
  dateToFilterDateTimeModel,
  filterDateTimeModelToDate,
} from '@looker/filter-expressions'
import React from 'react'
import type { PlacementProps } from '../../../../../../utils/filter_styles'
import { MidInputLabel } from '../../../MidInputLabel'
import { DateInput } from '../DateInput'
import { TimeInput } from '../TimeInput'
import { useTranslation } from '../../../../../../../utils'

interface DateRangeParamProps extends PlacementProps {
  item: FilterModel
  onChange: (id: string, item: Partial<FilterModel>) => void
  showTime?: boolean
}

export const DateRange = ({
  item,
  onChange,
  placement,
  showTime,
}: DateRangeParamProps) => {
  const { id, start, end } = item
  const startDate = start
    ? filterDateTimeModelToDate(start)
    : new Date(Date.now())
  const endDate = end ? filterDateTimeModelToDate(end) : new Date(Date.now())

  const startChange = (newStart: Date) => {
    if (newStart > endDate) {
      const newEnd = addDays(newStart, 1)
      onChange(id, {
        start: dateToFilterDateTimeModel(newStart),
        end: dateToFilterDateTimeModel(newEnd),
      })
    } else {
      onChange(id, { start: dateToFilterDateTimeModel(newStart) })
    }
  }

  const endChange = (newEnd: Date) => {
    if (newEnd < startDate) {
      const newStart = addDays(newEnd, -1)
      onChange(id, {
        start: dateToFilterDateTimeModel(newStart),
        end: dateToFilterDateTimeModel(newEnd),
      })
    } else {
      onChange(id, { end: dateToFilterDateTimeModel(newEnd) })
    }
  }
  const { t } = useTranslation('DateRange')

  return (
    <Flex>
      <DateInput
        date={startDate}
        onChange={startChange}
        placement={placement === 'right' ? 'middle' : 'left'}
      />
      {showTime && (
        <TimeInput date={startDate} onChange={startChange} placement="middle" />
      )}
      <MidInputLabel>{t('until (before)')}</MidInputLabel>
      <DateInput
        date={endDate}
        onChange={endChange}
        placement={showTime ? 'middle' : 'right'}
      />
      {showTime && (
        <TimeInput date={endDate} onChange={endChange} placement="right" />
      )}
    </Flex>
  )
}
