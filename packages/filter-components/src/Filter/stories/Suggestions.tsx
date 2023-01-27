/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Filter } from '../Filter'

export default function Suggestions() {
  return (
    <Filter
      name="Status"
      expressionType="string"
      expression="pending"
      suggestions={['complete', 'pending', 'cancelled']}
    />
  )
}
