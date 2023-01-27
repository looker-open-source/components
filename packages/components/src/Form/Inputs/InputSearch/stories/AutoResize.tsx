/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'

export default function AutoResize(props: InputSearchProps) {
  const {
    autoResize = true,
    placeholder = 'Start typing to resize',
    ...restProps
  } = props

  return (
    <InputSearch
      autoResize={autoResize}
      placeholder={placeholder}
      {...restProps}
    />
  )
}
