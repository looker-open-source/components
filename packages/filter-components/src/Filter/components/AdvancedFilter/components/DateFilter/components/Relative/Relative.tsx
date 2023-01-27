/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box2 } from '@looker/components'
import type { FilterModel } from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import React from 'react'
import { useTranslation } from '../../../../../../../utils'
import { GroupSelect } from '../../../GroupSelect'
import { MidInputLabel } from '../../../MidInputLabel'
import type { IntervalItemProps } from '../Interval'
import { Interval } from '../Interval'

interface RelativeParamProps {
  item: FilterModel
  field: ILookmlModelExploreField
  onChange: (id: string, item: Partial<FilterModel>) => void
}

export const Relative = ({
  item: { id, intervalType, startInterval, endInterval },
  onChange,
  field,
}: RelativeParamProps) => {
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
