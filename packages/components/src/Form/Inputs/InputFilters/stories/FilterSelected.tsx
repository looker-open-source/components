/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputFilters } from '..'
import type { InputFiltersProps } from '..'

const filterWithValue = {
  field: 'status',
  formatValue: (value: string) => value.toUpperCase(),
  options: ['Failed', 'Success'],
  value: 'Success',
}

export default function FilterSelected({
  filters: filtersProp = [filterWithValue],
  ...args
}: InputFiltersProps) {
  const [controlledFilters, setControlledFilters] = useState(filtersProp)

  return (
    <InputFilters
      {...args}
      filters={controlledFilters}
      onChange={setControlledFilters}
    />
  )
}
