/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Filter } from '../Filter'

export default function MultiConditionString() {
  return (
    <Filter
      name="test"
      allowMultipleValues
      expressionType="string"
      expression="%Active%,MV Sport,-Activewear Apparel"
    />
  )
}
