/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import React from 'react'
import {
  useFiscalThisNextUnits,
  useFiscalLastUnits,
  useThisNextUnits,
  useLastUnits,
} from '../../../../../../constants'
import type { Option } from '../../../../../../types/option'
import { showFiscalUnits } from '../../../../utils/show_fiscal_units'
import { GroupSelect } from '../../../GroupSelect'

interface ThisNextLastProps {
  item: FilterModel
  field: ILookmlModelExploreField
  onChange: (id: string, item: Partial<FilterModel>) => void
}

const useOptions = (
  { type }: FilterModel,
  field: ILookmlModelExploreField
): Option[] => {
  const showFiscal = showFiscalUnits(field)

  const lastUnits = useLastUnits()
  const fiscalLastUnits = useFiscalLastUnits()
  const thisNextUnits = useThisNextUnits()
  const fiscalThisNextUnits = useFiscalThisNextUnits()

  if (type === 'last') {
    return showFiscal ? fiscalLastUnits : lastUnits
  }
  return showFiscal ? fiscalThisNextUnits : thisNextUnits
}

export const ThisNextLast = ({ item, onChange, field }: ThisNextLastProps) => {
  const { id, unit } = item

  const unitChange = (value: string) => onChange(id, { unit: value })

  const options = useOptions(item, field)

  return (
    <GroupSelect
      value={unit}
      options={options}
      onChange={unitChange}
      placement="right"
    />
  )
}
