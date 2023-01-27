/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Filter } from '../Filter'

export default function MultiConditionNumber() {
  return (
    <Filter
      name="test"
      allowMultipleValues
      expressionType="number"
      expression="[0,20],>30"
    />
  )
}
