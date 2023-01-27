/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Filter } from '../Filter'

export default function MultiConditionDate() {
  return (
    <Filter
      name="test"
      allowMultipleValues
      expressionType="date"
      expression="this week,last week, next week"
    />
  )
}
