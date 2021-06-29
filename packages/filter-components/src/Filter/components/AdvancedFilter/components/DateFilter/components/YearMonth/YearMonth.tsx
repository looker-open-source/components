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
import { getMonths } from '@looker/filter-expressions'
import padStart from 'lodash/padStart'
import type { ChangeEvent, FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import type { FilterParamProps } from '../../../../../../types/filter_param_props'
import { createOptions } from '../../../../../../utils/option_utils'
import { GroupSelect } from '../../../GroupSelect'
import { GroupInput } from '../../../GroupInput'

export const YearMonth: FC<FilterParamProps> = ({
  item: { id, month, year },
  onChange,
}: FilterParamProps) => {
  const { t } = useTranslation('get_months')
  const months = getMonths(t)
  const monthNumber = Number.parseInt(month, 10) - 1
  const monthString = months[monthNumber]

  const yearChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(id, { year: e.target.value })
  }

  const monthChange = (value: string) => {
    const monthValue = padStart(
      String(months.indexOf(value as string) + 1),
      2,
      '0'
    )
    onChange(id, {
      month: monthValue,
    })
  }

  return (
    <>
      <GroupSelect
        value={monthString}
        options={createOptions(months)}
        onChange={monthChange}
        placement="middle"
      />
      <GroupInput onChange={yearChange} value={year} placement="right" />
    </>
  )
}
