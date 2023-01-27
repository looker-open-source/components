/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'

export default function ClearIconLabel(props: InputSearchProps) {
  const {
    clearIconLabel = 'Reset this seach field',
    value = 'my query',
    ...restProps
  } = props

  return (
    <InputSearch clearIconLabel={clearIconLabel} value={value} {...restProps} />
  )
}
