/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { DashboardFilter } from '../DashboardFilter'
import type { DashboardFilterProps } from '../DashboardFilter'

export default function Basic({
  filter = {
    field: { is_numeric: true },
    id: '1',
    name: 'Cost',
    type: 'field_filter',
    allow_multiple_values: true,
  },
  ...props
}: DashboardFilterProps) {
  return <DashboardFilter filter={filter} {...props} />
}
