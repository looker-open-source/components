/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { DashboardFilter } from '../DashboardFilter'

export default function Required() {
  const [expression, setExpression] = useState('')
  return (
    <DashboardFilter
      filter={{
        field: { is_numeric: true },
        id: '1',
        name: 'Age',
        required: true,
        type: 'field_filter',
      }}
      expression={expression}
      onChange={setExpression}
    />
  )
}
