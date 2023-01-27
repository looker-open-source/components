/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { ChangeEvent } from 'react'
import React, { useMemo } from 'react'
import { useFiscalPastUnits, usePastUnits } from '../../../../../../constants'
import { showFiscalUnits } from '../../../../utils/show_fiscal_units'
import { GroupSelect } from '../../../GroupSelect'
import { GroupInput } from '../../../GroupInput'

interface PastProps {
  item: FilterModel
  onChange: (id: string, item: Partial<FilterModel>) => void
  field: ILookmlModelExploreField
}

export const Past = ({ item, onChange, field }: PastProps) => {
  const { id, value, unit, complete } = item

  const valueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = String(e.target.value).split(',').map(Number)
    onChange(id, { value: newValue })
  }

  const unitChange = (value: string) => {
    const option = options.find((option) => option.value === value)
    onChange(item.id, { unit: option?.unit, complete: option?.complete })
  }
  const selectedUnit = complete ? `c_${unit}` : `${unit}`

  const fiscalPastUnits = useFiscalPastUnits()
  const pastUnits = usePastUnits()
  const options = showFiscalUnits(field) ? fiscalPastUnits : pastUnits
  // options have extra properties that will cause React warnings
  const formattedOptions = useMemo(
    () => options.map(({ label, value }) => ({ label, value })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <>
      <GroupInput onChange={valueChange} value={value} placement="middle" />
      <GroupSelect
        value={selectedUnit}
        options={formattedOptions}
        onChange={unitChange}
        placement="right"
      />
    </>
  )
}
