/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { SpaceVertical } from '@looker/components'
import { Filter } from '../Filter'

export default function ExpressionTypeOrField() {
  return (
    <SpaceVertical>
      <Filter name="Age" expressionType="number" expression="[0,100]" />
      <Filter
        name="Age"
        type="field_filter"
        field={{ is_numeric: true }}
        expression="[0,100]"
      />
    </SpaceVertical>
  )
}
