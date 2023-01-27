/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { DashboardFilter } from '../DashboardFilter'

export default function Suggestions() {
  const [expression, setExpression] = useState('')
  return (
    <DashboardFilter
      filter={{
        field: { suggestable: true },
        name: 'Status',
        type: 'field_filter',
        ui_config: { type: 'button_group' },
        allow_multiple_values: true,
      }}
      sdk={
        {
          // Mock sdk instance used to fetch suggested values
          ok: (value: any) => value,
          get: () =>
            Promise.resolve({
              suggestions: ['complete', 'pending', 'cancelled'],
            }),
        } as any
      }
      expression={expression}
      onChange={setExpression}
    />
  )
}
