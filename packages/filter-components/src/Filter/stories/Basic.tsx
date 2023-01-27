/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { FilterProps, FilterChangeProps } from '../types/filter_props'
import { Filter } from '../Filter'

export default function Basic({
  allowMultipleValues = true,
  expressionType = 'number',
  ...props
}: FilterProps) {
  const [expression, setExpression] = useState(props.expression || '')
  const handleChange = (value: FilterChangeProps) => {
    props.onChange?.(value)
    setExpression(value.expression)
  }
  return (
    <Filter
      {...props}
      onChange={handleChange}
      allowMultipleValues={allowMultipleValues}
      expression={expression}
      expressionType={expressionType}
    />
  )
}
