/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { getMonths } from '@looker/filter-expressions'
import padStart from 'lodash/padStart'
import type { ChangeEvent } from 'react'
import React from 'react'
import { useTranslation } from '../../../../../../../utils'
import type { FilterParamProps } from '../../../../../../types/filter_param_props'
import { createOptions } from '../../../../../../utils/option_utils'
import { GroupSelect } from '../../../GroupSelect'
import { GroupInput } from '../../../GroupInput'

export const YearMonth = ({
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
