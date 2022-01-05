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
import type { FilterModel } from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { ChangeEvent, FC } from 'react'
import React from 'react'
import {
  useDateUnits,
  useFiscalIntervalUnits,
} from '../../../../../../constants'
import { showFiscalUnits } from '../../../../utils/show_fiscal_units'

import { GroupSelect } from '../../../GroupSelect'
import { GroupInput } from '../../../GroupInput'

export interface IntervalItemProps {
  value: number
  unit: string
}

interface IntervalParamProps {
  placement?: 'middle' | 'right'
  item: FilterModel
  suffix?: string
  onChange: (item: IntervalItemProps) => void
  field: ILookmlModelExploreField
}

export const Interval: FC<IntervalParamProps> = ({
  placement = 'right',
  item: { unit, value },
  onChange,
  field,
}) => {
  const valueChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange({ value: Number(e.target.value), unit })

  const unitChange = (unit: string) => onChange({ value, unit })

  const fiscalIntervalUnits = useFiscalIntervalUnits()
  const dateUnits = useDateUnits()
  const options = showFiscalUnits(field) ? fiscalIntervalUnits : dateUnits
  return (
    <>
      <GroupInput onChange={valueChange} value={value} placement="middle" />
      <GroupSelect
        value={unit}
        options={options}
        onChange={unitChange}
        placement={placement}
      />
    </>
  )
}
