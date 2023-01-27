/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Paragraph, SpaceVertical } from '@looker/components'
import { Filter } from '../Filter'
import type { FilterChangeProps } from '../types/filter_props'

export default function ExpressionOnChange() {
  const [expression, setExpression] = useState('[0,100]')
  const handleChange = (value: FilterChangeProps) => {
    setExpression(value.expression)
  }
  return (
    <SpaceVertical>
      <Filter
        name="Age"
        expressionType="number"
        expression={expression}
        onChange={handleChange}
      />
      <Paragraph>
        <strong>Current filter expression:</strong> {expression}
      </Paragraph>
    </SpaceVertical>
  )
}
