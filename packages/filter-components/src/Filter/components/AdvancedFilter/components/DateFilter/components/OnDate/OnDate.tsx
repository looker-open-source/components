/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions'
import {
  clearTimeFilterDateTimeModel,
  dateToFilterDateTimeModel,
  filterDateTimeModelToDate,
} from '@looker/filter-expressions'
import React from 'react'
import { DateInput } from '../DateInput'

interface OnDateParamProps {
  item: FilterModel
  onChange: (id: string, item: Partial<FilterModel>) => void
}

export const OnDate = ({ item, onChange }: OnDateParamProps) => {
  const { id, date } = item
  const dateChange = (newValue: Date) => {
    const newDateTimeModel = dateToFilterDateTimeModel(newValue)
    // Since filter is 'on date' skip the time part (DX-5280)
    onChange(id, { date: clearTimeFilterDateTimeModel(newDateTimeModel) })
  }
  const actualDate = date
    ? filterDateTimeModelToDate(date)
    : new Date(Date.now())

  return <DateInput date={actualDate} onChange={dateChange} placement="right" />
}
