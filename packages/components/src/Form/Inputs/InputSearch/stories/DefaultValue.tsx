/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '..'
import type { InputSearchProps } from '../'

export default function DefaultValue(props: InputSearchProps) {
  const {
    placeholder = 'Type your search',
    defaultValue = 'test search 0',
    ...restProps
  } = props

  return (
    <InputSearch
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...restProps}
    />
  )
}
