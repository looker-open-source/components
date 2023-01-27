/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputDateRange } from '../InputDateRange'
import type { InputDateRangeProps } from '../InputDateRange'

const noop = () => undefined

export default function Basic({
  value = {},
  onChange = noop,
  ...props
}: InputDateRangeProps) {
  return <InputDateRange value={value} onChange={onChange} {...props} />
}
