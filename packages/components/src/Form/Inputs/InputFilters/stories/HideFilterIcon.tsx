/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputFilters } from '../'
import type { InputFiltersProps } from '../'

const mockFilters = [
  { field: 'role', options: ['admin', 'group-admin', 'user', 'pizza'] },
  {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella'],
  },
  {
    field: 'name',
    label: 'Name',
    options: ['Name 1', 'Name 2', 'Name 3'],
  },
  { field: 'status', options: ['Failed', 'In-Progress', 'Success'] },
  {
    field: 'buildAt',
    label: 'Last Build Time',
    options: ['01-22-20', '02-13-20', '05-28-20'],
  },
]

export default function Basic(props: InputFiltersProps) {
  const {
    hideFilterIcon = true,
    filters: filtersProp = mockFilters,
    onChange: _onChange,
    ...restProps
  } = props

  const [controlledFilters, setControlledFilters] = useState(filtersProp)

  return (
    <InputFilters
      hideFilterIcon={hideFilterIcon}
      onChange={setControlledFilters}
      filters={controlledFilters}
      {...restProps}
    />
  )
}
