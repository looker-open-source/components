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
import type { FilterModel } from '@looker/filter-expressions'
import {
  dateToFilterDateTimeModel,
  filterDateTimeModelToDate,
} from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { ChangeEvent } from 'react'
import React, { useMemo } from 'react'
import {
  useBeforeOrAfterUnits,
  useFiscalBeforeOrAfterUnits,
} from '../../../../../../constants'
import { useTranslation } from '../../../../../../../utils'
import { showFiscalUnits } from '../../../../utils/show_fiscal_units'
import { GroupSelect } from '../../../GroupSelect'
import { DateInput } from '../DateInput'
import { TimeInput } from '../TimeInput'

import { GroupInput } from '../../../GroupInput'

interface BeforeAfterProps {
  item: FilterModel
  onChange: (id: string, item: Partial<FilterModel>) => void
  showTime?: boolean
  field: ILookmlModelExploreField
  filterType: string
}

export const BeforeAfter = ({
  item,
  onChange,
  showTime,
  field,
} : BeforeAfterProps) => {
  const { t } = useTranslation('BeforeAfter')
  const options = [
    { value: 'absolute', label: t('absolute') },
    { value: 'relative', label: t('relative') },
  ]
  const { id, range, date, unit, value, fromnow } = item
  const rangeChange = (value: string) => {
    onChange(id, { range: value })
  }
  const valueChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(id, { value: Number(e.target.value) })

  const unitChange = (value: string) => {
    const option = unitOptions.find((option) => option.value === value)
    onChange(id, { unit: option?.unit, fromnow: option?.fromnow })
  }

  const dateChange = (newDate: Date) => {
    const newDateTimeModel = dateToFilterDateTimeModel(newDate)
    onChange(id, { date: newDateTimeModel })
  }

  const actualDate = date ? filterDateTimeModelToDate(date) : new Date()
  const selectedValue = fromnow ? `f_${unit}` : `${unit}`

  const fiscalBeforeOrAfterUnits = useFiscalBeforeOrAfterUnits()
  const beforeOrAfterUnits = useBeforeOrAfterUnits()
  const unitOptions = showFiscalUnits(field)
    ? fiscalBeforeOrAfterUnits
    : beforeOrAfterUnits
  // unitOptions have extra properties that will cause React warnings
  const formattedUnitOptions = useMemo(
    () => unitOptions.map(({ label, value }) => ({ label, value })),
    [unitOptions]
  )
  return (
    <>
      <GroupSelect
        placement="middle"
        value={range}
        options={options}
        onChange={rangeChange}
      />
      {range === 'relative' && (
        <>
          {selectedValue !== 'now' && (
            <GroupInput
              onChange={valueChange}
              value={value}
              placement="middle"
              data-testid="number-value"
            />
          )}
          <GroupSelect
            placement="right"
            value={selectedValue}
            options={formattedUnitOptions}
            onChange={unitChange}
          />
        </>
      )}
      {range === 'absolute' && (
        <>
          <DateInput
            date={actualDate}
            onChange={dateChange}
            placement={showTime ? 'middle' : 'right'}
          />
          {showTime && (
            <TimeInput
              date={actualDate}
              onChange={dateChange}
              placement="right"
            />
          )}
        </>
      )}
    </>
  )
}

export default BeforeAfter
