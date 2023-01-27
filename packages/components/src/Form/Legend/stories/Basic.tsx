/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Legend } from '../'
import type { LegendProps } from '../'

export default function Basic(props: LegendProps) {
  const { children = 'I am legend', ...restProps } = props
  return <Legend {...restProps}>{children}</Legend>
}
