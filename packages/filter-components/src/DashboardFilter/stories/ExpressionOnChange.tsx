/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Paragraph, SpaceVertical } from '@looker/components'
import { DashboardFilter } from '../DashboardFilter'

export default function ExpressionOnChange() {
  const [expression, setExpression] = useState('[0,100]')
  return (
    <SpaceVertical>
      <DashboardFilter
        filter={{
          field: { is_numeric: true },
          id: '1',
          name: 'Age',
          type: 'field_filter',
        }}
        expression={expression}
        onChange={setExpression}
      />
      <Paragraph>
        <strong>Current filter expression:</strong> {expression}
      </Paragraph>
    </SpaceVertical>
  )
}
