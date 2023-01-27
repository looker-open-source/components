/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'

export default function IsClearable(props: InputSearchProps) {
  const {
    placeholder = 'Type your search',
    defaultValue = 'test search 1',
    isClearable = false,
    ...restProps
  } = props

  return (
    <InputSearch
      placeholder={placeholder}
      defaultValue={defaultValue}
      isClearable={isClearable}
      {...restProps}
    />
  )
}
