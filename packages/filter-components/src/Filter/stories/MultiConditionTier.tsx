/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Filter } from '../Filter'

export default function MultiConditionTier() {
  return (
    <Filter
      name="test"
      allowMultipleValues
      expressionType="tier"
      expression="20 to 29,{{ _user_attributes['locale'] }}"
    />
  )
}
